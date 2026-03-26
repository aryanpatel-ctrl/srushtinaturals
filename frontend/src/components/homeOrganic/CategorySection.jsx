import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { Bird, Leaf, Plant, NatureDecorationsStyles } from './NatureDecorations';

function CategorySection() {
  return (
    <>
      <NatureDecorationsStyles />
      {/* Category */}
      <section className="flat-spacing category-section-decorated">
        {/* Decorative Elements */}
        <div className="section-decorations">
          {/* Bird on left */}
          <Bird
            color="default"
            style={{ position: 'absolute', top: '20px', left: '5%', zIndex: 2 }}
            animate
          />
          {/* Leaves scattered */}
          <Leaf
            variant="default"
            color="#70857A"
            style={{ position: 'absolute', top: '60px', right: '8%', transform: 'rotate(25deg)', opacity: 0.5 }}
          />
          <Leaf
            variant="round"
            color="#8CAE8C"
            style={{ position: 'absolute', bottom: '40px', left: '3%', transform: 'rotate(-15deg)', opacity: 0.4 }}
          />
          {/* Small plant/bush on right */}
          <Plant
            variant="bush"
            style={{ position: 'absolute', bottom: '0', right: '2%', opacity: 0.6 }}
          />
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-4">
            <p className="section-tagline">Browse Our Collection</p>
            <h2 className="section-title nature-style">
              Shop by <span>Category</span>
            </h2>
          </div>

          <div
            dir="ltr"
            className="swiper tf-swiper swiper-cate"
            data-preview="5"
            data-tablet="4"
            data-mobile-sm="3"
            data-mobile="2"
            data-space="10"
            data-pagination="2"
            data-pagination-sm="3"
            data-pagination-md="4"
            data-pagination-lg="5"
          >
            <div className="swiper-wrapper">
              {categories.map((category) => (
                <div className="swiper-slide" key={category.id}>
                  <Link to={`/shop/${category.slug}`} className="category-v02 hover-img organic-hover">
                    <div className="cate-image img-style rounded-circle">
                      <img loading="lazy" width="210" height="210" src={category.img} alt={category.name} />
                    </div>
                    <div className="cate-content text-center">
                      <h6 className="cate_name link">{category.name}</h6>
                      <p className="cate_quantity cl-text-2">{category.itemCount} items</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="sw-line-default style-2 tf-sw-pagination"></div>
          </div>
        </div>
      </section>
      {/* /Category */}

      <style>{`
        .category-section-decorated {
          position: relative;
          overflow: hidden;
        }

        .category-section-decorated .section-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .category-section-decorated .container {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 767px) {
          .category-section-decorated .section-decorations > * {
            transform: scale(0.7) !important;
          }
        }
      `}</style>
    </>
  );
}

export default CategorySection;
