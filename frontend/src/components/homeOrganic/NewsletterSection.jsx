import { useState } from 'react';

/**
 * NewsletterSection - "Join Our Farm Family"
 *
 * Features:
 * - Nature-themed email signup
 * - Animated submit button
 * - Privacy note
 */
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content wow fadeInUp animate-on-scroll" data-animate>
          {/* Icon */}
          <div className="newsletter-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 14L24 26L40 14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="6"
                y="10"
                width="36"
                height="28"
                rx="3"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M6 14L24 28L42 14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Section Header */}
          <p className="section-tagline">Stay Connected</p>
          <h2 className="section-title nature-style">
            Join Our <span>Farm Family</span>
          </h2>

          {/* Description */}
          <p className="newsletter-text">
            Subscribe to receive exclusive offers, seasonal updates, and farm-fresh recipes
            straight from our kitchen to yours. Be the first to know when new harvests arrive!
          </p>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <div className="newsletter-success" style={{
              background: 'rgba(16, 60, 41, 0.1)',
              padding: '20px 30px',
              borderRadius: '50px',
              color: '#103C29',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#103C29" strokeWidth="2" />
                <path d="M8 12L11 15L16 9" stroke="#103C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Welcome to our farm family! Check your inbox soon.
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="newsletter-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="30 60" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          {!isSubmitted && (
            <p className="newsletter-privacy">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }}>
                <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              We respect your privacy. Unsubscribe anytime.
            </p>
          )}
        </div>
      </div>

      {/* Inline keyframe for loading spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default NewsletterSection;
