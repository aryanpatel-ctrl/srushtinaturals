import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPriceSimple } from '../../utils/formatPrice';

/**
 * Reusable ProductCard component
 * Consolidates product card markup from FavoriteSection and PopularSection
 *
 * @param {Object} props
 * @param {Object} props.product - Product data object
 * @param {Function} props.onQuickView - Callback when quick view is clicked
 * @param {boolean} props.showRating - Whether to show star rating (default: false)
 * @param {string} props.variant - Card variant: 'default' | 'popular' (default: 'default')
 */
function ProductCard({ product, onQuickView, showRating = false, variant = 'default' }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1, product.sizes?.[0] || null);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    // Let Bootstrap handle the offcanvas, just call the callback
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

  // Determine badge display
  const renderBadges = () => {
    const badges = [];

    // Handle badges array
    if (product.badges && product.badges.length > 0) {
      product.badges.forEach((badge, index) => {
        badges.push(
          <li key={`badge-${index}`} className="product-badge_item text-caption-01 fw-normal new">
            {badge}
          </li>
        );
      });
    }

    // Handle sale percentage
    if (product.salePercent) {
      badges.push(
        <li key="sale" className="product-badge_item text-caption-01 fw-normal sale">
          -{product.salePercent}%
        </li>
      );
    }

    return badges.length > 0 ? (
      <ul className="product-badge_list">{badges}</ul>
    ) : null;
  };

  return (
    <div className="card-product" data-animate>
      <div className="card-product_wrapper square">
        <Link to={`/product/${product.slug}`} className="product-img">
          <img
            className="img-product"
            loading="lazy"
            src={product.img}
            alt={product.name}
          />
          <img
            className="img-hover"
            loading="lazy"
            src={product.hoverImg || product.img}
            alt={product.name}
          />
        </Link>

        <ul className="product-action_list">
          <li className="wishlist">
            <a
              href="#;"
              className={`hover-tooltip tooltip-left box-icon ${inWishlist ? 'active' : ''}`}
              onClick={handleWishlistClick}
            >
              <span className={`icon ${inWishlist ? 'icon-heart-fill' : 'icon-heart'}`}></span>
              <span className="tooltip">{inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
            </a>
          </li>
          <li className="compare">
            <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-ArrowsLeftRight"></span>
              <span className="tooltip">Compare</span>
            </a>
          </li>
          <li>
            <a
              href="#quickView"
              data-bs-toggle="offcanvas"
              className="hover-tooltip tooltip-left box-icon"
              onClick={handleQuickView}
            >
              <span className="icon icon-Eye"></span>
              <span className="tooltip">Quick view</span>
            </a>
          </li>
        </ul>

        {renderBadges()}

        <div className="product-action_bot">
          <a
            href="#shoppingCart"
            data-bs-toggle="offcanvas"
            className="tf-btn btn-white small w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </a>
        </div>

        {product.hasMarquee && (
          <div className="product-marquee_sale">
            <div className="marquee-wrapper">
              <div className="initial-child-container">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Fragment key={index}>
                    <div className="marquee-child-item">HOT SALE {product.salePercent || 25}% OFF</div>
                    <i className="icon icon-Star2"></i>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {product.hasCountdown && (
          <div className="product-countdown">
            <div className="js-countdown cd-has-zero" data-timer="1093120" data-labels="D : ,H : ,M : ,S"></div>
          </div>
        )}
      </div>

      <div className="card-product_info">
        <Link
          to={`/product/${product.slug}`}
          className={`name-product ${variant === 'popular' ? 'lh-24 fw-medium link-underline-text' : 'text-body-1 link link-underline'}`}
        >
          {product.name}
        </Link>

        {showRating && (
          <div className="star-wrap d-flex align-items-center">
            <i className="icon icon-Star"></i>
            <i className="icon icon-Star"></i>
            <i className="icon icon-Star"></i>
            <i className="icon icon-Star"></i>
            <i className="icon icon-Star"></i>
          </div>
        )}

        <div className="price-wrap">
          <span className={`price-new text-primary ${variant === 'popular' ? 'fw-semibold' : ''}`}>
            {formatPriceSimple(product.price)}
          </span>
          {product.oldPrice && (
            <span className={`price-old text-caption-01 ${variant === 'popular' ? 'cl-text-3' : 'cl-text-2'}`}>
              {formatPriceSimple(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
