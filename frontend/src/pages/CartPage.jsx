import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPriceSimple } from '../utils/formatPrice';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

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
              Shopping Cart
            </h1>
            <nav className="breadcrumb-wrap" aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center" style={{ background: 'none' }}>
                <li className="breadcrumb-item">
                  <Link to="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
                </li>
                <li className="breadcrumb-item active" style={{ color: '#FFEB8A' }}>Cart</li>
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

      {/* Cart Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="container">
          {cart.length === 0 ? (
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
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              </div>
              <h3 style={{ color: '#103C29', marginBottom: '12px' }}>Your Cart is Empty</h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/shop" className="tf-btn animate-btn">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="row">
              {/* Cart Items */}
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="wow fadeInUp animate-on-scroll" data-animate>
                  {/* Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '3fr 1fr 1fr 1fr auto',
                    gap: '16px',
                    padding: '16px 0',
                    borderBottom: '2px solid #103C29',
                    fontWeight: '600',
                    color: '#103C29'
                  }} className="d-none d-md-grid">
                    <span>Product</span>
                    <span className="text-center">Price</span>
                    <span className="text-center">Quantity</span>
                    <span className="text-center">Total</span>
                    <span></span>
                  </div>

                  {/* Cart Items */}
                  {cart.map((item, index) => (
                    <div
                      key={`${item.id}-${item.selectedSize || ''}`}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '3fr 1fr 1fr 1fr auto',
                        gap: '16px',
                        padding: '24px 0',
                        borderBottom: '1px solid #e0e0e0',
                        alignItems: 'center'
                      }}
                      className="cart-item-grid"
                    >
                      {/* Product */}
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Link to={`/product/${item.slug}`}>
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '8px'
                            }}
                          />
                        </Link>
                        <div>
                          <Link
                            to={`/product/${item.slug}`}
                            style={{
                              color: '#103C29',
                              fontWeight: '600',
                              textDecoration: 'none',
                              display: 'block',
                              marginBottom: '4px'
                            }}
                          >
                            {item.name}
                          </Link>
                          {item.selectedSize && (
                            <span style={{ color: '#666', fontSize: '13px' }}>
                              Size: {item.selectedSize}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <span className="d-md-none" style={{ color: '#666', fontSize: '12px' }}>Price: </span>
                        {formatPriceSimple(item.price)}
                      </div>

                      {/* Quantity */}
                      <div className="text-center">
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          overflow: 'hidden'
                        }}>
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.selectedSize)}
                            style={{
                              width: '32px',
                              height: '32px',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            -
                          </button>
                          <span style={{
                            width: '40px',
                            textAlign: 'center',
                            fontWeight: '600'
                          }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            style={{
                              width: '32px',
                              height: '32px',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="text-center" style={{ fontWeight: '600', color: '#103C29' }}>
                        <span className="d-md-none" style={{ color: '#666', fontSize: '12px', fontWeight: 'normal' }}>Total: </span>
                        {formatPriceSimple(item.price * item.quantity)}
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: '#fff',
                          border: '1px solid #e0e0e0',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        title="Remove"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC4646" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  ))}

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '24px',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    <Link to="/shop" className="tf-btn btn-stroke small">
                      ← Continue Shopping
                    </Link>
                    <button onClick={clearCart} className="tf-btn btn-stroke small">
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                  background: '#F8F4EC',
                  borderRadius: '16px',
                  padding: '24px',
                  position: 'sticky',
                  top: '120px'
                }}>
                  <h4 style={{ color: '#103C29', marginBottom: '24px' }}>Order Summary</h4>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      color: '#666'
                    }}>
                      <span>Subtotal ({cart.length} items)</span>
                      <span>{formatPriceSimple(subtotal)}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      color: '#666'
                    }}>
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : formatPriceSimple(shipping)}</span>
                    </div>
                    {shipping > 0 && (
                      <p style={{
                        fontSize: '12px',
                        color: '#70857A',
                        background: '#fff',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        marginBottom: '12px'
                      }}>
                        Add {formatPriceSimple(500 - subtotal)} more for FREE shipping!
                      </p>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '2px solid #103C29',
                    marginBottom: '24px'
                  }}>
                    <span style={{ fontWeight: '600', color: '#103C29', fontSize: '18px' }}>Total</span>
                    <span style={{ fontWeight: '600', color: '#103C29', fontSize: '18px' }}>{formatPriceSimple(total)}</span>
                  </div>

                  <Link to="/checkout" className="tf-btn animate-btn" style={{ width: '100%', marginBottom: '12px' }}>
                    Proceed to Checkout
                  </Link>

                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#666' }}>
                      Secure checkout with SSL encryption
                    </span>
                  </div>

                  {/* Payment Icons */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    <span style={{ fontSize: '24px' }}>💳</span>
                    <span style={{ fontSize: '24px' }}>📱</span>
                    <span style={{ fontSize: '24px' }}>🏦</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .cart-item-grid {
            display: flex !important;
            flex-wrap: wrap;
            gap: 12px !important;
          }
          .cart-item-grid > *:first-child {
            flex: 0 0 100%;
          }
          .cart-item-grid > *:not(:first-child) {
            flex: 1;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
}

export default CartPage;
