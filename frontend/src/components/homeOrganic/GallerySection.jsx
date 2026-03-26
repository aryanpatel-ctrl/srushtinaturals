import { Link } from 'react-router-dom';
import { Bird, Leaf, Flower, OrganicBlob, NatureDecorationsStyles } from './NatureDecorations';

function GallerySection() {
  const galleryItems = [
    { img: "/assets/images/gallery/gallery-32.jpg", productSlug: "basmati-rice" },
    { img: "/assets/images/gallery/gallery-33.jpg", productSlug: "chana-dal" },
    { img: "/assets/images/gallery/gallery-34.jpg", productSlug: "cumin-seeds" },
    { img: "/assets/images/gallery/gallery-35.jpg", productSlug: "sesame-oil" },
    { img: "/assets/images/gallery/gallery-36.jpg", productSlug: "cow-ghee" }
  ];

  return (
    <>
      <NatureDecorationsStyles />
      {/* Gallery */}
      <section className="themesFlat gallery-section-decorated" style={{ marginTop: "48px", paddingBottom: "30px" }}>
        {/* Decorative Elements */}
        <div className="section-decorations">
          {/* Bird */}
          <Bird
            color="orange"
            flip
            style={{ position: 'absolute', top: '10px', right: '10%', zIndex: 2 }}
            animate
          />

          {/* Organic blobs */}
          <OrganicBlob
            variant={2}
            color="rgba(112, 133, 122, 0.06)"
            style={{ position: 'absolute', top: '-30px', left: '-30px', width: '150px', height: '150px' }}
          />

          {/* Leaves */}
          <Leaf
            variant="default"
            color="#70857A"
            style={{ position: 'absolute', top: '30px', left: '5%', transform: 'rotate(15deg)', opacity: 0.4 }}
          />
          <Leaf
            variant="round"
            color="#8CAE8C"
            style={{ position: 'absolute', bottom: '50px', right: '8%', transform: 'rotate(-25deg)', opacity: 0.35 }}
          />

          {/* Flowers */}
          <Flower
            color="#FF69B4"
            style={{ position: 'absolute', top: '60px', right: '3%', width: '25px', height: '25px', opacity: 0.5 }}
          />
          <Flower
            color="#FFD700"
            style={{ position: 'absolute', bottom: '80px', left: '4%', width: '22px', height: '22px', opacity: 0.45 }}
          />
        </div>

        <div className="container">
          <div className="sect-heading text-center" data-animate>
            <p className="section-tagline">Our Farm Life</p>
            <h3 className="section-title nature-style">Moments from Our Farm</h3>
            <p className="s-desc font-kumbh" style={{ color: '#70857A' }}>Follow us @srushtinaturals</p>
          </div>
        </div>
        <div className="px-20">
          <div
            dir="ltr"
            className="swiper tf-swiper"
            data-preview="5"
            data-tablet="4"
            data-mobile-sm="3"
            data-mobile="2"
            data-space-lg="20"
            data-space-md="10"
            data-space="10"
            data-pagination="2"
            data-pagination-sm="3"
            data-pagination-md="4"
            data-pagination-lg="6"
          >
            <div className="swiper-wrapper">
              {galleryItems.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="gallery-item radius-12 hover-img hover-overlay" data-animate style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="image img-style">
                      <img loading="lazy" width="274" height="274" src={item.img} alt="Gallery" />
                    </div>
                    <Link to={`/product/${item.productSlug}`} className="box-icon hover-tooltip">
                      <span className="icon icon-Eye"></span>
                      <span className="tooltip">View product</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="sw-line-default style-2 tf-sw-pagination"></div>
          </div>
        </div>
      </section>
      {/* /Gallery */}

      <style>{`
        .gallery-section-decorated {
          position: relative;
          overflow: hidden;
        }

        .gallery-section-decorated .section-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .gallery-section-decorated .container,
        .gallery-section-decorated .px-20 {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 767px) {
          .gallery-section-decorated .section-decorations {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default GallerySection;
