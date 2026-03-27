import { Link } from 'react-router-dom';

function BannerImageSection() {
  return (
    <>
      {/* Banner Image */}
      <div className="tf-grid-layout sm-col-2 xl-col-3 gap-10">
        <div className="banner-countdown-v04 banner-countdown-v04--shade wow fadeInUp animate-on-scroll card-hover-lift" data-animate>
          <div className="banner-image">
            <img loading="lazy" width="633" height="856" src="/assets/images/product/organic/mangobanner.webp" alt="Mango Banner" />
          </div>
          <div className="banner-content text-center">
            <h2 className="title text-white mb-8 wow fadeInUp">Grand Opening Sale</h2>
            <p className="desc text-white mb-20 wow fadeInUp">Up to 30% off all organic products!</p>
            <div className="countdown-v01 text-white d-flex justify-content-center">
              <div className="js-countdown cd-has-zero cd-custom" data-timer="1093120" data-labels="Days,Hours,Mins,Secs"></div>
            </div>
            <Link to="/shop" className="tf-btn btn-white">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="tf-grid-layout gap-10">
          <div className="banner-image-text type-abs style-13 wow fadeInUp animate-on-scroll card-hover-lift" data-animate data-wow-delay="0.1s">
            <Link to="/shop/spices" className="bn-image img-style">
              <img loading="lazy" width="654" height="436" src="/assets/images/section/ajwainn.png" alt="Ajwain" />
            </Link>
            <div className="bn-content wow fadeInUp">
              <h6 className="desc text-primary mb-0">Up to 15% off</h6>
              <Link to="/shop/spices" className="title h3 fw-medium link">
                Ajwain
              </Link>
              <Link to="/shop/spices" className="btn-action tf-btn btn-white">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="banner-image-text type-abs style-13 wow fadeInUp animate-on-scroll card-hover-lift" data-animate data-wow-delay="0.2s">
            <Link to="/shop/spices" className="bn-image img-style">
              <img loading="lazy" width="654" height="436" src="/assets/images/section/turmericc.png" alt="Turmeric" />
            </Link>
            <div className="bn-content wow fadeInUp">
              <h6 className="desc text-primary mb-0">Most Loved Picks</h6>
              <Link to="/shop/spices" className="title h3 fw-medium link">
                Turmeric
              </Link>
              <Link to="/shop/spices" className="btn-action tf-btn btn-white">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="tf-grid-layout gap-10 sm-col-2 xl-col-1 xl-wd-full">
          <div className="banner-image-text type-abs style-13 wow fadeInUp animate-on-scroll card-hover-lift" data-animate data-wow-delay="0.3s">
            <Link to="/product/fennel-seeds" className="bn-image img-style">
              <img loading="lazy" width="654" height="436" src="/assets/images/section/fennell.png" alt="Fennel" />
            </Link>
            <div className="bn-content wow fadeInUp">
              <h6 className="desc text-primary mb-0">Top Organic Choices</h6>
              <Link to="/product/fennel-seeds" className="title h3 fw-medium link">
                Fennel
              </Link>
              <Link to="/product/fennel-seeds" className="btn-action tf-btn btn-white">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="banner-image-text type-abs style-13 wow fadeInUp animate-on-scroll card-hover-lift" data-animate data-wow-delay="0.4s">
            <Link to="/shop" className="bn-image img-style">
              <img loading="lazy" width="654" height="436" src="/assets/images/section/banner-37.jpg" alt="Healthy Starts Here" />
            </Link>
            <div className="bn-content wow fadeInUp">
              <h6 className="desc text-primary mb-0">Most Loved Picks</h6>
              <Link to="/shop" className="title h3 fw-medium link">
                Healthy Starts Here
              </Link>
              <Link to="/shop" className="btn-action tf-btn btn-white">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Banner Image */}
    </>
  );
}

export default BannerImageSection;
