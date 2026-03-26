import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../common/ProductCard';
import { Bird, Leaf, OrganicBlob, Flower, NatureDecorationsStyles } from './NatureDecorations';

function FavoriteSection({ onQuickView }) {
  const products = getFeaturedProducts();

  return (
    <>
      <NatureDecorationsStyles />
      {/* Favorite */}
      <section className="section-banner-favorite flat-spacing pt-0 favorite-section-decorated">
        {/* Decorative Elements */}
        <div className="section-decorations">
          {/* Organic blob backgrounds */}
          <OrganicBlob
            variant={1}
            color="rgba(112, 133, 122, 0.08)"
            style={{ position: 'absolute', top: '-50px', right: '-30px', width: '200px', height: '200px' }}
          />
          <OrganicBlob
            variant={2}
            color="rgba(139, 174, 140, 0.06)"
            style={{ position: 'absolute', bottom: '100px', left: '-50px', width: '180px', height: '180px' }}
          />

          {/* Bird top right */}
          <Bird
            color="green"
            flip
            style={{ position: 'absolute', top: '30px', right: '10%', zIndex: 2 }}
            animate
          />

          {/* Scattered leaves */}
          <Leaf
            variant="maple"
            color="#C17F59"
            style={{ position: 'absolute', top: '150px', left: '2%', transform: 'rotate(45deg)', opacity: 0.4 }}
          />
          <Leaf
            variant="default"
            color="#8CAE8C"
            style={{ position: 'absolute', bottom: '80px', right: '5%', transform: 'rotate(-20deg)', opacity: 0.5 }}
          />

          {/* Small flowers */}
          <Flower
            color="#FF69B4"
            style={{ position: 'absolute', top: '200px', right: '3%', width: '25px', height: '25px', opacity: 0.6 }}
          />
          <Flower
            color="#FFD700"
            style={{ position: 'absolute', bottom: '150px', left: '5%', width: '20px', height: '20px', opacity: 0.5 }}
          />
        </div>

        <div className="container">
          <div className="sect-heading type-2 has-col-right">
            <div>
              <p className="s-desc cl-text-3 fw-semibold mb-8">HANDPICKED FOR YOU</p>
              <h2 className="s-title font-outfit mb-0 letter-space-0">
                Nature&apos;s Best Picks
              </h2>
            </div>
            <div className="col-right">
              <Link to="/shop" className="tf-btn-line-2 py-4 style-primary">
                <span className="fw-semibold">View All Products</span>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 d-none d-lg-block">
              <div className="col-left">
                <div className="banner-image-text type-abs style-12">
                  <Link to="/shop" className="bn-image img-style">
                    <img loading="lazy" width="420" height="776" src="/assets/images/section/honey.png" alt="Image" />
                  </Link>
                  <div className="bn-content align-items-center text-center">
                    <p className="desc cl-text-2 fw-semibold text-capitalize">Naturally sweet and full of flavor.</p>
                    <Link to="/shop" className="title h3 fw-medium link">
                      Crispy Organic <br className="d-none d-sm-block" /> Apple Rings
                    </Link>
                    <Link to="/shop" className="btn-action tf-btn btn-white">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="col-right">
                <div
                  dir="ltr"
                  className="swiper tf-swiper"
                  data-preview="3"
                  data-tablet="3"
                  data-mobile-sm="2"
                  data-mobile="2"
                  data-space-lg="30"
                  data-space-md="15"
                  data-space="10"
                  data-pagination="2"
                  data-pagination-sm="2"
                  data-pagination-md="3"
                  data-pagination-lg="3"
                  data-grid="2"
                >
                  <div className="swiper-wrapper">
                    {products.map((product) => (
                      <div className="swiper-slide" key={product.id}>
                        <ProductCard
                          product={product}
                          onQuickView={onQuickView}
                          showRating={false}
                          variant="default"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="sw-dot-default tf-sw-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Favorite */}

      <style>{`
        .favorite-section-decorated {
          position: relative;
          overflow: hidden;
        }

        .favorite-section-decorated .section-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .favorite-section-decorated .container {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 991px) {
          .favorite-section-decorated .section-decorations > * {
            opacity: 0.5 !important;
          }
        }

        @media (max-width: 767px) {
          .favorite-section-decorated .section-decorations {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default FavoriteSection;
