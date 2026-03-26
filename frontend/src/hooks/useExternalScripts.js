import { useEffect, useRef } from "react";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-ext-src="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.extSrc = src;

    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    });

    script.addEventListener("error", () => {
      reject(new Error(`Failed to load script: ${src}`));
    });

    document.body.appendChild(script);
  });
}

/**
 * Reinitialize plugins after route change
 * Let carousel.js handle Swiper initialization via window.load event
 */
export function reinitializePlugins() {
  setTimeout(() => {
    // Reinitialize WOW.js animations for new elements
    if (typeof window.WOW !== "undefined") {
      try {
        new window.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        }).init();
      } catch (e) {}
    }

    // Trigger window load to let carousel.js initialize new Swipers
    window.dispatchEvent(new Event("load"));

    // After initialization, update swipers, zoom, and trigger resize
    setTimeout(() => {
      // Update all existing Swiper instances
      document.querySelectorAll('.tf-swiper').forEach((el) => {
        if (el.swiper) {
          el.swiper.update();
        }
      });

      // Reinitialize zoom functionality
      if (typeof window.reinitZoom === 'function') {
        window.reinitZoom();
      }

      // Trigger resize for layout adjustments
      window.dispatchEvent(new Event("resize"));
    }, 250);
  }, 150);
}

export function useExternalScripts(sources, enabled = true) {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (!enabled || !Array.isArray(sources) || sources.length === 0) {
      return undefined;
    }

    let cancelled = false;

    const loadSequentially = async () => {
      if (scriptsLoaded.current) {
        // Already loaded, reinitialize
        reinitializePlugins();
        return;
      }

      for (const src of sources) {
        if (cancelled) return;
        try {
          await loadScript(src);
        } catch (error) {
          console.warn(`Failed to load: ${src}`);
        }
      }

      if (cancelled) return;
      scriptsLoaded.current = true;
    };

    loadSequentially().catch(console.error);

    return () => { cancelled = true; };
  }, [sources, enabled]);
}

export function useRouteChangeReinit(pathname) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    reinitializePlugins();
  }, [pathname]);
}
