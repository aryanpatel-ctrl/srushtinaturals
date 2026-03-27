import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatPriceSimple } from '../utils/formatPrice';

function WishlistPage() {
  const { wishlistItems: wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1, product.sizes?.[0] || null);
    removeFromWishlist(product.id);
  };

  const handleAddAllToCart = () => {
    wishlist.forEach(product => {
      addToCart(product, 1, product.sizes?.[0] || null);
    });
    clearWishlist();
  };

  return (
    <>
      {/* Page Title */}
      <div className="page-title" style={{
        background: 'linear-gradient(135deg, #103C29 0%, #1a5c3f 100%)',
        padding: '60px 0 80px',
        position: 'relative'
      }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ color: '#fff', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 48px)' }}>
              My Wishlist
            </h1>
            <nav className="breadcrumb-wrap" aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center" style={{ background: 'none' }}>
                <li className="breadcrumb-item">
                  <Link to="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
                </li>
                <li className="breadcrumb-item active" style={{ color: '#FFEB8A' }}>Wishlist</li>
              </ol>
            </nav>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#fff" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* Wishlist Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="container">
          {wishlist.length === 0 ? (
            <div className="text-center py-5">
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: '#F8F4EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#70857A" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
              <h3 style={{ color: '#103C29', marginBottom: '12px' }}>Your Wishlist is Empty</h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                Save items you love to your wishlist and revisit them anytime.
              </p>
              <Link to="/shop" className="tf-btn animate-btn">
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Actions Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <p style={{ color: '#666', margin: 0 }}>
                  {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleAddAllToCart}
                    className="tf-btn animate-btn small"
                  >
                    Add All to Cart
                  </button>
                  <button
                    onClick={clearWishlist}
                    className="tf-btn btn-stroke small"
                  >
                    Clear Wishlist
                  </button>
                </div>
              </div>

              {/* Wishlist Grid */}
              <div className="row">
                {wishlist.map((product, index) => (
                  <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                    <div
                      className="wishlist-card"
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '100%',
                        boxShadow: '0 4px 20px rgba(16, 60, 41, 0.08)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {/* Image */}
                      <div style={{
                        position: 'relative',
                        aspectRatio: '1',
                        background: '#F8F4EC',
                        overflow: 'hidden'
                      }}>
                        <Link to={`/product/${product.slug}`}>
                          <img
                            src={product.img}
                            alt={product.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.4s ease'
                            }}
                          />
                        </Link>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s ease'
                          }}
                          title="Remove from Wishlist"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC4646" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                        </button>

                        {/* Sale Badge */}
                        {product.salePercent && (
                          <span style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            background: '#DC4646',
                            color: '#fff',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                            -{product.salePercent}%
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ padding: '20px' }}>
                        <Link
                          to={`/product/${product.slug}`}
                          style={{
                            color: '#103C29',
                            fontWeight: '600',
                            fontSize: '16px',
                            textDecoration: 'none',
                            display: 'block',
                            marginBottom: '10px',
                            lineHeight: 1.4
                          }}
                        >
                          {product.name}
                        </Link>

                        <div style={{ marginBottom: '16px' }}>
                          <span style={{ color: '#103C29', fontWeight: '700', fontSize: '18px' }}>
                            {formatPriceSimple(product.price)}
                          </span>
                          {product.oldPrice && (
                            <span style={{
                              color: '#999',
                              textDecoration: 'line-through',
                              marginLeft: '10px',
                              fontSize: '14px'
                            }}>
                              {formatPriceSimple(product.oldPrice)}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className="tf-btn animate-btn"
                          style={{ width: '100%', padding: '12px 20px' }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Continue Shopping */}
      <section style={{ padding: '40px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container text-center">
          <Link to="/shop" className="tf-btn btn-stroke">
            ← Continue Shopping
          </Link>
        </div>
      </section>

      <style>{`
        .wishlist-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(16, 60, 41, 0.15) !important;
        }
        .wishlist-card:hover img {
          transform: scale(1.05);
        }
        .wishlist-card button[title="Remove from Wishlist"]:hover {
          background: #DC4646 !important;
        }
        .wishlist-card button[title="Remove from Wishlist"]:hover svg {
          stroke: #fff;
        }
      `}</style>
    </>
  );
}

export default WishlistPage;
