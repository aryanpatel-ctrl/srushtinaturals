import { Link } from 'react-router-dom';
import FloatingLeaves from './FloatingLeaves';

function SlideShowSection() {
  return (
    <>
      {/* Balanced Hero Section */}
      <div className="tf-slideshow tf-btn-swiper-main hover-sw-nav" style={{ position: 'relative' }}>
        {/* Floating Leaves Overlay - Minimal for performance */}
        <FloatingLeaves count={4} intensity="subtle" />
        <div
          dir="ltr"
          className="swiper tf-swiper sw-slide-show slider_effect_fade"
          data-effect="fade"
          data-loop="true"
          data-auto="false"
        >
          <div className="swiper-wrapper">
            {/* Slide 1 - Natural Pulses */}
            <div className="swiper-slide">
              <div className="slideshow-wrap">
                <div className="sld_image">
                  <img
                    loading="lazy"
                    width="1920"
                    height="810"
                    src="/assets/images/slider/slider-21.png"
                    alt="Farm Fresh Natural Pulses"
                  />
                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top right, rgba(16, 60, 41, 0.88) 0%, rgba(16, 60, 41, 0.45) 50%, rgba(0,0,0,0.05) 100%)",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div className="sld_content pst-3" style={{ zIndex: 2 }}>
                  <div className="container">
                    <div className="hero-content-wrap">
                      {/* Tagline */}
                      <p className="hero-tagline fade-item fade-item-1">
                        100% Organic & Chemical Free
                      </p>

                      {/* Main Headline */}
                      <h1 className="hero-title fade-item fade-item-2">
                        Farm Fresh <br />
                        <span>Natural Pulses</span>
                      </h1>

                      {/* Description */}
                      <p className="hero-desc fade-item fade-item-3">
                        Sourced directly from farmers, rich in protein & natural
                        goodness.
                      </p>

                      {/* CTA Button */}
                      <div className="fade-item fade-item-4">
                        <Link to="/shop/pulses" className="hero-btn">
                          Shop Now
                          <i
                            className="icon icon-ArrowRight"
                            style={{ marginLeft: "10px", fontSize: "14px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Gir Cow Ghee */}
            <div className="swiper-slide">
              <div className="slideshow-wrap">
                <div className="sld_image">
                  <img
                    loading="lazy"
                    width="1920"
                    height="810"
                    src="/assets/images/slider/slider-20.png"
                    alt="Pure Gir Cow Ghee"
                  />
                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top right, rgba(139, 90, 43, 0.88) 0%, rgba(139, 90, 43, 0.45) 50%, rgba(0,0,0,0.05) 100%)",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div className="sld_content pst-3" style={{ zIndex: 2 }}>
                  <div className="container">
                    <div className="hero-content-wrap">
                      {/* Tagline */}
                      <p className="hero-tagline fade-item fade-item-1">
                        Traditional Bilona Method
                      </p>

                      {/* Main Headline */}
                      <h1 className="hero-title fade-item fade-item-2">
                        Pure Gir <br />
                        <span>Cow Ghee</span>
                      </h1>

                      {/* Description */}
                      <p className="hero-desc fade-item fade-item-3">
                        Handcrafted A2 ghee, aromatic & rich in nutrition.
                      </p>

                      {/* CTA Button */}
                      <div className="fade-item fade-item-4">
                        <Link to="/product/cow-ghee" className="hero-btn">
                          Order Now
                          <i
                            className="icon icon-ArrowRight"
                            style={{ marginLeft: "10px", fontSize: "14px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 - Natural Mangoes */}
            <div className="swiper-slide">
              <div className="slideshow-wrap">
                <div className="sld_image">
                  <img
                    loading="lazy"
                    width="1920"
                    height="810"
                    src="/assets/images/slider/slider-19.png"
                    alt="Natural Mangoes"
                  />
                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top right, rgba(180, 100, 20, 0.88) 0%, rgba(180, 100, 20, 0.45) 50%, rgba(0,0,0,0.05) 100%)",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div className="sld_content pst-3" style={{ zIndex: 2 }}>
                  <div className="container">
                    <div className="hero-content-wrap">
                      {/* Tagline */}
                      <p className="hero-tagline fade-item fade-item-1">
                        Seasonal Special
                      </p>

                      {/* Main Headline */}
                      <h1 className="hero-title fade-item fade-item-2">
                        Pure Natural <br />
                        <span>Sweet Mangoes</span>
                      </h1>

                      {/* Description */}
                      <p className="hero-desc fade-item fade-item-3">
                        Naturally ripened, farm fresh mangoes from Gujarat.
                      </p>

                      {/* CTA Button */}
                      <div className="fade-item fade-item-4">
                        <Link to="/shop" className="hero-btn">
                          Pre-Order
                          <i
                            className="icon icon-ArrowRight"
                            style={{ marginLeft: "10px", fontSize: "14px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="sw-line-default tf-sw-pagination"></div>
        </div>

        {/* Navigation Arrows */}
        <div className="nav-prev-swiper hero-nav-prev">
          <i className="icon icon-ArrowLeft" />
        </div>
        <div className="nav-next-swiper hero-nav-next">
          <i className="icon icon-ArrowRight" />
        </div>
      </div>
      {/* /Balanced Hero Section */}

      {/* Custom Styles */}
      <style>{`
        .tf-slideshow .sld_image {
          position: relative;
        }

        /* Hero Content Wrapper */
        .hero-content-wrap {
          max-width: 600px;
          padding: 20px 0 20px 70px;
        }

        /* Tagline */
        .hero-tagline {
          font-family: "Lato", sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffeb8a;
          margin-bottom: 20px;
          display: inline-block;
          position: relative;
          padding-left: 45px;
        }

        .hero-tagline::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 2px;
          background: #ffeb8a;
        }

        /* Main Title */
        .hero-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(48px, 7vw, 85px);
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 25px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .hero-title span {
          color: #ffeb8a;
        }

        /* Description */
        .hero-desc {
          font-family: "Lato", sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 35px;
          max-width: 450px;
        }

        /* CTA Button */
        .hero-btn {
          display: inline-flex;
          align-items: center;
          padding: 16px 40px;
          background: #fff;
          color: #103c29;
          font-family: "Lato", sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 50px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .hero-btn:hover {
          background: #ffeb8a;
          color: #103c29;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Navigation Arrows */
        .tf-slideshow .hero-nav-prev,
        .tf-slideshow .hero-nav-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .tf-slideshow .hero-nav-prev {
          left: 22px;
        }

        .tf-slideshow .hero-nav-next {
          right: 22px;
        }

        .tf-slideshow .hero-nav-prev i,
        .tf-slideshow .hero-nav-next i {
          color: #fff;
          font-size: 20px;
        }

        .tf-slideshow .hero-nav-prev:hover,
        .tf-slideshow .hero-nav-next:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.05);
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-content-wrap {
            max-width: 500px;
            padding-left: 56px;
          }
          .hero-desc {
            font-size: 16px;
          }
        }

        @media (max-width: 767px) {
          .hero-content-wrap {
            padding: 20px 48px 20px 44px;
          }
          .hero-tagline {
            font-size: 12px;
            letter-spacing: 2px;
            padding-left: 35px;
            margin-bottom: 15px;
          }
          .hero-tagline::before {
            width: 22px;
          }
          .hero-title {
            margin-bottom: 20px;
          }
          .hero-desc {
            font-size: 15px;
            margin-bottom: 25px;
          }
          .hero-btn {
            padding: 14px 32px;
            font-size: 14px;
          }
          .tf-slideshow .hero-nav-prev,
          .tf-slideshow .hero-nav-next {
            width: 45px;
            height: 45px;
          }
          .tf-slideshow .hero-nav-prev {
            left: 10px;
          }
          .tf-slideshow .hero-nav-next {
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default SlideShowSection;
