import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="nature-footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid stagger-children animate-on-scroll" data-animate>
            {/* Column 1: Brand & Contact */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-logo">
                <img
                  src="/assets/images/logo/logodark.png"
                  alt="Srushti Natural's"
                  width="180"
                  height="38"
                />
              </Link>
              <p className="brand-tagline">
                Bringing nature's purest goodness from our farm to your home since 2009.
              </p>
              <div className="contact-info">
                <a href="tel:+919998250088" className="contact-item">
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </span>
                  <span>+91 9998250088</span>
                </a>
                <a href="mailto:hi@srushtinaturals.com" className="contact-item">
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <span>hi@srushtinaturals.com</span>
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://wa.me/919998250088" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/shop">Shop All</Link></li>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/shop/ghee">Gir Cow Ghee</Link></li>
                <li><Link to="/shop/pulses">Organic Pulses</Link></li>
                <li><Link to="/shop/oils">Cold-Pressed Oils</Link></li>
              </ul>
            </div>

            {/* Column 3: Customer Care */}
            <div className="footer-col">
              <h4 className="footer-heading">Customer Care</h4>
              <ul className="footer-links">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/shipping">Shipping Info</Link></li>
                <li><Link to="/returns">Returns & Refunds</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/track-order">Track Order</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="footer-col newsletter-col">
              <h4 className="footer-heading">Join Our Farm Family</h4>
              <p className="newsletter-desc">
                Get exclusive offers, farm updates & traditional recipes delivered to your inbox.
              </p>
              {subscribed ? (
                <div className="subscribe-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Welcome to the family!</span>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Subscribe">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </form>
              )}
              <div className="trust-badges">
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  100% Organic
                </span>
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Farm Fresh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Illustrated Farm Landscape */}
      <div className="farm-illustration">
        {/* Sky gradient with sun and rays */}
        <div className="sky">
          {/* Sun with animated rays */}
          <div className="sun-container">
            <div className="sun-rays"></div>
            <div className="sun"></div>
          </div>
          {/* Animated clouds */}
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>

        {/* Animated butterflies */}
        <div className="butterfly butterfly-1">
          <svg viewBox="0 0 24 24" fill="#FF9800">
            <path d="M12 2C9 2 6 5 6 8c0 2 1 3 2 4-2 1-4 3-4 5 0 3 3 5 6 5 1 0 2-1 2-2 0 1 1 2 2 2 3 0 6-2 6-5 0-2-2-4-4-5 1-1 2-2 2-4 0-3-3-6-6-6z"/>
          </svg>
        </div>
        <div className="butterfly butterfly-2">
          <svg viewBox="0 0 24 24" fill="#E91E63">
            <path d="M12 2C9 2 6 5 6 8c0 2 1 3 2 4-2 1-4 3-4 5 0 3 3 5 6 5 1 0 2-1 2-2 0 1 1 2 2 2 3 0 6-2 6-5 0-2-2-4-4-5 1-1 2-2 2-4 0-3-3-6-6-6z"/>
          </svg>
        </div>

        {/* SVG Farm Scene - Enhanced */}
        <svg
          className="farm-scene"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for pond */}
            <linearGradient id="pondGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#5BA3C6" stopOpacity="0.8"/>
            </linearGradient>
            {/* Gradient for sky reflection */}
            <linearGradient id="skyReflect" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE4B5" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>

          {/* Far Background Hills - Misty */}
          <path
            d="M0,140 C150,100 300,130 500,110 C700,90 900,130 1100,100 C1250,80 1350,110 1440,130 L1440,400 L0,400 Z"
            fill="#A8C5A8"
            opacity="0.6"
          />

          {/* Background Hills */}
          <path
            d="M0,180 C200,140 400,190 600,160 C800,130 1000,180 1200,150 C1320,130 1400,160 1440,180 L1440,400 L0,400 Z"
            fill="#8CAE8C"
          />

          {/* Middle Hills */}
          <path
            d="M0,220 C150,190 300,230 500,200 C700,170 900,220 1100,190 C1250,170 1350,200 1440,220 L1440,400 L0,400 Z"
            fill="#70857A"
          />

          {/* Foreground Hills */}
          <path
            d="M0,270 C100,250 250,285 450,255 C650,225 850,275 1050,245 C1200,225 1350,255 1440,275 L1440,400 L0,400 Z"
            fill="#5B7A5B"
          />

          {/* Ground with grass texture */}
          <path
            d="M0,310 C200,295 400,320 700,305 C1000,290 1200,315 1440,300 L1440,400 L0,400 Z"
            fill="#4A6741"
          />

          {/* Fence line on hill */}
          <g stroke="#8B5A2B" strokeWidth="2" fill="none">
            <line x1="600" y1="245" x2="800" y2="235"/>
            {[...Array(6)].map((_, i) => (
              <line key={i} x1={620 + i * 35} y1={244 - i * 1.5} x2={620 + i * 35} y2={254 - i * 1.5}/>
            ))}
          </g>

          {/* Pond */}
          <ellipse cx="250" cy="340" rx="70" ry="25" fill="url(#pondGradient)"/>
          <ellipse cx="250" cy="335" rx="50" ry="15" fill="url(#skyReflect)"/>
          {/* Pond reeds */}
          <g stroke="#5B7A5B" strokeWidth="2">
            <line x1="195" y1="340" x2="190" y2="310"/>
            <line x1="200" y1="340" x2="198" y2="315"/>
            <line x1="300" y1="338" x2="305" y2="308"/>
            <line x1="308" y1="340" x2="310" y2="315"/>
          </g>

          {/* Tree 1 - Left side (fuller) */}
          <g transform="translate(50, 160)">
            <rect x="18" y="80" width="14" height="55" fill="#6B4423"/>
            {/* Tree shadow */}
            <ellipse cx="25" cy="138" rx="20" ry="5" fill="rgba(0,0,0,0.1)"/>
            {/* Foliage layers */}
            <ellipse cx="25" cy="50" rx="40" ry="50" fill="#2D4A2D"/>
            <ellipse cx="15" cy="60" rx="30" ry="38" fill="#3D5A3D"/>
            <ellipse cx="35" cy="55" rx="32" ry="42" fill="#4A6741"/>
            <ellipse cx="25" cy="40" rx="25" ry="30" fill="#527A52"/>
            {/* Highlights */}
            <ellipse cx="18" cy="35" rx="12" ry="15" fill="#5B8A5B" opacity="0.7"/>
          </g>

          {/* Tree 2 - Different style */}
          <g transform="translate(160, 190)">
            <rect x="10" y="55" width="10" height="45" fill="#5D4E37"/>
            <ellipse cx="15" cy="35" rx="28" ry="38" fill="#4A6741"/>
            <ellipse cx="22" cy="40" rx="22" ry="30" fill="#527A52"/>
            <ellipse cx="12" cy="30" rx="15" ry="20" fill="#5B8A5B" opacity="0.8"/>
          </g>

          {/* Windmill */}
          <g transform="translate(950, 140)" className="windmill">
            {/* Tower */}
            <polygon points="20,120 30,0 40,0 50,120" fill="#E8D4B8"/>
            <polygon points="22,120 32,10 38,10 48,120" fill="#D4C4A8"/>
            {/* Platform */}
            <rect x="15" y="115" width="40" height="8" fill="#8B5A2B"/>
            {/* Blades container - animated */}
            <g className="windmill-blades" style={{ transformOrigin: '35px 15px' }}>
              <rect x="33" y="-35" width="4" height="50" rx="2" fill="#C9A86C"/>
              <rect x="33" y="15" width="4" height="50" rx="2" fill="#C9A86C"/>
              <rect x="-15" y="13" width="50" height="4" rx="2" fill="#C9A86C"/>
              <rect x="35" y="13" width="50" height="4" rx="2" fill="#C9A86C"/>
            </g>
            {/* Center hub */}
            <circle cx="35" cy="15" r="6" fill="#8B5A2B"/>
          </g>

          {/* Farmhouse - Enhanced */}
          <g transform="translate(380, 175)">
            {/* House shadow */}
            <ellipse cx="35" cy="95" rx="40" ry="8" fill="rgba(0,0,0,0.1)"/>
            {/* House body */}
            <rect x="0" y="45" width="70" height="55" fill="#F5E6D3"/>
            <rect x="2" y="47" width="66" height="51" fill="#E8D4B8"/>
            {/* Roof */}
            <polygon points="35,-5 -10,45 80,45" fill="#B8704D"/>
            <polygon points="35,0 -5,42 75,42" fill="#C17F59"/>
            {/* Chimney with smoke */}
            <rect x="52" y="5" width="12" height="30" fill="#A66B4A"/>
            <g className="chimney-smoke">
              <circle cx="58" cy="-5" r="4" fill="#DDD" opacity="0.6"/>
              <circle cx="60" cy="-15" r="3" fill="#DDD" opacity="0.4"/>
              <circle cx="57" cy="-23" r="2" fill="#DDD" opacity="0.2"/>
            </g>
            {/* Door */}
            <rect x="26" y="62" width="18" height="38" fill="#6B4423"/>
            <rect x="28" y="64" width="14" height="34" fill="#5D3A1A"/>
            <circle cx="38" cy="82" r="2" fill="#DAA520"/>
            {/* Windows */}
            <rect x="8" y="55" width="14" height="16" fill="#87CEEB" opacity="0.8"/>
            <rect x="48" y="55" width="14" height="16" fill="#87CEEB" opacity="0.8"/>
            <line x1="15" y1="55" x2="15" y2="71" stroke="#5D3A1A" strokeWidth="1.5"/>
            <line x1="8" y1="63" x2="22" y2="63" stroke="#5D3A1A" strokeWidth="1.5"/>
            <line x1="55" y1="55" x2="55" y2="71" stroke="#5D3A1A" strokeWidth="1.5"/>
            <line x1="48" y1="63" x2="62" y2="63" stroke="#5D3A1A" strokeWidth="1.5"/>
            {/* Hay bales near house */}
            <ellipse cx="85" cy="90" rx="12" ry="10" fill="#DAB86F"/>
            <ellipse cx="100" cy="92" rx="10" ry="8" fill="#C9A65C"/>
          </g>

          {/* Cow 1 - Main */}
          <g transform="translate(520, 240)">
            {/* Shadow */}
            <ellipse cx="25" cy="70" rx="25" ry="6" fill="rgba(0,0,0,0.1)"/>
            {/* Body */}
            <ellipse cx="25" cy="40" rx="30" ry="22" fill="#F5F5DC"/>
            {/* Head */}
            <ellipse cx="58" cy="32" rx="14" ry="12" fill="#F5F5DC"/>
            {/* Snout */}
            <ellipse cx="68" cy="36" rx="6" ry="5" fill="#FFD4B8"/>
            {/* Legs */}
            <rect x="5" y="55" width="6" height="22" fill="#F5F5DC"/>
            <rect x="18" y="55" width="6" height="24" fill="#F5F5DC"/>
            <rect x="32" y="55" width="6" height="24" fill="#F5F5DC"/>
            <rect x="45" y="55" width="6" height="22" fill="#F5F5DC"/>
            {/* Spots */}
            <ellipse cx="12" cy="35" rx="10" ry="8" fill="#5D3A1A"/>
            <ellipse cx="35" cy="45" rx="8" ry="6" fill="#5D3A1A"/>
            <ellipse cx="28" cy="30" rx="6" ry="5" fill="#5D3A1A"/>
            {/* Ears */}
            <ellipse cx="50" cy="22" rx="6" ry="4" fill="#FFD4B8" transform="rotate(-20 50 22)"/>
            <ellipse cx="66" cy="24" rx="6" ry="4" fill="#FFD4B8" transform="rotate(20 66 24)"/>
            {/* Eye */}
            <circle cx="60" cy="30" r="2" fill="#333"/>
            {/* Horns */}
            <path d="M52,20 Q48,12 52,8" stroke="#DAA520" strokeWidth="3" fill="none"/>
            <path d="M64,20 Q68,12 64,8" stroke="#DAA520" strokeWidth="3" fill="none"/>
            {/* Tail */}
            <path d="M-5,40 Q-15,50 -10,65" stroke="#F5F5DC" strokeWidth="4" fill="none"/>
            <ellipse cx="-10" cy="67" rx="3" ry="5" fill="#5D3A1A"/>
            {/* Udder */}
            <ellipse cx="30" cy="62" rx="8" ry="5" fill="#FFD4B8"/>
          </g>

          {/* Cow 2 - Background, grazing */}
          <g transform="translate(680, 210) scale(0.7)">
            <ellipse cx="25" cy="40" rx="28" ry="20" fill="#E8DCC8"/>
            <ellipse cx="55" cy="45" rx="12" ry="10" fill="#E8DCC8"/>
            <rect x="8" y="55" width="5" height="20" fill="#E8DCC8"/>
            <rect x="18" y="55" width="5" height="22" fill="#E8DCC8"/>
            <rect x="30" y="55" width="5" height="22" fill="#E8DCC8"/>
            <rect x="42" y="55" width="5" height="20" fill="#E8DCC8"/>
            <ellipse cx="18" cy="38" rx="8" ry="6" fill="#8B5A2B"/>
            <ellipse cx="38" cy="42" rx="6" ry="5" fill="#8B5A2B"/>
          </g>

          {/* Chickens */}
          <g transform="translate(470, 295)">
            {/* Chicken 1 */}
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#F5F5DC"/>
            <circle cx="6" cy="-4" r="4" fill="#F5F5DC"/>
            <polygon points="10,-4 14,-3 10,-2" fill="#FF6B35"/>
            <polygon points="3,-8 5,-4 1,-4" fill="#DC143C"/>
            <line x1="-2" y1="6" x2="-3" y2="12" stroke="#FF6B35" strokeWidth="1.5"/>
            <line x1="2" y1="6" x2="3" y2="12" stroke="#FF6B35" strokeWidth="1.5"/>
            {/* Chicken 2 */}
            <g transform="translate(20, 5)">
              <ellipse cx="0" cy="0" rx="7" ry="5" fill="#D4A574"/>
              <circle cx="5" cy="-3" r="3.5" fill="#D4A574"/>
              <polygon points="8,-3 11,-2 8,-1" fill="#FF6B35"/>
              <polygon points="2,-6 4,-3 0,-3" fill="#DC143C"/>
            </g>
          </g>

          {/* Dog */}
          <g transform="translate(445, 280)">
            <ellipse cx="12" cy="15" rx="12" ry="8" fill="#D4A574"/>
            <ellipse cx="0" cy="10" rx="7" ry="6" fill="#D4A574"/>
            <polygon points="-6,4 -4,10 -8,10" fill="#C49464"/>
            <polygon points="4,4 6,10 2,10" fill="#C49464"/>
            <circle cx="-2" cy="8" r="1.5" fill="#333"/>
            <ellipse cx="0" cy="12" rx="2" ry="1.5" fill="#333"/>
            <rect x="5" y="20" width="3" height="10" fill="#D4A574"/>
            <rect x="15" y="20" width="3" height="10" fill="#D4A574"/>
            <path d="M24,12 Q32,8 28,18" stroke="#D4A574" strokeWidth="3" fill="none"/>
          </g>

          {/* Wheat/Crop Field - Enhanced */}
          <g transform="translate(780, 220)">
            {[...Array(18)].map((_, i) => (
              <g key={i} transform={`translate(${i * 15}, ${Math.sin(i) * 3})`} className="wheat-stalk">
                <line x1="5" y1="80" x2="5" y2="25" stroke="#C9A65C" strokeWidth="2"/>
                <ellipse cx="5" cy="20" rx="4" ry="12" fill="#DAB86F"/>
                <ellipse cx="5" cy="18" rx="3" ry="8" fill="#E8C872"/>
              </g>
            ))}
          </g>

          {/* Farmer */}
          <g transform="translate(620, 230)">
            {/* Shadow */}
            <ellipse cx="12" cy="72" rx="12" ry="4" fill="rgba(0,0,0,0.1)"/>
            {/* Body */}
            <rect x="4" y="25" width="16" height="28" fill="#E07B39"/>
            {/* Pants */}
            <rect x="4" y="53" width="7" height="18" fill="#4A5568"/>
            <rect x="13" y="53" width="7" height="18" fill="#4A5568"/>
            {/* Head */}
            <circle cx="12" cy="15" r="11" fill="#D4A574"/>
            {/* Face */}
            <circle cx="9" cy="13" r="1.5" fill="#333"/>
            <circle cx="15" cy="13" r="1.5" fill="#333"/>
            <path d="M10,18 Q12,20 14,18" stroke="#333" strokeWidth="1" fill="none"/>
            {/* Hat */}
            <ellipse cx="12" cy="6" rx="14" ry="5" fill="#8B5A2B"/>
            <rect x="2" y="2" width="20" height="6" fill="#8B5A2B"/>
            {/* Arms */}
            <line x1="4" y1="30" x2="-8" y2="45" stroke="#D4A574" strokeWidth="5"/>
            <line x1="20" y1="30" x2="35" y2="40" stroke="#D4A574" strokeWidth="5"/>
            {/* Basket */}
            <ellipse cx="38" cy="43" rx="12" ry="10" fill="#C9A86C"/>
            <ellipse cx="38" cy="38" rx="10" ry="6" fill="#B8976B"/>
            {/* Vegetables in basket */}
            <circle cx="35" cy="36" r="4" fill="#228B22"/>
            <circle cx="41" cy="35" r="3" fill="#FF6347"/>
            <circle cx="38" cy="33" r="3" fill="#FFD700"/>
          </g>

          {/* Tree 3 - Right side (fruit tree) */}
          <g transform="translate(1100, 170)">
            <rect x="18" y="75" width="14" height="50" fill="#6B4423"/>
            <ellipse cx="25" cy="125" rx="18" ry="5" fill="rgba(0,0,0,0.1)"/>
            <ellipse cx="25" cy="45" rx="38" ry="48" fill="#3D5A3D"/>
            <ellipse cx="35" cy="50" rx="30" ry="40" fill="#4A6741"/>
            <ellipse cx="20" cy="40" rx="25" ry="32" fill="#527A52"/>
            {/* Fruits */}
            <circle cx="10" cy="55" r="5" fill="#FF6347"/>
            <circle cx="40" cy="45" r="5" fill="#FF6347"/>
            <circle cx="25" cy="65" r="4" fill="#FF6347"/>
            <circle cx="35" cy="70" r="4" fill="#FF6347"/>
          </g>

          {/* Small bush with flowers */}
          <g transform="translate(1250, 260)">
            <ellipse cx="20" cy="30" rx="28" ry="22" fill="#4A6741"/>
            <ellipse cx="35" cy="35" rx="22" ry="18" fill="#527A52"/>
            {/* Flowers */}
            <circle cx="15" cy="22" r="4" fill="#FF69B4"/>
            <circle cx="30" cy="25" r="3" fill="#FFD700"/>
            <circle cx="42" cy="30" r="4" fill="#FF69B4"/>
            <circle cx="25" cy="35" r="3" fill="#FFA500"/>
          </g>

          {/* Birds - animated feel */}
          <g fill="none" stroke="#4A6741" strokeWidth="2" strokeLinecap="round">
            <path d="M280,100 Q285,94 290,100 Q295,94 300,100" className="bird bird-1"/>
            <path d="M320,75 Q325,69 330,75 Q335,69 340,75" className="bird bird-2"/>
            <path d="M1150,90 Q1155,84 1160,90 Q1165,84 1170,90" className="bird bird-3"/>
            <path d="M1200,110 Q1205,104 1210,110 Q1215,104 1220,110" className="bird bird-4"/>
            <path d="M180,85 Q185,79 190,85 Q195,79 200,85" className="bird bird-5"/>
          </g>

          {/* Foreground flowers/grass details */}
          <g>
            {/* Grass tufts */}
            <path d="M50,380 Q55,360 50,370 Q60,350 55,370 Q65,355 60,375" stroke="#3D5A3D" strokeWidth="2" fill="none"/>
            <path d="M1380,375 Q1385,355 1380,365 Q1390,345 1385,365" stroke="#3D5A3D" strokeWidth="2" fill="none"/>
            {/* Small flowers */}
            <circle cx="80" cy="365" r="3" fill="#FFD700"/>
            <circle cx="120" cy="375" r="2.5" fill="#FF69B4"/>
            <circle cx="1320" cy="370" r="3" fill="#FF69B4"/>
            <circle cx="1360" cy="362" r="2.5" fill="#FFD700"/>
          </g>

          {/* Tractor in distance */}
          <g transform="translate(1020, 195) scale(0.5)">
            <rect x="0" y="20" width="50" height="30" fill="#DC143C"/>
            <rect x="45" y="10" width="25" height="25" fill="#DC143C"/>
            <rect x="50" y="12" width="15" height="12" fill="#87CEEB" opacity="0.7"/>
            <circle cx="15" cy="55" r="18" fill="#333"/>
            <circle cx="15" cy="55" r="12" fill="#555"/>
            <circle cx="55" cy="45" r="12" fill="#333"/>
            <circle cx="55" cy="45" r="8" fill="#555"/>
            <rect x="70" y="30" width="5" height="15" fill="#333"/>
          </g>
        </svg>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="bottom-content">
            <p className="copyright">
              &copy; 2026 Srushti Natural&apos;s. Crafted with love from our farm.
            </p>
            <div className="bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
            <div className="payment-icons">
              <img src="/assets/images/payment/visa.svg" alt="Visa" width="38" height="24" />
              <img src="/assets/images/payment/master-card.svg" alt="Mastercard" width="38" height="24" />
              <img src="/assets/images/payment/paypal.svg" alt="PayPal" width="38" height="24" />
              <img src="/assets/images/payment/amex.svg" alt="Amex" width="38" height="24" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Styles */}
      <style>{`
        .nature-footer {
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8F4EC 100%);
          overflow: hidden;
        }

        /* Main Content Area */
        .footer-content {
          padding: 60px 0 40px;
          position: relative;
          z-index: 2;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        /* Brand Column */
        .brand-col .footer-logo {
          display: inline-block;
          margin-bottom: 15px;
        }

        .brand-col .footer-logo img {
          height: auto;
          max-width: 180px;
        }

        .brand-tagline {
          color: #70857A;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #103C29;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #70857A;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #70857A;
        }

        .contact-icon svg {
          width: 100%;
          height: 100%;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-links a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #F0EDE8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #103C29;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #103C29;
          color: white;
          transform: translateY(-3px);
        }

        .social-links svg {
          width: 18px;
          height: 18px;
        }

        /* Footer Headings */
        .footer-heading {
          font-family: "Playfair Display", serif;
          font-size: 18px;
          font-weight: 600;
          color: #103C29;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #70857A;
        }

        /* Footer Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #5A6B5F;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .footer-links a:hover {
          color: #103C29;
          padding-left: 5px;
        }

        .footer-links a::before {
          content: "";
          width: 0;
          height: 1px;
          background: #103C29;
          transition: width 0.3s ease;
        }

        .footer-links a:hover::before {
          width: 10px;
        }

        /* Newsletter */
        .newsletter-col .newsletter-desc {
          font-size: 14px;
          color: #70857A;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          gap: 0;
          margin-bottom: 15px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #E0DDD5;
          border-right: none;
          border-radius: 25px 0 0 25px;
          font-size: 14px;
          background: white;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .newsletter-form input:focus {
          border-color: #70857A;
        }

        .newsletter-form button {
          padding: 12px 20px;
          background: #103C29;
          border: 2px solid #103C29;
          border-radius: 0 25px 25px 0;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-form button:hover {
          background: #70857A;
          border-color: #70857A;
        }

        .newsletter-form button svg {
          width: 20px;
          height: 20px;
          color: white;
        }

        .subscribe-success {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(16, 60, 41, 0.1);
          border-radius: 25px;
          color: #103C29;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .subscribe-success svg {
          width: 20px;
          height: 20px;
          color: #103C29;
        }

        /* Trust Badges */
        .trust-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .trust-badges .badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: rgba(112, 133, 122, 0.1);
          border-radius: 20px;
          font-size: 12px;
          color: #103C29;
          font-weight: 500;
        }

        .trust-badges .badge svg {
          width: 14px;
          height: 14px;
          color: #70857A;
        }

        /* Farm Illustration - Enhanced */
        .farm-illustration {
          position: relative;
          height: 320px;
          margin-top: -30px;
          overflow: hidden;
        }

        .sky {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: linear-gradient(180deg,
            #FEF3E2 0%,
            #FDEBD0 30%,
            #FCE4C4 50%,
            #FDDCB5 70%,
            #FDD5A8 100%
          );
        }

        /* Sun with rays */
        .sun-container {
          position: absolute;
          top: 15px;
          right: 12%;
          width: 80px;
          height: 80px;
        }

        .sun {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, #FFD93D 0%, #FF9500 70%, #FF6B00 100%);
          border-radius: 50%;
          box-shadow:
            0 0 30px rgba(255, 180, 0, 0.6),
            0 0 60px rgba(255, 150, 0, 0.4),
            0 0 90px rgba(255, 120, 0, 0.2);
          animation: sunPulse 4s ease-in-out infinite;
        }

        .sun-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          background:
            linear-gradient(0deg, transparent 45%, rgba(255,200,0,0.3) 50%, transparent 55%),
            linear-gradient(60deg, transparent 45%, rgba(255,200,0,0.2) 50%, transparent 55%),
            linear-gradient(120deg, transparent 45%, rgba(255,200,0,0.2) 50%, transparent 55%);
          animation: sunRaysRotate 20s linear infinite;
        }

        @keyframes sunPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.08); }
        }

        @keyframes sunRaysRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Clouds */
        .cloud {
          position: absolute;
          background: white;
          border-radius: 50px;
          opacity: 0.9;
          animation: cloudFloat 25s linear infinite;
        }

        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: white;
          border-radius: 50%;
        }

        .cloud-1 {
          top: 35px;
          left: 8%;
          width: 90px;
          height: 30px;
          animation-duration: 30s;
        }

        .cloud-1::before {
          width: 45px;
          height: 45px;
          top: -22px;
          left: 12px;
        }

        .cloud-1::after {
          width: 35px;
          height: 35px;
          top: -18px;
          right: 15px;
        }

        .cloud-2 {
          top: 55px;
          left: 55%;
          width: 70px;
          height: 24px;
          animation-duration: 35s;
          animation-delay: -10s;
        }

        .cloud-2::before {
          width: 35px;
          height: 35px;
          top: -18px;
          left: 10px;
        }

        .cloud-2::after {
          width: 28px;
          height: 28px;
          top: -14px;
          right: 12px;
        }

        .cloud-3 {
          top: 25px;
          left: 30%;
          width: 50px;
          height: 18px;
          opacity: 0.7;
          animation-duration: 40s;
          animation-delay: -20s;
        }

        .cloud-3::before {
          width: 25px;
          height: 25px;
          top: -12px;
          left: 8px;
        }

        .cloud-3::after {
          width: 20px;
          height: 20px;
          top: -10px;
          right: 8px;
        }

        @keyframes cloudFloat {
          from { transform: translateX(-100px); }
          to { transform: translateX(calc(100vw + 100px)); }
        }

        /* Butterflies */
        .butterfly {
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 10;
          animation: butterflyFly 15s ease-in-out infinite;
        }

        .butterfly svg {
          width: 100%;
          height: 100%;
          animation: butterflyWings 0.3s ease-in-out infinite;
        }

        .butterfly-1 {
          top: 120px;
          left: 20%;
          animation-delay: 0s;
        }

        .butterfly-2 {
          top: 100px;
          left: 70%;
          animation-delay: -7s;
          animation-duration: 18s;
        }

        @keyframes butterflyFly {
          0%, 100% { transform: translate(0, 0) rotate(5deg); }
          25% { transform: translate(50px, -30px) rotate(-5deg); }
          50% { transform: translate(100px, 10px) rotate(5deg); }
          75% { transform: translate(50px, -20px) rotate(-5deg); }
        }

        @keyframes butterflyWings {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.7); }
        }

        /* Windmill animation */
        .windmill-blades {
          animation: windmillSpin 8s linear infinite;
          transform-origin: 35px 15px;
        }

        @keyframes windmillSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Chimney smoke animation */
        .chimney-smoke circle {
          animation: smokeRise 3s ease-out infinite;
        }

        .chimney-smoke circle:nth-child(2) {
          animation-delay: 1s;
        }

        .chimney-smoke circle:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes smokeRise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-20px) scale(1.5); opacity: 0; }
        }

        /* Birds animation */
        .bird {
          animation: birdFly 3s ease-in-out infinite;
        }

        .bird-2 { animation-delay: 0.5s; }
        .bird-3 { animation-delay: 1s; }
        .bird-4 { animation-delay: 1.5s; }
        .bird-5 { animation-delay: 0.8s; }

        @keyframes birdFly {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Wheat sway animation */
        .wheat-stalk {
          animation: wheatSway 3s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .wheat-stalk:nth-child(even) {
          animation-delay: 0.5s;
        }

        .wheat-stalk:nth-child(3n) {
          animation-delay: 1s;
        }

        @keyframes wheatSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }

        .farm-scene {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: auto;
          min-height: 250px;
        }

        /* Footer Bottom Bar */
        .footer-bottom-bar {
          background: #103C29;
          padding: 20px 0;
          position: relative;
          z-index: 2;
        }

        .bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
          margin: 0;
        }

        .bottom-links {
          display: flex;
          gap: 20px;
        }

        .bottom-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .bottom-links a:hover {
          color: white;
        }

        .payment-icons {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .payment-icons img {
          height: 24px;
          width: auto;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .payment-icons img:hover {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .brand-col {
            grid-column: span 2;
          }

          .farm-illustration {
            height: 280px;
          }
        }

        @media (max-width: 767px) {
          .footer-content {
            padding: 40px 0 30px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .brand-col {
            grid-column: span 1;
            text-align: center;
          }

          .brand-col .footer-logo {
            margin-bottom: 15px;
          }

          .contact-info {
            align-items: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-col {
            text-align: center;
          }

          .footer-heading::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-links {
            align-items: center;
          }

          .newsletter-col {
            text-align: center;
          }

          .trust-badges {
            justify-content: center;
          }

          .farm-illustration {
            height: 220px;
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .bottom-links {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .farm-illustration {
            height: 180px;
          }

          .sun-container {
            width: 60px;
            height: 60px;
          }

          .sun {
            width: 35px;
            height: 35px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .sun,
          .sun-rays,
          .cloud,
          .butterfly,
          .butterfly svg,
          .windmill-blades,
          .chimney-smoke circle,
          .bird,
          .wheat-stalk {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
