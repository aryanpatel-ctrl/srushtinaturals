/**
 * WaveDivider - Organic SVG wave transitions between sections
 *
 * @param {string} variant - 'default' | 'organic' | 'leaf' - Style of wave
 * @param {boolean} flip - Flip the wave vertically
 * @param {string} fillColor - Color of the wave (defaults to white)
 * @param {string} backgroundColor - Background color behind the wave
 * @param {boolean} animated - Enable subtle wave animation
 */
function WaveDivider({
  variant = 'default',
  flip = false,
  fillColor = '#ffffff',
  backgroundColor = 'transparent',
  animated = false
}) {
  const getWavePath = () => {
    switch (variant) {
      case 'organic':
        // More organic, natural looking wave
        return (
          <path
            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill={fillColor}
          />
        );

      case 'leaf':
        // Wave with subtle leaf-like curves
        return (
          <path
            d="M0,64L40,69.3C80,75,160,85,240,101.3C320,117,400,139,480,138.7C560,139,640,117,720,101.3C800,85,880,75,960,85.3C1040,96,1120,128,1200,133.3C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill={fillColor}
          />
        );

      case 'gentle':
        // Very gentle, subtle wave
        return (
          <path
            d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill={fillColor}
          />
        );

      default:
        // Standard wave
        return (
          <path
            d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,85.3C840,75,960,85,1080,101.3C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill={fillColor}
          />
        );
    }
  };

  const getHeight = () => {
    switch (variant) {
      case 'gentle':
        return '60';
      case 'organic':
      case 'leaf':
        return '100';
      default:
        return '80';
    }
  };

  return (
    <div
      className={`wave-divider ${flip ? 'flip' : ''} ${animated ? 'animated' : ''}`}
      style={{ backgroundColor }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 1440 ${getHeight()}`}
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          minHeight: variant === 'gentle' ? '30px' : '50px',
          maxHeight: variant === 'gentle' ? '60px' : '100px'
        }}
      >
        {getWavePath()}
      </svg>
    </div>
  );
}

export default WaveDivider;
