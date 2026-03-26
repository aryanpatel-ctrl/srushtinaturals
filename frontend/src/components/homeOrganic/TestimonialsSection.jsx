import { testimonials } from '../../data/testimonials';
import { Bird, Leaf, Seed, OrganicBlob, Flower, NatureDecorationsStyles } from './NatureDecorations';

/**
 * TestimonialsSection - Customer Stories Carousel
 */
function TestimonialsSection() {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      '#103C29',
      '#70857A',
      '#8B5A2B',
      '#4A6741',
      '#7D6B5D'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="star" style={{ color: i < rating ? '#F0A750' : '#E9E9E9' }}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <NatureDecorationsStyles />
      <section className="testimonials-section testimonials-section-decorated">
        {/* Decorative Elements */}
        <div className="section-decorations">
          {/* Bird top left */}
          <Bird
            color="blue"
            style={{ position: 'absolute', top: '40px', left: '6%', zIndex: 2 }}
            animate
          />

          {/* Floating seeds/dandelions */}
          <Seed
            style={{ position: 'absolute', top: '100px', right: '10%', opacity: 0.5 }}
          />
          <Seed
            style={{ position: 'absolute', top: '180px', left: '12%', opacity: 0.4, transform: 'scale(0.8)' }}
          />
          <Seed
            style={{ position: 'absolute', bottom: '120px', right: '15%', opacity: 0.45, transform: 'scale(0.7)' }}
          />

          {/* Organic blobs */}
          <OrganicBlob
            variant={2}
            color="rgba(255, 255, 255, 0.5)"
            style={{ position: 'absolute', top: '50px', right: '-30px', width: '180px', height: '180px' }}
          />
          <OrganicBlob
            variant={1}
            color="rgba(255, 255, 255, 0.4)"
            style={{ position: 'absolute', bottom: '80px', left: '-40px', width: '160px', height: '160px' }}
          />

          {/* Leaves */}
          <Leaf
            variant="default"
            color="#5B7A5B"
            style={{ position: 'absolute', top: '60px', right: '20%', transform: 'rotate(-15deg)', opacity: 0.4 }}
          />
          <Leaf
            variant="round"
            color="#8CAE8C"
            style={{ position: 'absolute', bottom: '80px', left: '8%', transform: 'rotate(25deg)', opacity: 0.35 }}
          />

          {/* Flowers */}
          <Flower
            color="#FFB6C1"
            style={{ position: 'absolute', bottom: '150px', right: '5%', width: '30px', height: '30px', opacity: 0.5 }}
          />
          <Flower
            color="#FFD700"
            style={{ position: 'absolute', top: '200px', left: '4%', width: '25px', height: '25px', opacity: 0.4 }}
          />
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5" data-animate>
            <p className="section-tagline">Happy Customers</p>
            <h2 className="section-title nature-style">
              What Our <span>Family Says</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '500px', margin: '0 auto' }}>
              Real stories from real families who have made Srushti Naturals a part of their daily lives.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div
            dir="ltr"
            className="swiper tf-swiper"
            data-preview="3"
            data-tablet="2"
            data-mobile-sm="1"
            data-mobile="1"
            data-space-lg="30"
            data-space-md="20"
            data-space="15"
            data-pagination="2"
            data-pagination-sm="1"
            data-pagination-md="2"
            data-pagination-lg="3"
          >
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide" key={testimonial.id}>
                  <div
                    className="testimonial-card"
                    data-animate
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <StarRating rating={testimonial.rating} />

                    <p className="testimonial-quote">
                      {testimonial.text}
                    </p>

                    <div className="testimonial-author">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="author-avatar"
                        />
                      ) : (
                        <div
                          className="author-avatar"
                          style={{
                            backgroundColor: getAvatarColor(testimonial.name),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '18px'
                          }}
                        >
                          {getInitials(testimonial.name)}
                        </div>
                      )}

                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-location">{testimonial.location}</div>
                        <div className="author-product">Purchased: {testimonial.product}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sw-dot-default tf-sw-pagination mt-4"></div>
          </div>
        </div>
      </section>

      <style>{`
        .testimonials-section-decorated {
          position: relative;
          overflow: hidden;
        }

        .testimonials-section-decorated .section-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .testimonials-section-decorated .container {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 991px) {
          .testimonials-section-decorated .section-decorations > * {
            opacity: 0.3 !important;
          }
        }

        @media (max-width: 767px) {
          .testimonials-section-decorated .section-decorations {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default TestimonialsSection;
