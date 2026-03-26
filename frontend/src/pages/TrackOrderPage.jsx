import { useState } from 'react';
import { Link } from 'react-router-dom';

function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  // Demo order data
  const demoOrder = {
    orderNumber: 'SN-2024-001234',
    date: '2024-03-20',
    status: 'shipped',
    estimatedDelivery: '2024-03-25',
    items: [
      { name: 'Pure Gir Cow Ghee (500g)', qty: 2, price: 1199 },
      { name: 'Organic Toor Dal', qty: 1, price: 180 }
    ],
    timeline: [
      { status: 'ordered', title: 'Order Placed', date: 'Mar 20, 2024 - 10:30 AM', completed: true },
      { status: 'confirmed', title: 'Order Confirmed', date: 'Mar 20, 2024 - 11:00 AM', completed: true },
      { status: 'packed', title: 'Packed', date: 'Mar 21, 2024 - 2:00 PM', completed: true },
      { status: 'shipped', title: 'Shipped', date: 'Mar 22, 2024 - 9:00 AM', completed: true, current: true },
      { status: 'delivered', title: 'Delivered', date: 'Expected: Mar 25, 2024', completed: false }
    ],
    shipping: {
      courier: 'Delhivery',
      trackingId: 'DL1234567890',
      address: 'John Doe, 123 Main Street, Mumbai, Maharashtra 400001'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      // Demo: Show order if order number contains "1234"
      if (orderNumber.toLowerCase().includes('1234')) {
        setOrderStatus(demoOrder);
      } else {
        setError('No order found with this order number. Please check and try again.');
        setOrderStatus(null);
      }
    }, 1500);
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
              Track Your Order
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              Enter your order details to see the delivery status
            </p>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#F8F4EC" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* Track Order Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Search Form */}
              <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(16, 60, 41, 0.08)',
                marginBottom: '32px'
              }}>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#333',
                      fontSize: '14px'
                    }}>
                      Order Number *
                    </label>
                    <input
                      type="text"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      required
                      placeholder="e.g., SN-2024-001234"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#333',
                      fontSize: '14px'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email used for order"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {error && (
                    <div style={{
                      background: '#ffeaea',
                      border: '1px solid #ffcccc',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      color: '#DC4646',
                      fontSize: '14px'
                    }}>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="tf-btn animate-btn"
                    style={{ width: '100%' }}
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="30 60" />
                        </svg>
                        Searching...
                      </span>
                    ) : (
                      'Track Order'
                    )}
                  </button>
                </form>

                <p style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  marginBottom: 0,
                  fontSize: '13px',
                  color: '#999'
                }}>
                  Demo: Try order number containing "1234"
                </p>
              </div>
            </div>
          </div>

          {/* Order Status */}
          {orderStatus && (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(16, 60, 41, 0.08)'
                }}>
                  {/* Order Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '32px',
                    flexWrap: 'wrap',
                    gap: '16px'
                  }}>
                    <div>
                      <h3 style={{ color: '#103C29', marginBottom: '4px' }}>
                        Order #{orderStatus.orderNumber}
                      </h3>
                      <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                        Placed on {new Date(orderStatus.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <span style={{
                      background: orderStatus.status === 'delivered' ? '#d4edda' : '#fff3cd',
                      color: orderStatus.status === 'delivered' ? '#155724' : '#856404',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'capitalize'
                    }}>
                      {orderStatus.status}
                    </span>
                  </div>

                  {/* Timeline */}
                  <div style={{ marginBottom: '32px' }}>
                    <h4 style={{ color: '#103C29', marginBottom: '24px', fontSize: '16px' }}>
                      Delivery Status
                    </h4>
                    <div style={{ position: 'relative' }}>
                      {orderStatus.timeline.map((step, index) => (
                        <div
                          key={step.status}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            marginBottom: index < orderStatus.timeline.length - 1 ? '32px' : 0,
                            position: 'relative'
                          }}
                        >
                          {/* Line */}
                          {index < orderStatus.timeline.length - 1 && (
                            <div style={{
                              position: 'absolute',
                              left: '15px',
                              top: '32px',
                              bottom: '-32px',
                              width: '2px',
                              background: step.completed ? '#103C29' : '#e0e0e0'
                            }} />
                          )}

                          {/* Dot */}
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: step.completed ? '#103C29' : '#e0e0e0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginRight: '16px',
                            position: 'relative',
                            zIndex: 1
                          }}>
                            {step.completed ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                <path d="M20 6L9 17L4 12"/>
                              </svg>
                            ) : (
                              <div style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#999'
                              }} />
                            )}
                          </div>

                          {/* Content */}
                          <div style={{ flex: 1 }}>
                            <h5 style={{
                              color: step.completed ? '#103C29' : '#999',
                              marginBottom: '4px',
                              fontSize: '15px',
                              fontWeight: step.current ? '700' : '600'
                            }}>
                              {step.title}
                              {step.current && (
                                <span style={{
                                  marginLeft: '8px',
                                  background: '#FFEB8A',
                                  color: '#103C29',
                                  padding: '2px 8px',
                                  borderRadius: '4px',
                                  fontSize: '11px'
                                }}>
                                  Current
                                </span>
                              )}
                            </h5>
                            <p style={{
                              color: '#666',
                              margin: 0,
                              fontSize: '13px'
                            }}>
                              {step.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div style={{
                    background: '#F8F4EC',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '24px'
                  }}>
                    <h4 style={{ color: '#103C29', marginBottom: '16px', fontSize: '16px' }}>
                      Shipping Details
                    </h4>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      <div>
                        <span style={{ color: '#666', fontSize: '13px' }}>Courier:</span>
                        <span style={{ color: '#103C29', fontWeight: '600', marginLeft: '8px' }}>
                          {orderStatus.shipping.courier}
                        </span>
                      </div>
                      <div>
                        <span style={{ color: '#666', fontSize: '13px' }}>Tracking ID:</span>
                        <span style={{ color: '#103C29', fontWeight: '600', marginLeft: '8px' }}>
                          {orderStatus.shipping.trackingId}
                        </span>
                      </div>
                      <div>
                        <span style={{ color: '#666', fontSize: '13px' }}>Delivery Address:</span>
                        <p style={{ color: '#103C29', margin: '4px 0 0', fontSize: '14px' }}>
                          {orderStatus.shipping.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h4 style={{ color: '#103C29', marginBottom: '16px', fontSize: '16px' }}>
                      Order Items
                    </h4>
                    {orderStatus.items.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '12px 0',
                          borderBottom: index < orderStatus.items.length - 1 ? '1px solid #e0e0e0' : 'none'
                        }}
                      >
                        <span style={{ color: '#333' }}>
                          {item.name} × {item.qty}
                        </span>
                        <span style={{ color: '#103C29', fontWeight: '600' }}>
                          ₹{(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section style={{ padding: '40px 0', backgroundColor: '#fff' }}>
        <div className="container text-center">
          <p style={{ color: '#666', marginBottom: '16px' }}>
            Need help with your order?
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="tf-btn btn-stroke small">
              Contact Support
            </Link>
            <a href="https://wa.me/919998250088" target="_blank" rel="noopener noreferrer" className="tf-btn btn-stroke small">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input:focus {
          outline: none;
          border-color: #103C29 !important;
          box-shadow: 0 0 0 3px rgba(16, 60, 41, 0.1);
        }
      `}</style>
    </>
  );
}

export default TrackOrderPage;
