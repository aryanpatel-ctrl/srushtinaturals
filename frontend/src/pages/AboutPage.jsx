import { Link } from 'react-router-dom';
import { Bird, Leaf, Plant, OrganicBlob, CowSilhouette, SunDecor, NatureDecorationsStyles } from '../components/homeOrganic/NatureDecorations';

function AboutPage() {
  const teamMembers = [
    {
      name: 'Rajesh Patel',
      role: 'Founder & Farmer',
      image: null,
      bio: 'Third-generation farmer with a passion for organic agriculture.'
    },
    {
      name: 'Meena Patel',
      role: 'Co-Founder',
      image: null,
      bio: 'Ensures traditional recipes and methods are preserved in every product.'
    },
    {
      name: 'Amit Shah',
      role: 'Farm Manager',
      image: null,
      bio: 'Oversees daily operations and maintains our organic certifications.'
    }
  ];

  const milestones = [
    { year: '2009', title: 'The Beginning', description: 'Started with 5 acres of organic farmland in Gujarat.' },
    { year: '2012', title: 'First Products', description: 'Launched our first line of organic pulses and grains.' },
    { year: '2015', title: 'Gir Cow Dairy', description: 'Introduced traditional Bilona method ghee production.' },
    { year: '2018', title: 'Expanded Family', description: 'Reached 10,000+ happy families across India.' },
    { year: '2021', title: 'Online Store', description: 'Launched e-commerce to reach customers nationwide.' },
    { year: '2024', title: 'Growing Strong', description: 'Now serving 25,000+ families with 50+ products.' }
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
          <circle cx="24" cy="24" r="20" stroke="#103C29" strokeWidth="2" fill="#F8F4EC"/>
          <path d="M24 14V24L30 30" stroke="#103C29" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Traditional Methods',
      description: 'We honor age-old techniques passed down through generations.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
          <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="#103C29" strokeWidth="2" fill="#F8F4EC"/>
          <path d="M16 24L22 30L32 18" stroke="#103C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '100% Organic',
      description: 'No chemicals, pesticides, or artificial additives. Ever.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
          <circle cx="24" cy="20" r="8" stroke="#103C29" strokeWidth="2" fill="#F8F4EC"/>
          <path d="M12 42C12 35.4 17.4 30 24 30C30.6 30 36 35.4 36 42" stroke="#103C29" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="38" cy="16" r="5" stroke="#103C29" strokeWidth="2" fill="#F8F4EC"/>
          <circle cx="10" cy="16" r="5" stroke="#103C29" strokeWidth="2" fill="#F8F4EC"/>
        </svg>
      ),
      title: 'Farm to Family',
      description: 'Direct from our farm to your table, no middlemen.'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
          <path d="M24 44C24 44 40 32 40 20C40 11.2 32.8 4 24 4C15.2 4 8 11.2 8 20C8 32 24 44 24 44Z" stroke="#103C29" strokeWidth="2" fill="#F8F4EC"/>
          <circle cx="24" cy="20" r="6" stroke="#103C29" strokeWidth="2"/>
        </svg>
      ),
      title: 'Sustainable Farming',
      description: 'We care for the earth as much as we care for you.'
    }
  ];

  return (
    <>
      <NatureDecorationsStyles />

      {/* Hero Section */}
      <section className="about-hero" style={{
        background: 'linear-gradient(135deg, #103C29 0%, #1a5c3f 100%)',
        padding: '80px 0 120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="section-tagline" style={{ color: '#FFEB8A' }}>Our Story</p>
              <h1 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(36px, 6vw, 56px)',
                color: '#fff',
                marginBottom: '24px',
                lineHeight: 1.2
              }}>
                From Our Farm <br/>
                <span style={{ color: '#FFEB8A', fontStyle: 'italic' }}>to Your Home</span>
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                For over 15 years, we've been nurturing nature's finest produce,
                bringing pure, chemical-free food from our Gujarat farm to families across India.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="#F8F4EC" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
            <path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: '#F8F4EC', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                background: 'linear-gradient(135deg, #70857A 0%, #103C29 100%)',
                borderRadius: '20px',
                height: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '20px', opacity: 0.8 }}>
                    <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <p style={{ fontSize: '18px', opacity: 0.9 }}>Farm Story Image</p>
                  <p style={{ fontSize: '14px', opacity: 0.7 }}>Replace with your farm photo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInUp animate-on-scroll" data-animate style={{ paddingLeft: '30px' }}>
                <p className="section-tagline" style={{ justifyContent: 'flex-start' }}>How It All Began</p>
                <h2 className="section-title nature-style">
                  A Dream Rooted in <span>Tradition</span>
                </h2>
                <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  In 2009, Rajesh Patel inherited 5 acres of ancestral land in Gujarat. Instead of
                  following modern intensive farming, he chose to revive the traditional organic
                  methods his grandfather used.
                </p>
                <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  What started as a small experiment grew into a mission. Today, Srushti Naturals
                  spans over 50 acres of certified organic farmland, home to heritage Gir cows,
                  ancient grain varieties, and a team dedicated to bringing you nature's purest gifts.
                </p>
                <p style={{ color: '#555', lineHeight: 1.8 }}>
                  Every product carries our family's commitment to quality, sustainability, and the
                  belief that food should nourish both body and soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp animate-on-scroll" data-animate>
            <p className="section-tagline">What We Stand For</p>
            <h2 className="section-title nature-style">Our <span>Values</span></h2>
          </div>

          <div className="row stagger-children">
            {values.map((value, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card-hover-lift" style={{
                  background: '#F8F4EC',
                  borderRadius: '16px',
                  padding: '30px',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ marginBottom: '20px' }}>{value.icon}</div>
                  <h4 style={{ color: '#103C29', marginBottom: '12px', fontSize: '18px' }}>{value.title}</h4>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp animate-on-scroll" data-animate>
            <p className="section-tagline">Our Journey</p>
            <h2 className="section-title nature-style">Milestones Along <span>the Way</span></h2>
          </div>

          <div className="timeline-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'linear-gradient(to bottom, #103C29, #70857A)',
              display: 'none'
            }} className="d-none d-md-block" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="wow fadeInUp animate-on-scroll"
                data-animate
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '40px',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                <div style={{ flex: 1, padding: '0 30px', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <span style={{
                    display: 'inline-block',
                    background: '#103C29',
                    color: '#FFEB8A',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {milestone.year}
                  </span>
                  <h4 style={{ color: '#103C29', marginBottom: '8px' }}>{milestone.title}</h4>
                  <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>{milestone.description}</p>
                </div>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#103C29',
                  border: '4px solid #F8F4EC',
                  boxShadow: '0 0 0 2px #103C29',
                  flexShrink: 0
                }} className="d-none d-md-block" />
                <div style={{ flex: 1 }} className="d-none d-md-block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp animate-on-scroll" data-animate>
            <p className="section-tagline">The People Behind</p>
            <h2 className="section-title nature-style">Meet Our <span>Team</span></h2>
          </div>

          <div className="row justify-content-center stagger-children">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card-hover-lift" style={{
                  background: '#F8F4EC',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textAlign: 'center'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #70857A 0%, #103C29 100%)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: '600'
                  }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h4 style={{ color: '#103C29', marginBottom: '4px' }}>{member.name}</h4>
                    <p style={{ color: '#70857A', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                      {member.role}
                    </p>
                    <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #103C29 0%, #1a5c3f 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 style={{ color: '#fff', marginBottom: '16px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
                Ready to Taste the Difference?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '32px', fontSize: '18px' }}>
                Experience the purity of farm-fresh organic products.
              </p>
              <div className="d-flex flex-wrap gap-12 justify-content-center">
                <Link to="/shop" className="tf-btn btn-white animate-btn">
                  Shop Now
                </Link>
                <Link to="/contact" className="tf-btn" style={{
                  background: 'transparent',
                  border: '2px solid #fff',
                  color: '#fff'
                }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
