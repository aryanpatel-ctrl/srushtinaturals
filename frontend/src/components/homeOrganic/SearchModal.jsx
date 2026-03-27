import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { formatPriceSimple } from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';

function SearchModal({ onQuickView }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  // Get recently viewed / featured products for display
  const recentProducts = products.slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Close modal and navigate to shop with search
      const modal = document.getElementById('search');
      if (modal) {
        const bsModal = window.bootstrap?.Modal?.getInstance(modal);
        bsModal?.hide();
      }
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product, 1, product.sizes?.[0] || null);
  };

  const handleQuickView = (product) => {
    onQuickView?.({
      name: product.name,
      category: product.category || 'Organic',
      img: product.img,
      hover: product.hoverImg,
      price: formatPriceSimple(product.price),
      oldPrice: product.oldPrice ? formatPriceSimple(product.oldPrice) : null,
      sale: product.salePercent ? `-${product.salePercent}%` : null
    });
  };

  return (
    <>
      {/* Search */}
      <div className="modal modalCentered fade modal-search" id="search">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex align-items-center justify-content-between gap-10">
              <h3>Search</h3>
              <span className="icon-close-popup flex-shrink-0" data-bs-dismiss="modal">
                <i className="icon-X2" />
              </span>
            </div>
            <form onSubmit={handleSearch} className="form-search-nav style-2">
              <fieldset>
                <input
                  type="text"
                  placeholder="Searching..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
              </fieldset>
              <button type="submit" className="btn-action">
                <i className="icon icon-MagnifyingGlass" />
              </button>
            </form>
            <div className="search-feature">
              <p className="h5 mb-16">Feature Keywords Today</p>
              <div className="tf-list-tag">
                <Link to="/shop/rice" className="link-tag" data-bs-dismiss="modal">Rice</Link>
                <Link to="/shop/pulses" className="link-tag" data-bs-dismiss="modal">Pulses</Link>
                <Link to="/shop/spices" className="link-tag" data-bs-dismiss="modal">Spices</Link>
                <Link to="/shop/oils" className="link-tag" data-bs-dismiss="modal">Oils</Link>
              </div>
            </div>
            <div className="recently-view">
              <p className="h5 mb-16">Recently Viewed Products</p>
              <div
                dir="ltr"
                className="swiper tf-swiper mb-24"
                data-preview={4}
                data-tablet={3}
                data-mobile-sm={2}
                data-mobile={2}
                data-space-lg={30}
                data-space-md={20}
                data-space={10}
                data-pagination={2}
                data-pagination-sm={2}
                data-pagination-md={3}
                data-pagination-lg={4}
              >
                <div className="swiper-wrapper">
                  {recentProducts.map((product) => (
                    <div className="swiper-slide" key={product.id}>
                      <div className="card-product">
                        <div className="card-product_wrapper square">
                          <Link to={`/product/${product.slug}`} className="product-img" data-bs-dismiss="modal">
                            <img className="img-product" loading="lazy" src={product.img} alt={product.name} />
                            <img className="img-hover" loading="lazy" src={product.hoverImg || product.img} alt={product.name} />
                          </Link>
                          <ul className="product-action_list">
                            <li className="wishlist">
                              <a href="#;" className="hover-tooltip tooltip-left box-icon">
                                <span className="icon icon-heart" />
                                <span className="tooltip">Add to Wishlist</span>
                              </a>
                            </li>
                            <li className="compare">
                              <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                                <span className="icon icon-ArrowsLeftRight" />
                                <span className="tooltip">Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#quickView"
                                data-bs-toggle="offcanvas"
                                className="hover-tooltip tooltip-left box-icon"
                                onClick={() => handleQuickView(product)}
                              >
                                <span className="icon icon-Eye" />
                                <span className="tooltip">Quick view</span>
                              </a>
                            </li>
                          </ul>
                          {product.badges && product.badges.length > 0 && (
                            <ul className="product-badge_list">
                              {product.badges.map((badge, idx) => (
                                <li key={idx} className="product-badge_item text-caption-01 fw-normal new">{badge}</li>
                              ))}
                            </ul>
                          )}
                          {product.salePercent && !product.badges?.length && (
                            <ul className="product-badge_list">
                              <li className="product-badge_item text-caption-01 fw-normal sale">-{product.salePercent}%</li>
                            </ul>
                          )}
                          <div className="product-action_bot">
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="offcanvas"
                              className="tf-btn btn-white small w-100"
                              onClick={(e) => handleAddToCart(product, e)}
                            >
                              Add to Cart
                            </a>
                          </div>
                          {product.hasMarquee && (
                            <div className="product-marquee_sale">
                              <div className="marquee-wrapper">
                                <div className="initial-child-container">
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index}>
                                      <div className="marquee-child-item">HOT SALE {product.salePercent || 25}% OFF</div>
                                      <i className="icon icon-Star2" />
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          {product.hasCountdown && (
                            <div className="product-countdown">
                              <div className="js-countdown cd-has-zero" data-timer={1093120} data-labels="D : ,H : ,M : ,S"></div>
                            </div>
                          )}
                        </div>
                        <div className="card-product_info">
                          <Link to={`/product/${product.slug}`} className="name-product text-body-1 link link-underline" data-bs-dismiss="modal">
                            {product.name}
                          </Link>
                          <div className="price-wrap">
                            <span className="price-new text-primary">{formatPriceSimple(product.price)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="sw-dot-default tf-sw-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Search */}
    </>
  );
}

export default SearchModal;
