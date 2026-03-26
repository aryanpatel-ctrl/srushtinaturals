import { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = [
    {
      category: 'Products & Quality',
      faqs: [
        {
          question: 'Are your products 100% organic?',
          answer: 'Yes, all our products are 100% certified organic. We follow strict organic farming practices without using any synthetic pesticides, herbicides, or chemical fertilizers. Our farm is certified by authorized organic certification bodies in India.'
        },
        {
          question: 'What makes your Gir Cow Ghee special?',
          answer: 'Our Gir Cow Ghee is made using the traditional Bilona method, where curd is hand-churned to extract butter, which is then slow-cooked to make ghee. This process preserves the natural nutrients and gives the ghee its distinctive aroma and golden color. We use milk from our own free-grazing Gir cows.'
        },
        {
          question: 'How do you ensure product freshness?',
          answer: 'We process products in small batches to maintain freshness. Most products are processed within 24-48 hours of harvest. We use food-grade packaging that protects against moisture and light, and clearly label manufacturing and expiry dates.'
        },
        {
          question: 'Do your products contain any preservatives?',
          answer: 'No, we never add any artificial preservatives, colors, or flavors to our products. Our products are 100% natural. We rely on traditional preservation methods and proper packaging to maintain shelf life.'
        }
      ]
    },
    {
      category: 'Orders & Shipping',
      faqs: [
        {
          question: 'What are your shipping charges?',
          answer: 'We offer FREE shipping on all orders above ₹500. For orders below ₹500, a flat shipping fee of ₹50 applies. We deliver across India through trusted courier partners.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery typically takes 3-7 business days depending on your location. Metro cities usually receive orders within 3-4 days, while other areas may take 5-7 days. You\'ll receive tracking information once your order ships.'
        },
        {
          question: 'Do you deliver to my area?',
          answer: 'We deliver to most pin codes across India. Enter your pin code at checkout to verify delivery availability. If your area is not serviceable, please contact us - we may be able to arrange special delivery.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order is shipped, you\'ll receive an email and SMS with tracking details. You can also track your order through the "Track Order" page on our website using your order number.'
        }
      ]
    },
    {
      category: 'Returns & Refunds',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We accept returns within 7 days of delivery for damaged, defective, or incorrect products. Food items cannot be returned once opened due to hygiene reasons. Please report any issues within 24 hours of receiving your order with photos.'
        },
        {
          question: 'How do I request a refund?',
          answer: 'Contact our customer care team via email or phone with your order number and reason for refund. Once approved, refunds are processed within 5-7 business days to your original payment method.'
        },
        {
          question: 'What if I receive a damaged product?',
          answer: 'We\'re sorry if this happens! Please don\'t accept visibly damaged packages. If you notice damage after opening, take photos immediately and contact us within 24 hours. We\'ll arrange a replacement or full refund at no extra cost.'
        }
      ]
    },
    {
      category: 'Payment & Security',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), net banking, and Cash on Delivery (COD). For COD orders, an additional fee of ₹30 applies.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely. We use industry-standard SSL encryption for all transactions. We don\'t store your card details on our servers. All payments are processed through secure, PCI-DSS compliant payment gateways.'
        },
        {
          question: 'Do you offer bulk discounts?',
          answer: 'Yes! We offer special pricing for bulk orders (10+ items or orders above ₹5000). Contact us at bulk@srushtinaturals.com or call us to discuss wholesale and corporate gifting options.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setActiveIndex(activeIndex === key ? null : key);
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
              Frequently Asked Questions
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Find answers to common questions about our products, orders, and services.
            </p>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#fff" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* FAQ Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-5 wow fadeInUp animate-on-scroll" data-animate>
                  <h3 style={{
                    color: '#103C29',
                    marginBottom: '24px',
                    paddingBottom: '12px',
                    borderBottom: '2px solid #F8F4EC'
                  }}>
                    {category.category}
                  </h3>

                  <div className="faq-accordion">
                    {category.faqs.map((faq, faqIndex) => {
                      const isActive = activeIndex === `${categoryIndex}-${faqIndex}`;
                      return (
                        <div
                          key={faqIndex}
                          style={{
                            marginBottom: '12px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                            style={{
                              width: '100%',
                              padding: '20px 24px',
                              background: isActive ? '#F8F4EC' : '#fff',
                              border: 'none',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'background 0.3s ease'
                            }}
                          >
                            <span style={{
                              fontWeight: '600',
                              color: '#103C29',
                              fontSize: '16px',
                              paddingRight: '20px'
                            }}>
                              {faq.question}
                            </span>
                            <span style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              background: '#103C29',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              transition: 'transform 0.3s ease',
                              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </span>
                          </button>

                          <div style={{
                            maxHeight: isActive ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease'
                          }}>
                            <div style={{
                              padding: '0 24px 20px',
                              color: '#666',
                              lineHeight: 1.7
                            }}>
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section style={{ padding: '60px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container">
          <div className="text-center">
            <h3 style={{ color: '#103C29', marginBottom: '16px' }}>Still Have Questions?</h3>
            <p style={{ color: '#666', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Can't find what you're looking for? Our friendly team is here to help.
            </p>
            <div className="d-flex flex-wrap gap-12 justify-content-center">
              <Link to="/contact" className="tf-btn animate-btn">
                Contact Us
              </Link>
              <a href="https://wa.me/919998250088" target="_blank" rel="noopener noreferrer" className="tf-btn btn-stroke">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQPage;
