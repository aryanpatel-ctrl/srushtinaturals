import { useEffect, useRef } from 'react';

/**
 * AnimationInitializer - Optimized scroll-triggered animations
 * Uses a single IntersectionObserver for better performance
 */
function AnimationInitializer() {
  const observerRef = useRef(null);
  const progressCleanupRef = useRef(null);

  useEffect(() => {
    // Single unified observer for all animation types
    const initAnimations = () => {
      // Clean up previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;

              // Handle different animation types
              if (el.hasAttribute('data-animate')) {
                el.classList.add('animated');
              }
              if (el.classList.contains('animate-on-scroll')) {
                el.classList.add('is-visible');
              }
              if (el.classList.contains('stagger-children')) {
                el.classList.add('is-visible');
              }
              if (el.classList.contains('section-title')) {
                el.classList.add('animated');
              }

              // Unobserve after animation
              observerRef.current.unobserve(el);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      // Observe all animated elements
      const selectors = [
        '[data-animate]',
        '.animate-on-scroll',
        '.stagger-children',
        '.section-title.nature-style'
      ];

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          observerRef.current.observe(el);
        });
      });
    };

    // Throttled scroll progress
    const initScrollProgress = () => {
      let progressBar = document.querySelector('.scroll-progress');
      let ticking = false;

      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);
      }

      const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateProgress);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      updateProgress();

      return () => window.removeEventListener('scroll', onScroll);
    };

    // Initialize with small delay
    const timeout = setTimeout(() => {
      initAnimations();
      progressCleanupRef.current = initScrollProgress();
    }, 150);

    // Handle route changes
    const handleRouteChange = () => {
      setTimeout(initAnimations, 250);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('popstate', handleRouteChange);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (progressCleanupRef.current) {
        progressCleanupRef.current();
      }
    };
  }, []);

  return null;
}

export default AnimationInitializer;
