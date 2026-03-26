import { Link } from 'react-router-dom';
import { Bird, Leaf, Plant, CowSilhouette, OrganicBlob, SunDecor, NatureDecorationsStyles } from './NatureDecorations';

/**
 * OurStorySection - "From Our Farm to Your Home"
 */
function OurStorySection() {
  const stats = [
    { number: '15+', label: 'Years of Farming' },
    { number: '10K+', label: 'Happy Families' },
    { number: '25+', label: 'Natural Products' }
  ];

  return (
    <>
      <NatureDecorationsStyles />
      <section className="our-story-section story-section-decorated">
        {/* Decorative Elements */}
        <div className="section-decorations">
          {/* Sun decoration top right */}
          <SunDecor
            style={{ position: 'absolute', top: '20px', right: '5%', opacity: 0.4, width: '60px', height: '60px' }}
          />

          {/* Bird flying */}
          <Bird
            color="brown"
            flip
            style={{ position: 'absolute', top: '80px', left: '8%', zIndex: 2 }}
            animate
          />

          {/* Organic blobs for soft background */}
          <OrganicBlob
            variant={1}
            color="rgba(112, 133, 122, 0.06)"
            style={{ position: 'absolute', top: '30%', right: '-50px', width: '200px', height: '200px' }}
          />
          <OrganicBlob
            variant={2}
            color="rgba(139, 174, 140, 0.05)"
            style={{ position: 'absolute', bottom: '10%', left: '-30px', width: '150px', height: '150px' }}
          />

          {/* Leaves scattered */}
          <Leaf
            variant="default"
            color="#5B7A5B"
            style={{ position: 'absolute', top: '120px', right: '12%', transform: 'rotate(20deg)', opacity: 0.4 }}
          />
          <Leaf
            variant="maple"
            color="#C17F59"
            style={{ position: 'absolute', bottom: '100px', right: '8%', transform: 'rotate(-30deg)', opacity: 0.35 }}
          />
          <Leaf
            variant="round"
            color="#8CAE8C"
            style={{ position: 'absolute', bottom: '150px', left: '3%', transform: 'rotate(15deg)', opacity: 0.3 }}
          />

          {/* Cow silhouette */}
          <CowSilhouette
            style={{ position: 'absolute', bottom: '30px', right: '15%', opacity: 0.15 }}
          />

          {/* Small plant */}
          <Plant
            variant="bush"
            style={{ position: 'absolute', bottom: '0', left: '5%', opacity: 0.4, width: '60px', height: '45px' }}
          />
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="story-image-wrapper" data-animate>
                <img
                  src="/assets/images/section/farm-story-placeholder.jpg"
                  alt="Our organic farm in Gujarat"
                  width="570"
                  height="450"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="
                        width: 100%;
                        height: 450px;
                        background: linear-gradient(135deg, #70857A 0%, #103C29 100%);
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 18px;
                        text-align: center;
                        padding: 20px;
                      ">
                        <div>
                          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style="margin-bottom: 15px; opacity: 0.8;">
                            <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                            <path d="M9 21V15H15V21" stroke="currentColor" stroke-width="1.5"/>
                            <circle cx="12" cy="11" r="2" stroke="currentColor" stroke-width="1.5"/>
                          </svg>
                          <div style="opacity: 0.9;">Farm Story Image<br/><small style="opacity: 0.7;">Replace with your farm photo</small></div>
                        </div>
                      </div>
                    `;
                  }}
                />

                {/* Experience Badge */}
                <div className="story-badge">
                  <div className="badge-number">15+</div>
                  <div className="badge-text">Years of Trust</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6">
              <div className="story-content" data-animate>
                <p className="section-tagline">Our Story</p>

                <h2 className="section-title nature-style">
                  From Our Farm <br />
                  <span>to Your Home</span>
                </h2>

                <p className="story-text">
                  Nestled in the heart of Gujarat, our family farm has been nurturing nature&apos;s
                  finest produce for over 15 years. What began as a small dream to bring pure,
                  chemical-free food to our community has blossomed into Srushti Naturals.
                </p>
                <p className="story-text">
                  Every product we offer carries the essence of traditional farming wisdom,
                  passed down through generations. From our free-grazing Gir cows to our
                  heritage grain fields, we believe in working with nature, not against it.
                </p>

                <div className="story-stats">
                  {stats.map((stat, index) => (
                    <div className="stat-item" key={index}>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="story-cta">
                  Read Our Full Story
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .story-section-decorated {
          position: relative;
          overflow: hidden;
        }

        .story-section-decorated .section-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .story-section-decorated .container {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 991px) {
          .story-section-decorated .section-decorations > *:not(.nature-blob) {
            opacity: 0.3 !important;
          }
        }

        @media (max-width: 767px) {
          .story-section-decorated .section-decorations {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default OurStorySection;
