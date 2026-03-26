import { journeySteps } from '../../data/journeySteps';

/**
 * FarmJourneySection - "From Farm to Your Table"
 */
function FarmJourneySection() {
  const getStepIcon = (iconName) => {
    const icons = {
      grown: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44V28" stroke="#103C29" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M24 28C24 22 28 18 34 16C34 22 30 28 24 28Z" fill="#70857A" stroke="#103C29" strokeWidth="2"/>
          <path d="M24 28C24 22 20 18 14 16C14 22 18 28 24 28Z" fill="#70857A" stroke="#103C29" strokeWidth="2"/>
          <path d="M24 20C24 14 27 10 32 8C32 14 28 20 24 20Z" fill="#8CAE8C" stroke="#103C29" strokeWidth="1.5"/>
          <ellipse cx="24" cy="44" rx="8" ry="2" fill="#D4C4A8" opacity="0.5"/>
        </svg>
      ),
      harvested: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 38L24 28L34 38" stroke="#103C29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 28V8" stroke="#103C29" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="24" cy="8" r="3" fill="#FFEB8A" stroke="#103C29" strokeWidth="1.5"/>
          <path d="M8 42H40" stroke="#103C29" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M18 38V42" stroke="#103C29" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 38V42" stroke="#103C29" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      packed: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="32" height="26" rx="3" fill="#F8F4EC" stroke="#103C29" strokeWidth="2.5"/>
          <path d="M8 22H40" stroke="#103C29" strokeWidth="2"/>
          <path d="M18 16V8H30V16" stroke="#103C29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M20 30L23 33L28 26" stroke="#70857A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delivered: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="18" width="28" height="18" rx="2" fill="#F8F4EC" stroke="#103C29" strokeWidth="2.5"/>
          <path d="M32 24H40C42 24 44 26 44 28V34C44 35 43 36 42 36H32" fill="#70857A" stroke="#103C29" strokeWidth="2.5"/>
          <circle cx="14" cy="38" r="4" fill="#103C29"/>
          <circle cx="14" cy="38" r="2" fill="#F8F4EC"/>
          <circle cx="36" cy="38" r="4" fill="#103C29"/>
          <circle cx="36" cy="38" r="2" fill="#F8F4EC"/>
          <path d="M10 26H22" stroke="#103C29" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    };
    return icons[iconName] || icons.grown;
  };

  return (
    <section className="farm-journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" data-animate>
          <p className="section-tagline">Our Process</p>
          <h2 className="section-title nature-style">
            From Farm <span>to Your Table</span>
          </h2>
          <p className="text-muted mb-0" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Every step of our journey is guided by tradition, care, and a commitment to purity.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="journey-timeline">
          {journeySteps.map((step, index) => (
            <div
              className="journey-step"
              key={step.id}
              data-animate
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="step-number">{step.id}</span>
              <div className="step-icon">
                {getStepIcon(step.icon)}
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FarmJourneySection;
