import { Link } from 'react-router-dom';
import { getPopularProducts } from '../../data/products';
import ProductCard from '../common/ProductCard';
import { Bird, Leaf, Plant, OrganicBlob, NatureDecorationsStyles } from './NatureDecorations';

function PopularSection({ onQuickView }) {
  const products = getPopularProducts();

  return (
    <>
      <NatureDecorationsStyles />
      {/* Popular */}
      <section className="flat-spacing popular-section-decorated">
        {/* Decorative Elements */}
        <div className="section-decorations">
          {/* Bird on left side */}
          <Bird
            color="orange"
            style={{ position: 'absolute', top: '40px', left: '8%', zIndex: 2 }}
            animate
          />

          {/* Wheat stalks on right */}
          <div className="wheat-group" style={{ position: 'absolute', bottom: '20px', right: '3%' }}>
            <Plant variant="wheat" style={{ transform: 'rotate(-5deg)' }} />
            <Plant variant="wheat" style={{ marginLeft: '-8px', transform: 'rotate(3deg)', animationDelay: '0.5s' }} />
            <Plant variant="wheat" style={{ marginLeft: '-8px', transform: 'rotate(-2deg)', animationDelay: '1s' }} />
          </div>

          {/* Organic blob */}
          <OrganicBlob
            variant={3}
            color="rgba(200, 180, 140, 0.08)"
            style={{ position: 'absolute', top: '50px', right: '5%', width: '150px', height: '150px' }}
          />

          {/* Leaves */}
          <Leaf
            variant="default"
            color="#70857A"
            style={{ position: 'absolute', top: '80px', right: '15%', transform: 'rotate(30deg)', opacity: 0.4 }}
          />
          <Leaf
            variant="round"
            color="#A8C5A8"
            style={{ position: 'absolute', bottom: '60px', left: '4%', transform: 'rotate(-25deg)', opacity: 0.35 }}
          />

          {/* Small tree on left */}
          <Plant
            variant="tree"
            style={{ position: 'absolute', bottom: '0', left: '1%', opacity: 0.5, width: '50px', height: '70px' }}
          />
        </div>

        <div className="container">
          <div className="sect-heading type-2 has-col-right" data-animate>
            <div>
              <p className="s-desc cl-text-3 fw-semibold mb-8">STRAIGHT FROM THE FIELDS</p>
              <h2 className="s-title font-outfit mb-0 letter-space-0">Fresh from Farm</h2>
            </div>
            <div className="col-right">
              <Link to="/shop" className="tf-btn-line-2 py-4 style-primary">
                <span className="fw-semibold">View All Products</span>
              </Link>
            </div>
          </div>

          <div
            dir="ltr"
            className="swiper tf-swiper wrap-sw-over"
            data-preview="4"
            data-tablet="3"
            data-mobile-sm="2"
            data-mobile="2"
            data-space-lg="30"
            data-space-md="20"
            data-space="10"
            data-pagination="2"
            data-pagination-sm="2"
            data-pagination-md="3"
            data-pagination-lg="4"
          >
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div className="swiper-slide" key={product.id}>
                  <ProductCard
                    product={product}
                    onQuickView={onQuickView}
                    showRating={true}
                    variant="popular"
                  />
                </div>
              ))}
            </div>
            <div className="sw-dot-default tf-sw-pagination"></div>
          </div>
        </div>
      </section>
      {/* /Popular */}

      <style>{`
        .popular-section-decorated {
          position: relative;
          overflow: hidden;
        }

        .popular-section-decorated .section-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .popular-section-decorated .container {
          position: relative;
          z-index: 1;
        }

        .wheat-group {
          display: flex;
          align-items: flex-end;
        }

        @media (max-width: 991px) {
          .popular-section-decorated .section-decorations > * {
            opacity: 0.4 !important;
            transform: scale(0.8) !important;
          }
        }

        @media (max-width: 767px) {
          .popular-section-decorated .section-decorations {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default PopularSection;
