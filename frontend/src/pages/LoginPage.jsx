import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
              {isLogin ? 'Welcome Back' : 'Join Our Family'}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              {isLogin
                ? 'Sign in to access your account and orders'
                : 'Create an account to start shopping'}
            </p>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#F8F4EC" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* Login/Register Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5">
              <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 40px rgba(16, 60, 41, 0.1)'
              }}>
                {/* Toggle Tabs */}
                <div style={{
                  display: 'flex',
                  marginBottom: '32px',
                  borderRadius: '10px',
                  background: '#F8F4EC',
                  padding: '4px'
                }}>
                  <button
                    onClick={() => setIsLogin(true)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: isLogin ? '#103C29' : 'transparent',
                      color: isLogin ? '#fff' : '#666'
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: !isLogin ? '#103C29' : 'transparent',
                      color: !isLogin ? '#fff' : '#666'
                    }}
                  >
                    Register
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Name (Register only) */}
                  {!isLogin && (
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#333',
                        fontSize: '14px'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!isLogin}
                        placeholder="Enter your name"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '15px',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                    </div>
                  )}

                  {/* Email */}
                  <div style={{ marginBottom: '20px' }}>
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Phone (Register only) */}
                  {!isLogin && (
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#333',
                        fontSize: '14px'
                      }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9999999999"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                  )}

                  {/* Password */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#333',
                      fontSize: '14px'
                    }}>
                      Password *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                        style={{
                          width: '100%',
                          padding: '14px 50px 14px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '15px'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#666'
                        }}
                      >
                        {showPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password (Register only) */}
                  {!isLogin && (
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#333',
                        fontSize: '14px'
                      }}>
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required={!isLogin}
                        placeholder="Confirm your password"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                  )}

                  {/* Remember Me / Forgot Password (Login only) */}
                  {isLogin && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '24px'
                    }}>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                        Remember me
                      </label>
                      <a
                        href="#forgotPass"
                        data-bs-toggle="modal"
                        style={{ color: '#103C29', fontSize: '14px', fontWeight: '600' }}
                      >
                        Forgot Password?
                      </a>
                    </div>
                  )}

                  {/* Terms (Register only) */}
                  {!isLogin && (
                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        <input type="checkbox" required style={{ width: '16px', height: '16px', marginTop: '2px' }} />
                        <span>
                          I agree to the{' '}
                          <Link to="/terms" style={{ color: '#103C29', fontWeight: '600' }}>
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" style={{ color: '#103C29', fontWeight: '600' }}>
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="tf-btn animate-btn"
                    style={{ width: '100%', padding: '16px' }}
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                {/* Social Login */}
                <div style={{ marginTop: '32px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }} />
                    <span style={{ color: '#999', fontSize: '13px' }}>Or continue with</span>
                    <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }} />
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{
                      flex: 1,
                      padding: '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '10px',
                      background: '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </button>
                    <button style={{
                      flex: 1,
                      padding: '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '10px',
                      background: '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                  </div>
                </div>

                {/* Switch Form */}
                <p style={{
                  textAlign: 'center',
                  marginTop: '24px',
                  marginBottom: 0,
                  fontSize: '14px',
                  color: '#666'
                }}>
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#103C29',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {isLogin ? 'Register' : 'Sign In'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input:focus {
          outline: none;
          border-color: #103C29 !important;
          box-shadow: 0 0 0 3px rgba(16, 60, 41, 0.1);
        }
      `}</style>
    </>
  );
}

export default LoginPage;
