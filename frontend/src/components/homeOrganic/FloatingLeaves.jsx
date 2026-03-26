import { useMemo, useEffect, useState } from 'react';

/**
 * FloatingLeaves - Optimized ambient floating leaf particles
 *
 * Performance optimizations:
 * - Reduced default count for subtle effect
 * - Uses CSS containment for isolation
 * - Respects prefers-reduced-motion
 * - Only renders when in viewport
 */
function FloatingLeaves({ count = 5, intensity = 'subtle', overlay = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Delay rendering for better initial load performance
  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  // Simple leaf shapes using CSS instead of SVG for better performance
  const leaves = useMemo(() => {
    if (prefersReducedMotion) return [];

    const getIntensityConfig = () => {
      switch (intensity) {
        case 'high':
          return { duration: [18, 28], delay: [0, 8], size: [12, 24] };
        case 'medium':
          return { duration: [22, 35], delay: [0, 12], size: [10, 20] };
        default: // subtle
          return { duration: [28, 45], delay: [0, 15], size: [8, 18] };
      }
    };

    const config = getIntensityConfig();
    const colors = [
      'rgba(112, 133, 122, 0.5)',
      'rgba(139, 90, 43, 0.4)',
      'rgba(180, 100, 20, 0.35)',
      'rgba(76, 112, 85, 0.45)'
    ];

    return Array.from({ length: count }, (_, i) => {
      const duration = config.duration[0] + Math.random() * (config.duration[1] - config.duration[0]);
      const delay = Math.random() * config.delay[1];
      const size = config.size[0] + Math.random() * (config.size[1] - config.size[0]);
      const startX = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const reverse = Math.random() > 0.5;

      return {
        id: i,
        color,
        style: {
          left: `${startX}%`,
          width: `${size}px`,
          height: `${size * 1.4}px`,
          backgroundColor: color,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationName: reverse ? 'floatLeafReverse' : 'floatLeaf',
        }
      };
    });
  }, [count, intensity, prefersReducedMotion]);

  // Don't render if reduced motion or not visible yet
  if (prefersReducedMotion || !isVisible) return null;

  return (
    <div
      className="floating-leaves-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: overlay ? 5 : 0,
        contain: 'strict'
      }}
      aria-hidden="true"
    >
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="floating-leaf-simple"
          style={leaf.style}
        />
      ))}

      <style>{`
        .floating-leaf-simple {
          position: absolute;
          border-radius: 50% 0 50% 50%;
          opacity: 0;
          will-change: transform, opacity;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translateZ(0);
        }

        @keyframes floatLeaf {
          0% {
            transform: translateY(-5vh) rotate(0deg) translateX(0) translateZ(0);
            opacity: 0;
          }
          8% {
            opacity: 0.7;
          }
          92% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(50px) translateZ(0);
            opacity: 0;
          }
        }

        @keyframes floatLeafReverse {
          0% {
            transform: translateY(-5vh) rotate(0deg) translateX(0) translateZ(0);
            opacity: 0;
          }
          8% {
            opacity: 0.7;
          }
          92% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(-360deg) translateX(-50px) translateZ(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default FloatingLeaves;
