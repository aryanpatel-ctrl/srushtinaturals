import { useState, useEffect, useRef } from 'react';

/**
 * TrustSection - Build trust through certifications, stats, and values
 *
 * Features:
 * - Dark green background (#103C29)
 * - Glassmorphism card style
 * - Animated counter for stats
 * - Certification badges
 * - Value propositions
 */
function TrustSection() {
  // Stats with animated counters
  const stats = [
    { value: 10000, suffix: '+', label: 'Happy Customers' },
    { value: 100, suffix: '%', label: 'Organic Products' },
    { value: 25, suffix: '+', label: 'Product Varieties' },
    { value: 15, suffix: '+', label: 'Years Experience' }
  ];

  // Trust badges/values
  const trustBadges = [
    { icon: 'organic', label: '100% Organic' },
    { icon: 'chemical', label: 'Chemical Free' },
    { icon: 'farm', label: 'Farm Direct' },
    { icon: 'natural', label: 'All Natural' }
  ];

  // Animated counter hook
  const CounterAnimation = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [target]);

    return (
      <span ref={ref} className="stat-counter">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  // Icon components
  const TrustIcon = ({ type }) => {
    const icons = {
      organic: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" stroke="#FFEB8A" strokeWidth="2" />
          <path
            d="M20 10C20 10 26 15 26 20C26 25 23 28 20 30C17 28 14 25 14 20C14 15 20 10 20 10Z"
            fill="#FFEB8A"
            fillOpacity="0.3"
            stroke="#FFEB8A"
            strokeWidth="1.5"
          />
          <path d="M20 15V25" stroke="#FFEB8A" strokeWidth="1.5" />
        </svg>
      ),
      chemical: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" stroke="#FFEB8A" strokeWidth="2" />
          <path d="M12 12L28 28M28 12L12 28" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      farm: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 28L20 16L32 28" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 28V34H28V28" stroke="#FFEB8A" strokeWidth="2" />
          <path d="M18 34V28H22V34" stroke="#FFEB8A" strokeWidth="2" />
          <path d="M20 8V16" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      natural: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8C14 14 10 20 10 26C10 32 14 36 20 36C26 36 30 32 30 26C30 20 26 14 20 8Z" fill="#FFEB8A" fillOpacity="0.3" stroke="#FFEB8A" strokeWidth="2" />
          <path d="M20 36V20" stroke="#FFEB8A" strokeWidth="1.5" />
          <path d="M16 28C18 26 22 26 24 28" stroke="#FFEB8A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    };
    return icons[type] || icons.organic;
  };

  return (
    <section className="trust-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center wow fadeInUp">
          <p className="section-tagline">Why Trust Us</p>
          <h2 className="section-title nature-style" style={{ color: 'white' }}>
            Our Commitment to <span style={{ color: '#FFEB8A' }}>Purity</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="row justify-content-center mt-5 mb-5">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3 text-center mb-4" key={index}>
              <div className="wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
                <p className="stat-counter-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges wow fadeInUp" data-wow-delay="0.3s">
          {trustBadges.map((badge, index) => (
            <div className="trust-badge" key={index}>
              <div style={{ width: '24px', height: '24px' }}>
                <TrustIcon type={badge.icon} />
              </div>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Trust Cards */}
        <div className="trust-cards">
          {/* Card 1: Certifications */}
          <div className="trust-card wow fadeInUp" data-wow-delay="0.1s">
            <div className="trust-card-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 12V20C4 28.8 10.4 36.8 20 40C29.6 36.8 36 28.8 36 20V12L20 4Z" stroke="#FFEB8A" strokeWidth="2" fill="none" />
                <path d="M14 20L18 24L26 16" stroke="#FFEB8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="trust-card-title">Quality Certified</h3>
            <p className="trust-card-text">
              All our products undergo rigorous quality checks. We maintain the highest standards from farm to packaging.
            </p>
          </div>

          {/* Card 2: Farm Fresh */}
          <div className="trust-card wow fadeInUp" data-wow-delay="0.2s">
            <div className="trust-card-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="32" rx="14" ry="4" stroke="#FFEB8A" strokeWidth="2" />
                <path d="M20 8V28" stroke="#FFEB8A" strokeWidth="2" />
                <path d="M20 8C20 8 28 12 28 18C28 22 24 26 20 26" fill="none" stroke="#FFEB8A" strokeWidth="2" />
                <path d="M20 12C20 12 14 15 14 19C14 22 17 24 20 24" fill="none" stroke="#FFEB8A" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="trust-card-title">Farm Fresh</h3>
            <p className="trust-card-text">
              Direct from our family farm in Gujarat. No middlemen means fresher products and fair prices.
            </p>
          </div>

          {/* Card 3: Traditional Methods */}
          <div className="trust-card wow fadeInUp" data-wow-delay="0.3s">
            <div className="trust-card-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="10" stroke="#FFEB8A" strokeWidth="2" />
                <path d="M20 4V10" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 30V36" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 20H10" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 20H36" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
                <path d="M8.8 8.8L13 13" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
                <path d="M27 27L31.2 31.2" stroke="#FFEB8A" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="trust-card-title">Time-Tested Methods</h3>
            <p className="trust-card-text">
              Traditional farming and processing methods passed down through generations, preserving natural nutrition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
