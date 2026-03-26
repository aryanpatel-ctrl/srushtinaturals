import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Visit Us',
      details: ['Srushti Naturals Farm', 'Village Vadod, Taluka Mangrol', 'District Junagadh, Gujarat 362225']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      title: 'Call Us',
      details: ['+91 9998250088', '+91 9876543210', 'Mon-Sat: 9AM - 7PM']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Us',
      details: ['hi@srushtinaturals.com', 'orders@srushtinaturals.com', 'We reply within 24 hours']
    }
  ];

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
              Get in Touch
            </h1>
            <nav className="breadcrumb-wrap" aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center" style={{ background: 'none' }}>
                <li className="breadcrumb-item">
                  <Link to="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
                </li>
                <li className="breadcrumb-item active" style={{ color: '#FFEB8A' }}>Contact</li>
              </ol>
            </nav>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#F8F4EC" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section style={{ backgroundColor: '#F8F4EC', padding: '60px 0' }}>
        <div className="container">
          <div className="row stagger-children">
            {contactInfo.map((info, index) => (
              <div className="col-md-4 mb-4 mb-md-0" key={index}>
                <div className="card-hover-lift wow fadeInUp animate-on-scroll" data-animate style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(16, 60, 41, 0.08)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #103C29, #70857A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: '#fff'
                  }}>
                    {info.icon}
                  </div>
                  <h4 style={{ color: '#103C29', marginBottom: '16px' }}>{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} style={{ color: '#666', margin: '4px 0', fontSize: '14px' }}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="wow fadeInUp animate-on-scroll" data-animate>
                <p className="section-tagline" style={{ justifyContent: 'flex-start' }}>Send a Message</p>
                <h2 className="section-title nature-style">
                  We'd Love to <span>Hear From You</span>
                </h2>
                <p style={{ color: '#666', marginBottom: '30px' }}>
                  Have questions about our products, bulk orders, or just want to say hello?
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div style={{
                    background: '#d4edda',
                    border: '1px solid #c3e6cb',
                    borderRadius: '12px',
                    padding: '30px',
                    textAlign: 'center'
                  }}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '16px' }}>
                      <circle cx="12" cy="12" r="10" stroke="#103C29" strokeWidth="2" fill="#d4edda"/>
                      <path d="M8 12L11 15L16 9" stroke="#103C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h4 style={{ color: '#103C29', marginBottom: '8px' }}>Message Sent!</h4>
                    <p style={{ color: '#666', margin: 0 }}>
                      Thank you for reaching out. We'll respond to your inquiry soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#333' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '15px',
                            transition: 'border-color 0.3s ease'
                          }}
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#333' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '15px'
                          }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#333' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '15px'
                          }}
                          placeholder="+91 9999999999"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#333' }}>
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '15px',
                            background: '#fff'
                          }}
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Related</option>
                          <option value="bulk">Bulk Order</option>
                          <option value="feedback">Feedback</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#333' }}>
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '15px',
                          resize: 'vertical'
                        }}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="tf-btn animate-btn"
                      disabled={isLoading}
                      style={{ minWidth: '200px' }}
                    >
                      {isLoading ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="30 60" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="wow fadeInUp animate-on-scroll" data-animate style={{ height: '100%', minHeight: '400px' }}>
                {/* Map Placeholder */}
                <div style={{
                  background: '#F8F4EC',
                  borderRadius: '16px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '40px'
                }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '20px', color: '#70857A' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <h4 style={{ color: '#103C29', marginBottom: '8px' }}>Our Farm Location</h4>
                  <p style={{ color: '#666', textAlign: 'center', marginBottom: '20px' }}>
                    Village Vadod, Taluka Mangrol<br/>
                    District Junagadh, Gujarat 362225
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-btn btn-stroke small"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section style={{ padding: '60px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container">
          <div className="text-center">
            <h3 style={{ color: '#103C29', marginBottom: '16px' }}>Have Questions?</h3>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              Check out our frequently asked questions for quick answers.
            </p>
            <Link to="/faq" className="tf-btn animate-btn">
              View FAQs
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #103C29 !important;
          box-shadow: 0 0 0 3px rgba(16, 60, 41, 0.1);
        }
      `}</style>
    </>
  );
}

export default ContactPage;
