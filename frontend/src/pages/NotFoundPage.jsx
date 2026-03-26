import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #F8F4EC 0%, #fff 100%)',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorations */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(112, 133, 122, 0.1)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'rgba(16, 60, 41, 0.08)',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '15%',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(255, 235, 138, 0.3)',
        animation: 'float 5s ease-in-out infinite'
      }} />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Illustration */}
            <div className="wow fadeInUp animate-on-scroll" data-animate style={{ marginBottom: '40px' }}>
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none" style={{ maxWidth: '100%' }}>
                {/* Ground/Grass */}
                <ellipse cx="150" cy="180" rx="120" ry="15" fill="#70857A" opacity="0.2"/>

                {/* Lost Farmer */}
                <g transform="translate(100, 60)">
                  {/* Body */}
                  <rect x="35" y="50" width="30" height="50" rx="5" fill="#8B5A2B"/>
                  {/* Head */}
                  <circle cx="50" cy="35" r="20" fill="#FFDAB9"/>
                  {/* Hat */}
                  <ellipse cx="50" cy="20" rx="25" ry="8" fill="#DAA520"/>
                  <rect x="35" y="12" width="30" height="8" fill="#DAA520"/>
                  {/* Eyes */}
                  <circle cx="43" cy="33" r="2" fill="#333"/>
                  <circle cx="57" cy="33" r="2" fill="#333"/>
                  {/* Confused eyebrows */}
                  <path d="M40 28 L46 30" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M54 30 L60 28" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                  {/* Mouth */}
                  <path d="M45 42 Q50 38 55 42" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  {/* Arms */}
                  <path d="M35 55 L15 75" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M65 55 L85 45" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round"/>
                  {/* Legs */}
                  <rect x="38" y="100" width="10" height="25" fill="#4A3728"/>
                  <rect x="52" y="100" width="10" height="25" fill="#4A3728"/>
                  {/* Map in hand */}
                  <rect x="80" y="35" width="25" height="20" fill="#F5F5DC" stroke="#DAA520" strokeWidth="1"/>
                  <path d="M83 42 L102 42 M83 48 L98 48" stroke="#70857A" strokeWidth="1"/>
                  {/* Question mark */}
                  <text x="70" y="10" fontSize="30" fill="#DC4646">?</text>
                </g>

                {/* Signpost */}
                <g transform="translate(200, 80)">
                  <rect x="15" y="0" width="8" height="100" fill="#8B4513"/>
                  {/* Signs */}
                  <g transform="rotate(-10, 19, 20)">
                    <rect x="-20" y="10" width="60" height="20" rx="2" fill="#103C29"/>
                    <text x="10" y="24" fontSize="10" fill="#fff" textAnchor="middle">HOME</text>
                  </g>
                  <g transform="rotate(15, 19, 50)">
                    <rect x="-10" y="40" width="50" height="20" rx="2" fill="#70857A"/>
                    <text x="15" y="54" fontSize="10" fill="#fff" textAnchor="middle">SHOP</text>
                  </g>
                </g>

                {/* Small plants */}
                <g transform="translate(50, 160)">
                  <path d="M0 20 Q5 10 10 20" stroke="#70857A" strokeWidth="2" fill="none"/>
                  <path d="M5 20 Q8 5 15 20" stroke="#70857A" strokeWidth="2" fill="none"/>
                </g>
                <g transform="translate(240, 165)">
                  <path d="M0 15 Q3 8 8 15" stroke="#70857A" strokeWidth="2" fill="none"/>
                </g>
              </svg>
            </div>

            {/* 404 Text */}
            <div className="wow fadeInUp animate-on-scroll" data-animate style={{ marginBottom: '24px' }}>
              <h1 style={{
                fontSize: 'clamp(80px, 15vw, 150px)',
                fontWeight: '700',
                color: '#103C29',
                lineHeight: 1,
                marginBottom: '0',
                fontFamily: '"Playfair Display", serif'
              }}>
                404
              </h1>
            </div>

            {/* Message */}
            <div className="wow fadeInUp animate-on-scroll" data-animate>
              <h2 style={{
                fontSize: 'clamp(24px, 4vw, 32px)',
                color: '#103C29',
                marginBottom: '16px'
              }}>
                Oops! Looks Like You're Lost
              </h2>
              <p style={{
                color: '#666',
                fontSize: '16px',
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.7
              }}>
                The page you're looking for seems to have wandered off the farm.
                Don't worry, let's get you back on track!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="wow fadeInUp animate-on-scroll" data-animate style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center'
            }}>
              <Link to="/" className="tf-btn animate-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                  <path d="M3 9L12 2L21 9V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>
              <Link to="/shop" className="tf-btn btn-stroke">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                  <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 10C16 12.2 14.2 14 12 14C9.8 14 8 12.2 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Browse Products
              </Link>
            </div>

            {/* Help Links */}
            <div className="wow fadeInUp animate-on-scroll" data-animate style={{ marginTop: '48px' }}>
              <p style={{ color: '#999', fontSize: '14px', marginBottom: '12px' }}>
                Looking for something specific?
              </p>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{ color: '#70857A', textDecoration: 'none', fontSize: '14px' }}>
                  Contact Us
                </Link>
                <Link to="/faq" style={{ color: '#70857A', textDecoration: 'none', fontSize: '14px' }}>
                  FAQs
                </Link>
                <Link to="/track-order" style={{ color: '#70857A', textDecoration: 'none', fontSize: '14px' }}>
                  Track Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

export default NotFoundPage;
