import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { getProductById } from '../../data/products';

function CowGheeDetailSection() {
  const gheeImages = [
    "/assets/images/product/single/cowghee.jpg",
    "/assets/images/product/single/cowghee2.jpg",
    "/assets/images/product/single/cowghee3.webp"
  ];

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = getProductById('cow-ghee');
  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1, product.sizes?.[0] || null);
    }
  };

  const handleWishlistClick = () => {
    if (product) {
      toggleWishlist(product);
    }
  };

  return (
    <>
      {/* Cow Ghee Product Detail */}
      <section className="flat-spacing bg-main">
        <div className="banner-product-single style-3 section-image-zoom">
          <div className="container-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="tf-product-media-wrap sticky-top wow fadeInUp animate-on-scroll" data-animate>
                  <div className="product-thumbs-slider style-row row_left">
                    <div className="flat-wrap-media-product">
                      <div dir="ltr" className="swiper tf-product-media-main" id="gallery-swiper-started" data-spacing="0">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide" data-size="200 GM">
                            <a href={gheeImages[0]} target="_blank" rel="noopener noreferrer" className="item" data-pswp-width="490px" data-pswp-height="548px">
                              <img loading="lazy" className="tf-image-zoom" data-zoom={gheeImages[0]} src={gheeImages[0]} alt="Pure Gir Cow Ghee" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-size="500 GM">
                            <a href={gheeImages[1]} target="_blank" rel="noopener noreferrer" className="item" data-pswp-width="490px" data-pswp-height="548px">
                              <img loading="lazy" className="tf-image-zoom" data-zoom={gheeImages[1]} src={gheeImages[1]} alt="Pure Gir Cow Ghee" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-size="1 KG">
                            <a href={gheeImages[2]} target="_blank" rel="noopener noreferrer" className="item" data-pswp-width="490px" data-pswp-height="548px">
                              <img loading="lazy" className="tf-image-zoom" data-zoom={gheeImages[2]} src={gheeImages[2]} alt="Pure Gir Cow Ghee" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div dir="ltr" className="swiper tf-product-media-thumbs other-image-zoom" data-direction="vertical" data-preview="3">
                      <div className="swiper-wrapper stagger-wrap">
                        <div className="swiper-slide stagger-item">
                          <div className="item radius-8">
                            <img loading="lazy" src={gheeImages[0]} alt="Pure Gir Cow Ghee" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item">
                          <div className="item radius-8">
                            <img loading="lazy" src={gheeImages[1]} alt="Pure Gir Cow Ghee" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item">
                          <div className="item radius-8">
                            <img loading="lazy" src={gheeImages[2]} alt="Pure Gir Cow Ghee" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="tf-product-info-wrap position-relative mt-lg-0 wow fadeInUp animate-on-scroll" data-animate data-wow-delay="0.2s">
                  <div className="tf-zoom-main sticky-top"></div>
                  <div className="tf-product-info-list other-image-zoom gap-24">
                    <div className="single-heading">
                      <p className="detail-tag text-label cl-text-2 mb-4">Organic</p>
                      <Link to="/product/cow-ghee" className="detail-name h3 fw-medium mb-12 link">
                        Pure Gir Cow Ghee (Bilona)
                      </Link>
                      <div className="d-flex align-items-center gap-4 mb-12">
                        <div className="star-wrap normal d-flex align-items-center">
                          <i className="icon icon-Star fs-12"></i>
                          <i className="icon icon-Star fs-12"></i>
                          <i className="icon icon-Star fs-12"></i>
                          <i className="icon icon-Star fs-12"></i>
                          <i className="icon icon-Star fs-12"></i>
                        </div>
                        <span className="cl-text-2 text-caption-02">(214 reviews)</span>
                      </div>

                      <div className="d-flex align-items-center gap-4 mb-20">
                        <span className="text-sale text-label fw-semibold">Best seller</span>
                        <i className="icon icon-Lightning fs-20 text-primary"></i>
                        <span className="text-caption-01 cl-text-2">Selling fast! 31 people have this in their carts.</span>
                      </div>

                      <div className="detail-price d-block">
                        <h4 className="price-on-sale mb-4">{"\u20B9499.00"} - {"\u20B92200.00"}</h4>
                        <p className="cl-text-2 mb-0">200 GM: {"\u20B9499.00"} | 500 GM: {"\u20B91199.00"} | 1 KG: {"\u20B92200.00"}</p>
                      </div>
                    </div>

                    <div className="single-choose-option d-grid gap-20">
                      <div className="tf-product-total-quantity">
                        <p>Quantity:</p>
                        <div className="wg-quantity mb-8">
                          <button className="btn-quantity btn-decrease">
                            <i className="icon icon-minus"></i>
                          </button>
                          <input className="quantity-product" type="text" name="number" defaultValue="1" />
                          <button className="btn-quantity btn-increase">
                            <i className="icon icon-plus"></i>
                          </button>
                        </div>
                        <div className="group-action w-100">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="btn-action-price type-xl tf-btn animate-btn w-100"
                            onClick={handleAddToCart}
                          >
                            Add to cart
                          </a>
                          <button
                            type="button"
                            className={`hover-tooltip box-icon bg-white btn-add-wishlist ${inWishlist ? 'active' : ''}`}
                            onClick={handleWishlistClick}
                          >
                            <span className={`icon ${inWishlist ? 'icon-heart-fill' : 'icon-heart'}`}></span>
                            <span className="tooltip">{inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                          </button>
                          <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-top box-icon bg-white btn-add-compare">
                            <span className="icon icon-GitDiff"></span>
                            <span className="tooltip">Compare</span>
                          </a>
                        </div>
                        <a href="checkout.html" className="btn-action-buy type-xl tf-btn btn-primary animate-btn w-100">
                          Buy It Now
                        </a>
                      </div>

                      <div>
                        <Link to="/product/cow-ghee" className="tf-btn-line-2 fw-semibold style-primary pb-4">
                          View Full Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Cow Ghee Product Detail */}
    </>
  );
}

export default CowGheeDetailSection;
