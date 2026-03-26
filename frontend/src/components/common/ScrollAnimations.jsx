import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation - Hook for scroll-triggered animations
 * Returns ref and isVisible state
 */
export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

/**
 * AnimateOnScroll - Wrapper component for scroll animations
 */
export const AnimateOnScroll = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  style = {}
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(animation),
    transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
    ...style
  };

  return (
    <div ref={ref} className={className} style={animationStyles}>
      {children}
    </div>
  );
};

const getInitialTransform = (animation) => {
  switch (animation) {
    case 'fadeInUp':
      return 'translateY(40px)';
    case 'fadeInDown':
      return 'translateY(-40px)';
    case 'fadeInLeft':
      return 'translateX(-40px)';
    case 'fadeInRight':
      return 'translateX(40px)';
    case 'fadeInScale':
      return 'scale(0.9)';
    case 'fadeIn':
    default:
      return 'none';
  }
};

/**
 * StaggeredAnimation - Animate children with staggered delays
 */
export const StaggeredAnimation = ({
  children,
  animation = 'fadeInUp',
  staggerDelay = 0.1,
  initialDelay = 0,
  duration = 0.5,
  className = '',
  childClassName = ''
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? children.map((child, index) => (
        <div
          key={index}
          className={childClassName}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : getInitialTransform(animation),
            transition: `opacity ${duration}s ease ${initialDelay + index * staggerDelay}s, transform ${duration}s ease ${initialDelay + index * staggerDelay}s`
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  );
};

/**
 * ParallaxSection - Creates parallax scrolling effect
 */
export const ParallaxSection = ({
  children,
  speed = 0.5,
  className = '',
  style = {}
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        setOffset(scrolled * speed * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  );
};

/**
 * CountUpAnimation - Animated counter
 */
export const CountUpAnimation = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.5);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

/**
 * TextReveal - Reveal text character by character or word by word
 */
export const TextReveal = ({
  text,
  mode = 'word', // 'word' or 'char'
  delay = 0,
  stagger = 0.05,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const items = mode === 'word' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ease ${delay + index * stagger}s, transform 0.4s ease ${delay + index * stagger}s`,
            marginRight: mode === 'word' ? '0.3em' : '0'
          }}
        >
          {item}
        </span>
      ))}
    </span>
  );
};

export default {
  useScrollAnimation,
  AnimateOnScroll,
  StaggeredAnimation,
  ParallaxSection,
  CountUpAnimation,
  TextReveal
};
