import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs, getAllCategories } from '../data/blogs';

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = getAllCategories();

  const filteredBlogs = activeCategory
    ? blogs.filter(blog => blog.category === activeCategory)
    : blogs;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
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
              Our Blog
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Stories from the farm, health tips, traditional recipes, and more.
            </p>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#F8F4EC" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* Blog Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container">
          {/* Category Filter */}
          <div className="mb-4 text-center wow fadeInUp animate-on-scroll" data-animate>
            <div className="d-flex flex-wrap gap-8 justify-content-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`tf-btn ${!activeCategory ? 'animate-btn' : 'btn-stroke'} small`}
              >
                All Posts
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`tf-btn ${activeCategory === category ? 'animate-btn' : 'btn-stroke'} small`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="row">
            {filteredBlogs.map((blog, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={blog.id}>
                <article
                  className="blog-card wow fadeInUp animate-on-scroll card-hover-lift"
                  data-animate
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(16, 60, 41, 0.08)',
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Image */}
                  <Link to={`/blog/${blog.slug}`} style={{ display: 'block', overflow: 'hidden' }}>
                    <div style={{
                      height: '200px',
                      background: `linear-gradient(135deg, #70857A 0%, #103C29 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      position: 'relative',
                      transition: 'transform 0.4s ease'
                    }}>
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '8px', opacity: 0.8 }}>
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M9 21V9" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>Blog Image</p>
                      </div>
                      {/* Category Badge */}
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: '#FFEB8A',
                        color: '#103C29',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        {blog.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Meta */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '13px',
                      color: '#70857A'
                    }}>
                      <span>{formatDate(blog.date)}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{ marginBottom: '12px', fontSize: '18px' }}>
                      <Link
                        to={`/blog/${blog.slug}`}
                        style={{
                          color: '#103C29',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#70857A'}
                        onMouseLeave={(e) => e.target.style.color = '#103C29'}
                      >
                        {blog.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p style={{
                      color: '#666',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: '16px'
                    }}>
                      {blog.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '16px',
                      borderTop: '1px solid #f0f0f0'
                    }}>
                      <span style={{ fontSize: '13px', color: '#666' }}>
                        By {blog.author}
                      </span>
                      <Link
                        to={`/blog/${blog.slug}`}
                        style={{
                          color: '#103C29',
                          fontSize: '14px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Read More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: '#666' }}>No posts found in this category.</p>
              <button onClick={() => setActiveCategory(null)} className="tf-btn btn-stroke small">
                View All Posts
              </button>
            </div>
          )}

          {/* Load More (placeholder) */}
          {filteredBlogs.length > 6 && (
            <div className="text-center mt-4">
              <button className="tf-btn btn-stroke">
                Load More Posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ color: '#103C29', marginBottom: '16px' }}>Stay Updated</h3>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              Subscribe to receive new articles, recipes, and farm updates in your inbox.
            </p>
            <Link to="/" className="tf-btn animate-btn">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
