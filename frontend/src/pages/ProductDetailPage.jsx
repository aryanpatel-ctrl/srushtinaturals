import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getProductsByCategory } from '../data/products';
import { formatPriceSimple } from '../utils/formatPrice';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/common/ProductCard';

function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Handle product not found
  if (!product) {
    return (
      <section className="flat-spacing">
        <div className="container">
          <div className="text-center py-5">
            <div className="mb-4">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#103C29" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <h2 className="mb-3">Product Not Found</h2>
            <p className="text-muted mb-4">
              The product you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link to="/shop" className="tf-btn animate-btn">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const selectedSize = product.sizes?.[selectedSizeIndex] || null;
  const currentPrice = selectedSize?.price || product.price;
  const images = [product.img];
  if (product.hoverImg && product.hoverImg !== product.img) {
    images.push(product.hoverImg);
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  // Product features/trust badges
  const features = [
    { icon: '🌿', text: '100% Organic' },
    { icon: '🚚', text: 'Free Shipping' },
    { icon: '✓', text: 'Quality Assured' },
    { icon: '↩', text: 'Easy Returns' }
  ];

  return (
    <>
      {/* Main Product Section */}
      <section className="product-detail-section">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="product-gallery">
                {/* Main Image */}
                <div className="main-image-wrapper">
                  {product.salePercent && (
                    <span className="sale-badge">-{product.salePercent}%</span>
                  )}
                  {product.badges && product.badges.map((badge, i) => (
                    <span key={i} className="product-badge" style={{ top: `${60 + i * 35}px` }}>
                      {badge}
                    </span>
                  ))}
                  <img
                    src={images[activeImage]}
                    alt={product.name}
                    className="main-product-image"
                  />
                </div>

                {/* Thumbnail Images */}
                {images.length > 1 && (
                  <div className="thumbnail-row">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        className={`thumbnail-item ${activeImage === index ? 'active' : ''}`}
                        onClick={() => setActiveImage(index)}
                      >
                        <img src={img} alt={`${product.name} ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <div className="product-info-card">
                {/* Category */}
                <div className="product-category-tag">
                  {product.category}
                </div>

                {/* Title */}
                <h1 className="product-title">{product.name}</h1>

                {/* Rating */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star filled">★</span>
                    ))}
                  </div>
                  <span className="rating-text">5.0 (24 reviews)</span>
                </div>

                {/* Price */}
                <div className="product-price-block">
                  <span className="current-price">{formatPriceSimple(currentPrice)}</span>
                  {product.oldPrice && (
                    <span className="original-price">{formatPriceSimple(product.oldPrice)}</span>
                  )}
                  {product.salePercent && (
                    <span className="discount-badge">{product.salePercent}% OFF</span>
                  )}
                </div>

                {/* Description */}
                {product.description && (
                  <p className="product-short-desc">{product.description}</p>
                )}

                {/* Divider */}
                <hr className="product-divider" />

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="size-selection">
                    <label className="selection-label">
                      Select Size: <strong>{product.sizes[selectedSizeIndex].label}</strong>
                    </label>
                    <div className="size-options">
                      {product.sizes.map((size, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`size-btn ${selectedSizeIndex === index ? 'active' : ''}`}
                          onClick={() => setSelectedSizeIndex(index)}
                        >
                          <span className="size-label">{size.label}</span>
                          <span className="size-price">{formatPriceSimple(size.price)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Add to Cart */}
                <div className="purchase-section">
                  <div className="quantity-selector">
                    <label className="selection-label">Quantity:</label>
                    <div className="quantity-controls">
                      <button
                        className="qty-btn qty-minus"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="currentColor">
                          <rect width="14" height="2" rx="1"/>
                        </svg>
                      </button>
                      <span className="qty-value">{quantity}</span>
                      <button
                        className="qty-btn qty-plus"
                        onClick={() => handleQuantityChange(1)}
                        aria-label="Increase quantity"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                          <rect y="6" width="14" height="2" rx="1"/>
                          <rect x="6" width="2" height="14" rx="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="btn-add-cart"
                      onClick={handleAddToCart}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 01-8 0"/>
                      </svg>
                      Add to Cart
                    </a>
                    <button
                      type="button"
                      className={`btn-wishlist ${inWishlist ? 'active' : ''}`}
                      onClick={handleWishlistClick}
                      title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      {inWishlist ? '❤️' : '🤍'}
                    </button>
                  </div>

                  <a href="#" className="btn-buy-now">
                    Buy It Now
                  </a>
                </div>

                {/* Trust Features */}
                <div className="trust-features">
                  {features.map((feature, index) => (
                    <div key={index} className="trust-item">
                      <span className="trust-icon">{feature.icon}</span>
                      <span className="trust-text">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Product Meta */}
                <div className="product-meta">
                  <div className="meta-item">
                    <span className="meta-label">SKU:</span>
                    <span className="meta-value">SN-{product.id.toString().padStart(4, '0')}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Category:</span>
                    <Link to={`/shop/${product.category}`} className="meta-value meta-link">
                      {product.category}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="product-tabs-section">
        <div className="container">
          <div className="tabs-wrapper">
            <div className="tabs-nav">
              <button
                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Product Details
              </button>
              <button
                className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipping')}
              >
                Shipping & Returns
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'description' && (
                <div className="tab-panel">
                  <h4>About This Product</h4>
                  <p>{product.description || `${product.name} is a premium quality product from Srushti Naturals. Sourced directly from our organic farms, this product embodies our commitment to purity and natural goodness.`}</p>
                  <p>Every product we offer is carefully selected and processed using traditional methods to ensure you get the best nature has to offer. No chemicals, no preservatives - just pure, wholesome goodness for your family.</p>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="tab-panel">
                  <h4>Product Specifications</h4>
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>Product Name</td>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td>Origin</td>
                        <td>Gujarat, India</td>
                      </tr>
                      <tr>
                        <td>Certification</td>
                        <td>100% Organic</td>
                      </tr>
                      <tr>
                        <td>Storage</td>
                        <td>Store in a cool, dry place</td>
                      </tr>
                      <tr>
                        <td>Shelf Life</td>
                        <td>12 months from packaging</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="tab-panel">
                  <h4>Shipping Information</h4>
                  <ul className="info-list">
                    <li>Free shipping on orders above ₹500</li>
                    <li>Standard delivery: 3-5 business days</li>
                    <li>Express delivery available in select cities</li>
                    <li>Secure packaging to ensure product freshness</li>
                  </ul>
                  <h4>Return Policy</h4>
                  <ul className="info-list">
                    <li>7-day easy return policy</li>
                    <li>Full refund for damaged or incorrect products</li>
                    <li>Contact our support team for assistance</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">You May Also Like</h2>
              <Link to={`/shop/${product.category}`} className="view-all-link">
                View All →
              </Link>
            </div>

            <div className="row">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="col-6 col-md-4 col-lg-3 mb-4">
                  <ProductCard
                    product={relatedProduct}
                    showRating={true}
                    variant="popular"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Styles */}
      <style>{`
        /* Main Section */
        .product-detail-section {
          padding: 40px 0 60px;
        }

        /* Product Gallery */
        .product-gallery {
          position: sticky;
          top: 100px;
        }
        .main-image-wrapper {
          position: relative;
          background: #f8f8f8;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 16px;
          aspect-ratio: 1;
        }
        .main-product-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }
        .main-image-wrapper:hover .main-product-image {
          transform: scale(1.02);
        }
        .sale-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #DC4646;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          z-index: 2;
        }
        .product-badge {
          position: absolute;
          left: 20px;
          background: #103C29;
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
        }
        .thumbnail-row {
          display: flex;
          gap: 12px;
        }
        .thumbnail-item {
          width: 80px;
          height: 80px;
          border: 2px solid transparent;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          background: #f8f8f8;
          padding: 0;
          transition: all 0.3s ease;
        }
        .thumbnail-item:hover {
          border-color: #103C29;
        }
        .thumbnail-item.active {
          border-color: #103C29;
          box-shadow: 0 4px 12px rgba(16, 60, 41, 0.2);
        }
        .thumbnail-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Product Info Card */
        .product-info-card {
          padding-left: 30px;
        }
        @media (max-width: 991px) {
          .product-info-card {
            padding-left: 0;
          }
        }
        .product-category-tag {
          display: inline-block;
          background: #f0f7f4;
          color: #103C29;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .product-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .stars .star {
          color: #ddd;
          font-size: 16px;
        }
        .stars .star.filled {
          color: #F0A750;
        }
        .rating-text {
          color: #666;
          font-size: 14px;
        }

        /* Price */
        .product-price-block {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .current-price {
          font-size: 32px;
          font-weight: 700;
          color: #103C29;
        }
        .original-price {
          font-size: 20px;
          color: #999;
          text-decoration: line-through;
        }
        .discount-badge {
          background: #ffebee;
          color: #DC4646;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }

        .product-short-desc {
          color: #555;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .product-divider {
          border: none;
          border-top: 1px solid #eee;
          margin: 24px 0;
        }

        /* Size Selection */
        .size-selection {
          margin-bottom: 24px;
        }
        .selection-label {
          display: block;
          font-size: 14px;
          color: #333;
          margin-bottom: 12px;
        }
        .size-options {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .size-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 100px;
        }
        .size-btn:hover {
          border-color: #103C29;
        }
        .size-btn.active {
          border-color: #103C29;
          background: #f0f7f4;
        }
        .size-label {
          font-weight: 600;
          color: #333;
          font-size: 14px;
        }
        .size-price {
          font-size: 12px;
          color: #666;
          margin-top: 2px;
        }

        /* Quantity & Actions */
        .purchase-section {
          margin-bottom: 24px;
        }
        .quantity-selector {
          margin-bottom: 16px;
        }
        .quantity-controls {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          height: 50px;
        }
        .qty-btn {
          width: 50px;
          height: 100%;
          border: none;
          background: white;
          color: #333;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .qty-btn svg {
          flex-shrink: 0;
        }
        .qty-btn:hover:not(:disabled) {
          background: #f5f5f5;
        }
        .qty-btn:disabled {
          color: #ccc;
          cursor: not-allowed;
        }
        .qty-btn:disabled svg {
          opacity: 0.4;
        }
        .qty-value {
          width: 60px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
        }

        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .btn-add-cart {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          background: #103C29;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-add-cart:hover {
          background: #0d2f20;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16, 60, 41, 0.3);
        }
        .btn-wishlist {
          width: 54px;
          height: 54px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          background: white;
          font-size: 22px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-wishlist:hover {
          border-color: #DC4646;
        }
        .btn-wishlist.active {
          border-color: #DC4646;
          background: #fff5f5;
        }

        .btn-buy-now {
          display: block;
          width: 100%;
          padding: 16px;
          background: white;
          color: #103C29;
          border: 2px solid #103C29;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-buy-now:hover {
          background: #103C29;
          color: white;
        }

        /* Trust Features */
        .trust-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 20px;
          background: #f8f8f8;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .trust-icon {
          font-size: 18px;
        }
        .trust-text {
          font-size: 13px;
          color: #555;
          font-weight: 500;
        }

        /* Product Meta */
        .product-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .meta-item {
          font-size: 14px;
        }
        .meta-label {
          color: #888;
          margin-right: 8px;
        }
        .meta-value {
          color: #333;
        }
        .meta-link {
          color: #103C29;
          text-decoration: none;
        }
        .meta-link:hover {
          text-decoration: underline;
        }

        /* Tabs Section */
        .product-tabs-section {
          padding: 60px 0;
          background: #f8f8f8;
        }
        .tabs-wrapper {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }
        .tabs-nav {
          display: flex;
          border-bottom: 1px solid #eee;
          overflow-x: auto;
        }
        .tab-btn {
          flex: 1;
          padding: 18px 24px;
          border: none;
          background: none;
          font-size: 15px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
        }
        .tab-btn:hover {
          color: #103C29;
        }
        .tab-btn.active {
          color: #103C29;
        }
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #103C29;
        }
        .tabs-content {
          padding: 30px;
        }
        .tab-panel h4 {
          color: #1a1a1a;
          margin-bottom: 16px;
          font-size: 18px;
        }
        .tab-panel p {
          color: #555;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .specs-table {
          width: 100%;
          border-collapse: collapse;
        }
        .specs-table tr {
          border-bottom: 1px solid #eee;
        }
        .specs-table td {
          padding: 14px 0;
          color: #555;
        }
        .specs-table td:first-child {
          font-weight: 600;
          color: #333;
          width: 40%;
        }
        .info-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }
        .info-list li {
          padding: 10px 0 10px 28px;
          position: relative;
          color: #555;
          border-bottom: 1px solid #f0f0f0;
        }
        .info-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #103C29;
          font-weight: bold;
        }

        /* Related Products */
        .related-products-section {
          padding: 60px 0;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .section-header .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        .view-all-link {
          color: #103C29;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .view-all-link:hover {
          color: #0d2f20;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .product-detail-section {
            padding: 30px 0;
          }
          .product-title {
            font-size: 24px;
          }
          .current-price {
            font-size: 26px;
          }
          .trust-features {
            grid-template-columns: 1fr;
          }
          .tabs-nav {
            flex-wrap: nowrap;
            -webkit-overflow-scrolling: touch;
          }
          .tab-btn {
            padding: 14px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default ProductDetailPage;
