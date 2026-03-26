/**
 * NatureDecorations - Decorative SVG elements for sections
 *
 * Provides birds, leaves, trees, flowers, and organic shapes
 * to create an immersive nature feel across the site.
 */

// Colorful Bird (geometric/low-poly style)
export const Bird = ({
  style = {},
  className = '',
  color = 'default',
  flip = false,
  animate = true
}) => {
  const colors = {
    default: { body: '#C62828', wing: '#FFD54F', tail: '#8D6E63', beak: '#333' },
    green: { body: '#2E7D32', wing: '#81C784', tail: '#1B5E20', beak: '#333' },
    orange: { body: '#EF6C00', wing: '#FFB74D', tail: '#E65100', beak: '#333' },
    blue: { body: '#1565C0', wing: '#64B5F6', tail: '#0D47A1', beak: '#333' },
    brown: { body: '#6D4C41', wing: '#A1887F', tail: '#4E342E', beak: '#333' }
  };

  const c = colors[color] || colors.default;

  return (
    <svg
      viewBox="0 0 60 50"
      className={`nature-bird ${animate ? 'animate' : ''} ${className}`}
      style={{
        width: '60px',
        height: '50px',
        transform: flip ? 'scaleX(-1)' : 'none',
        ...style
      }}
    >
      {/* Body */}
      <polygon points="25,35 35,20 45,35" fill={c.body}/>
      {/* Wing */}
      <polygon points="20,30 35,15 40,30" fill={c.wing}/>
      <polygon points="22,32 33,20 38,32" fill={c.wing} opacity="0.8"/>
      {/* Tail */}
      <polygon points="42,32 55,25 55,40 45,35" fill={c.tail}/>
      {/* Head */}
      <circle cx="28" cy="18" r="8" fill={c.body}/>
      {/* Beak */}
      <polygon points="20,18 28,16 28,20" fill={c.beak}/>
      {/* Eye */}
      <circle cx="26" cy="16" r="2" fill="white"/>
      <circle cx="25" cy="16" r="1" fill="#333"/>
    </svg>
  );
};

// Decorative Leaf
export const Leaf = ({
  style = {},
  className = '',
  variant = 'default',
  color = '#70857A'
}) => {
  const variants = {
    default: (
      <svg viewBox="0 0 40 50" className={`nature-leaf ${className}`} style={{ width: '40px', height: '50px', ...style }}>
        <path
          d="M20 5 C10 15, 5 25, 5 35 C5 42, 12 48, 20 48 C28 48, 35 42, 35 35 C35 25, 30 15, 20 5Z"
          fill={color}
          opacity="0.7"
        />
        <path d="M20 48 L20 15" stroke={color} strokeWidth="1.5" opacity="0.5"/>
        <path d="M20 25 L12 20" stroke={color} strokeWidth="1" opacity="0.4"/>
        <path d="M20 32 L28 27" stroke={color} strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    round: (
      <svg viewBox="0 0 40 40" className={`nature-leaf ${className}`} style={{ width: '40px', height: '40px', ...style }}>
        <ellipse cx="20" cy="20" rx="15" ry="18" fill={color} opacity="0.6" transform="rotate(-30 20 20)"/>
        <path d="M20 38 L20 10" stroke={color} strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    maple: (
      <svg viewBox="0 0 50 50" className={`nature-leaf ${className}`} style={{ width: '50px', height: '50px', ...style }}>
        <path
          d="M25 5 L20 15 L10 12 L15 22 L5 25 L15 28 L10 38 L20 35 L25 48 L30 35 L40 38 L35 28 L45 25 L35 22 L40 12 L30 15 Z"
          fill={color}
          opacity="0.6"
        />
      </svg>
    )
  };

  return variants[variant] || variants.default;
};

// Small Tree/Plant
export const Plant = ({
  style = {},
  className = '',
  variant = 'tree'
}) => {
  const variants = {
    tree: (
      <svg viewBox="0 0 60 80" className={`nature-plant ${className}`} style={{ width: '60px', height: '80px', ...style }}>
        {/* Trunk */}
        <rect x="26" y="50" width="8" height="28" fill="#8B5A2B"/>
        {/* Foliage */}
        <ellipse cx="30" cy="35" rx="25" ry="30" fill="#4A6741" opacity="0.8"/>
        <ellipse cx="25" cy="38" rx="18" ry="22" fill="#5B7A5B" opacity="0.7"/>
        <ellipse cx="35" cy="32" rx="15" ry="20" fill="#70857A" opacity="0.6"/>
      </svg>
    ),
    bush: (
      <svg viewBox="0 0 70 50" className={`nature-plant ${className}`} style={{ width: '70px', height: '50px', ...style }}>
        <ellipse cx="35" cy="35" rx="32" ry="22" fill="#4A6741" opacity="0.7"/>
        <ellipse cx="25" cy="32" rx="20" ry="18" fill="#5B7A5B" opacity="0.6"/>
        <ellipse cx="45" cy="30" rx="18" ry="16" fill="#70857A" opacity="0.5"/>
        {/* Small flowers */}
        <circle cx="20" cy="25" r="4" fill="#FF69B4" opacity="0.8"/>
        <circle cx="50" cy="28" r="3" fill="#FFD700" opacity="0.8"/>
      </svg>
    ),
    wheat: (
      <svg viewBox="0 0 20 60" className={`nature-plant wheat ${className}`} style={{ width: '20px', height: '60px', ...style }}>
        <line x1="10" y1="60" x2="10" y2="15" stroke="#C9A65C" strokeWidth="2"/>
        <ellipse cx="10" cy="12" rx="5" ry="12" fill="#DAB86F"/>
        <ellipse cx="10" cy="10" rx="4" ry="8" fill="#E8C872"/>
      </svg>
    )
  };

  return variants[variant] || variants.tree;
};

// Decorative Flower
export const Flower = ({
  style = {},
  className = '',
  color = '#FF69B4'
}) => (
  <svg viewBox="0 0 40 40" className={`nature-flower ${className}`} style={{ width: '40px', height: '40px', ...style }}>
    {/* Petals */}
    <ellipse cx="20" cy="10" rx="6" ry="10" fill={color} opacity="0.8"/>
    <ellipse cx="30" cy="20" rx="10" ry="6" fill={color} opacity="0.8"/>
    <ellipse cx="20" cy="30" rx="6" ry="10" fill={color} opacity="0.8"/>
    <ellipse cx="10" cy="20" rx="10" ry="6" fill={color} opacity="0.8"/>
    {/* Center */}
    <circle cx="20" cy="20" r="6" fill="#FFD700"/>
  </svg>
);

// Organic blob shape
export const OrganicBlob = ({
  style = {},
  className = '',
  color = '#F8F4EC',
  variant = 1
}) => {
  const blobs = {
    1: "M40,10 Q70,0 80,30 Q90,60 60,80 Q30,95 10,70 Q-5,40 20,20 Q35,5 40,10",
    2: "M50,5 Q85,15 90,50 Q95,85 60,95 Q25,100 10,65 Q0,30 30,10 Q45,0 50,5",
    3: "M45,10 Q75,5 85,40 Q95,75 55,90 Q15,100 5,60 Q-5,20 35,5 Q42,2 45,10"
  };

  return (
    <svg viewBox="0 0 100 100" className={`nature-blob ${className}`} style={{ width: '150px', height: '150px', ...style }}>
      <path d={blobs[variant] || blobs[1]} fill={color}/>
    </svg>
  );
};

// Floating seed/dandelion
export const Seed = ({ style = {}, className = '' }) => (
  <svg viewBox="0 0 30 40" className={`nature-seed ${className}`} style={{ width: '30px', height: '40px', ...style }}>
    <line x1="15" y1="40" x2="15" y2="20" stroke="#A0A0A0" strokeWidth="0.5"/>
    <circle cx="15" cy="15" r="3" fill="#F5F5F5"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <line
        key={i}
        x1="15"
        y1="15"
        x2={15 + Math.cos(angle * Math.PI / 180) * 12}
        y2={15 + Math.sin(angle * Math.PI / 180) * 12}
        stroke="#D0D0D0"
        strokeWidth="0.5"
      />
    ))}
  </svg>
);

// Sun rays decoration
export const SunDecor = ({ style = {}, className = '' }) => (
  <svg viewBox="0 0 80 80" className={`nature-sun ${className}`} style={{ width: '80px', height: '80px', ...style }}>
    <circle cx="40" cy="40" r="15" fill="#FFD93D" opacity="0.8"/>
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
      <line
        key={i}
        x1={40 + Math.cos(angle * Math.PI / 180) * 20}
        y1={40 + Math.sin(angle * Math.PI / 180) * 20}
        x2={40 + Math.cos(angle * Math.PI / 180) * 35}
        y2={40 + Math.sin(angle * Math.PI / 180) * 35}
        stroke="#FFD93D"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    ))}
  </svg>
);

// Cow silhouette
export const CowSilhouette = ({ style = {}, className = '', color = '#70857A' }) => (
  <svg viewBox="0 0 80 50" className={`nature-cow ${className}`} style={{ width: '80px', height: '50px', ...style }}>
    <ellipse cx="35" cy="28" rx="25" ry="15" fill={color} opacity="0.3"/>
    <ellipse cx="60" cy="22" rx="10" ry="8" fill={color} opacity="0.3"/>
    <rect x="15" y="38" width="5" height="12" fill={color} opacity="0.3"/>
    <rect x="28" y="38" width="5" height="12" fill={color} opacity="0.3"/>
    <rect x="42" y="38" width="5" height="12" fill={color} opacity="0.3"/>
    <rect x="55" y="38" width="5" height="12" fill={color} opacity="0.3"/>
    <path d="M5,28 Q0,35 5,40" stroke={color} strokeWidth="3" fill="none" opacity="0.3"/>
  </svg>
);

// Styles for animations
export const NatureDecorationsStyles = () => (
  <style>{`
    /* Bird animations */
    .nature-bird.animate {
      animation: birdBob 3s ease-in-out infinite;
    }

    @keyframes birdBob {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(3deg); }
    }

    .nature-bird.animate[style*="scaleX(-1)"] {
      animation: birdBobFlipped 3s ease-in-out infinite;
    }

    @keyframes birdBobFlipped {
      0%, 100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
      50% { transform: scaleX(-1) translateY(-8px) rotate(-3deg); }
    }

    /* Leaf animations */
    .nature-leaf {
      animation: leafSway 4s ease-in-out infinite;
    }

    @keyframes leafSway {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(5deg); }
    }

    /* Plant/tree animations */
    .nature-plant {
      animation: plantSway 5s ease-in-out infinite;
    }

    @keyframes plantSway {
      0%, 100% { transform: rotate(0deg) translateX(0); }
      50% { transform: rotate(2deg) translateX(2px); }
    }

    /* Wheat sway */
    .nature-plant.wheat {
      animation: wheatWave 3s ease-in-out infinite;
      transform-origin: bottom center;
    }

    @keyframes wheatWave {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }

    /* Flower animation */
    .nature-flower {
      animation: flowerPulse 4s ease-in-out infinite;
    }

    @keyframes flowerPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    /* Blob animation */
    .nature-blob {
      animation: blobMorph 8s ease-in-out infinite;
    }

    @keyframes blobMorph {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.05) rotate(5deg); }
    }

    /* Seed floating */
    .nature-seed {
      animation: seedFloat 6s ease-in-out infinite;
    }

    @keyframes seedFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(5deg); }
      75% { transform: translateY(-5px) rotate(-3deg); }
    }

    /* Sun rotation */
    .nature-sun {
      animation: sunGlow 4s ease-in-out infinite;
    }

    @keyframes sunGlow {
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    /* Cow subtle movement */
    .nature-cow {
      animation: cowGraze 5s ease-in-out infinite;
    }

    @keyframes cowGraze {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }

    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
      .nature-bird,
      .nature-leaf,
      .nature-plant,
      .nature-flower,
      .nature-blob,
      .nature-seed,
      .nature-sun,
      .nature-cow {
        animation: none !important;
      }
    }
  `}</style>
);

export default {
  Bird,
  Leaf,
  Plant,
  Flower,
  OrganicBlob,
  Seed,
  SunDecor,
  CowSilhouette,
  NatureDecorationsStyles
};
