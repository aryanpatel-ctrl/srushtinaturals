import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { navCategories } from '../../data/categories';
import { formatPriceSimple } from '../../utils/formatPrice';

function Header({ onQuickView }) {
  const { cartCount } = useCart();

  // Get featured products for mega menu
  const megaMenuProducts = products.filter(p =>
    ['kalanamak-rice', 'ponmani-rice', 'sesame-oil'].includes(p.id)
  );

  // Group products by category for mega menu
  const riceProducts = products.filter(p => p.category === 'rice');
  const pulsesAndSpices = products.filter(p => ['pulses', 'spices'].includes(p.category));
  const otherProducts = products.filter(p => !['rice', 'pulses', 'spices'].includes(p.category));

  return (
    <header className="tf-header header-abs-2 scr-box-shadow">
      <div className="container">
        <div className="header-inner">
          <div className="box-open-menu-mobile d-xl-none">
            <a href="#mobileMenu" data-bs-toggle="offcanvas" className="btn-open-menu">
              <i className="icon icon-List" />
            </a>
          </div>
          <div className="header-left">
            <Link to="/" className="logo-site">
              <img loading="lazy" width={200} height={42} src="/assets/images/logo/logodark.png" alt="Srushti Natural's" />
            </Link>
          </div>
          <div className="header-center d-none d-xl-block">
            <nav className="box-navigation">
              <ul className="box-nav-menu">
                <li className="menu-item">
                  <Link to="/" className="item-link">
                    <span className="text cus-text">Home</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/shop" className="item-link">
                    <span className="text cus-text">Shop</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <a href="#" className="item-link">
                    <span className="text cus-text">Product</span>
                    <i className="icon icon-CaretDown" />
                  </a>
                  <div className="sub-menu mega-menu">
                    <div className="container">
                      <div className="row">
                        <div className="col-2 ms-auto">
                          <div className="mega-menu-item menu-lv-2">
                            <p className="menu-heading">CATEGORIES</p>
                            <ul className="sub-menu_list">
                              {navCategories.map(cat => (
                                <li key={cat.id}>
                                  <Link to={`/shop/${cat.slug}`} className="sub-menu_link has-text">
                                    <span className="cus-text">{cat.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="mega-menu-item menu-lv-2">
                            <p className="menu-heading">RICE PRODUCTS</p>
                            <ul className="sub-menu_list">
                              {riceProducts.slice(0, 5).map(product => (
                                <li key={product.id}>
                                  <Link to={`/product/${product.slug}`} className="sub-menu_link has-text">
                                    <span className="cus-text">{product.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="mega-menu-item menu-lv-2">
                            <p className="menu-heading">PULSES & SPICES</p>
                            <ul className="sub-menu_list">
                              {pulsesAndSpices.slice(0, 5).map(product => (
                                <li key={product.id}>
                                  <Link to={`/product/${product.slug}`} className="sub-menu_link has-text">
                                    <span className="cus-text">{product.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="mega-menu-item menu-lv-2">
                            <p className="menu-heading">MORE PRODUCTS</p>
                            <ul className="sub-menu_list">
                              {otherProducts.slice(0, 5).map(product => (
                                <li key={product.id}>
                                  <Link to={`/product/${product.slug}`} className="sub-menu_link has-text">
                                    <span className="cus-text">{product.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-4 me-auto">
                          <div dir="ltr" className="swiper tf-swiper" data-preview={2} data-tablet={2} data-mobile-sm={2} data-mobile={2} data-space={10} data-pagination={2} data-pagination-sm={2} data-pagination-md={2} data-pagination-lg={2}>
                            <div className="swiper-wrapper">
                              {megaMenuProducts.map(product => (
                                <div className="swiper-slide" key={product.id}>
                                  <div className="card-product">
                                    <div className="card-product_wrapper">
                                      <Link to={`/product/${product.slug}`} className="product-img">
                                        <img className="img-product" loading="lazy" width={330} height={440} src={product.img} alt={product.name} />
                                        <img className="img-hover" loading="lazy" width={330} height={440} src={product.hoverImg || product.img} alt={product.name} />
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
                                            onClick={() => onQuickView?.({
                                              name: product.name,
                                              img: product.img,
                                              hover: product.hoverImg,
                                              price: formatPriceSimple(product.price),
                                              sale: product.salePercent ? `-${product.salePercent}%` : null
                                            })}
                                          >
                                            <span className="icon icon-Eye" />
                                            <span className="tooltip">Quick view</span>
                                          </a>
                                        </li>
                                      </ul>
                                      {product.badges && product.badges.length > 0 && (
                                        <ul className="product-badge_list">
                                          <li className="product-badge_item text-caption-01 new">
                                            {product.badges[0]}
                                          </li>
                                        </ul>
                                      )}
                                      {product.salePercent && (
                                        <ul className="product-badge_list">
                                          <li className="product-badge_item text-caption-01 sale">
                                            -{product.salePercent}%
                                          </li>
                                        </ul>
                                      )}
                                      <div className="product-action_bot">
                                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn btn-white small w-100">
                                          Add to cart
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
                                    </div>
                                    <div className="card-product_info">
                                      <Link to={`/product/${product.slug}`} className="name-product lh-24 fw-medium link-underline-text">
                                        {product.name}
                                      </Link>
                                      <div className="star-wrap d-flex align-items-center">
                                        <i className="icon icon-Star" />
                                        <i className="icon icon-Star" />
                                        <i className="icon icon-Star" />
                                        <i className="icon icon-Star" />
                                        <i className="icon icon-Star" />
                                      </div>
                                      <div className="price-wrap">
                                        <span className="price-new text-primary fw-semibold">{formatPriceSimple(product.price)}</span>
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
                </li>
                <li className="menu-item">
                  <Link to="/blog" className="item-link">
                    <span className="text cus-text">Blog</span>
                  </Link>
                </li>
                <li className="menu-item position-relative">
                  <a href="#" className="item-link">
                    <span className="text cus-text">Pages</span>
                    <i className="icon icon-CaretDown" />
                  </a>
                  <div className="sub-menu mega-menu-item">
                    <ul className="sub-menu_list">
                      <li>
                        <Link to="/about" className="sub-menu_link has-text">
                          <span className="cus-text">About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="sub-menu_link has-text">
                          <span className="cus-text">Contact Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq" className="sub-menu_link has-text">
                          <span className="cus-text">FAQs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/track-order" className="sub-menu_link has-text">
                          <span className="cus-text">Track Order</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist" className="sub-menu_link has-text">
                          <span className="cus-text">Wishlist</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart" className="sub-menu_link has-text">
                          <span className="cus-text">Cart</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <ul className="nav-icon-list">
              <li className="d-none d-sm-block">
                <a href="#search" data-bs-toggle="modal" className="nav-icon-item link">
                  <i className="icon icon-MagnifyingGlass" />
                </a>
              </li>
              <li>
                <a href="#sign" data-bs-toggle="modal" className="nav-icon-item link">
                  <i className="icon icon-User" />
                </a>
              </li>
              <li className="d-none d-sm-block">
                <Link to="/wishlist" className="nav-icon-item link">
                  <i className="icon icon-HeartStraight" />
                </Link>
              </li>
              <li>
                <a href="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item link shop-cart">
                  <i className="icon icon-Handbag" />
                  <span className="count">{cartCount}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
