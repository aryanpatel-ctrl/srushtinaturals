import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug, getRecentBlogs } from '../data/blogs';

function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const recentBlogs = getRecentBlogs(3).filter(b => b.slug !== slug).slice(0, 2);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  if (!blog) {
    return (
      <section style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Blog Post Not Found</h2>
          <p style={{ color: '#666', marginBottom: '24px' }}>
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/blog" className="tf-btn animate-btn">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #103C29 0%, #1a5c3f 100%)',
        padding: '80px 0 120px',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {/* Category */}
              <span style={{
                display: 'inline-block',
                background: '#FFEB8A',
                color: '#103C29',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>
                {blog.category}
              </span>

              {/* Title */}
              <h1 style={{
                color: '#fff',
                fontSize: 'clamp(28px, 5vw, 42px)',
                lineHeight: 1.3,
                marginBottom: '24px'
              }}>
                {blog.title}
              </h1>

              {/* Meta */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"/>
                  </svg>
                  {blog.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21"/>
                  </svg>
                  {formatDate(blog.date)}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6V12L16 14"/>
                  </svg>
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="#fff" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
            <path d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </div>

      {/* Blog Content */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Featured Image Placeholder */}
              <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                background: 'linear-gradient(135deg, #70857A 0%, #103C29 100%)',
                borderRadius: '16px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: '40px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '12px', opacity: 0.8 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                    <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <p style={{ opacity: 0.8 }}>Featured Image</p>
                </div>
              </div>

              {/* Article Content */}
              <article
                className="blog-content wow fadeInUp animate-on-scroll"
                data-animate
                style={{
                  fontSize: '17px',
                  lineHeight: 1.8,
                  color: '#444'
                }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: '600', color: '#103C29' }}>Tags:</span>
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        background: '#F8F4EC',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        color: '#70857A'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: '600', color: '#103C29' }}>Share:</span>
                <a href="#" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#1877f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="#" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#1da1f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </a>
              </div>

              {/* Author Box */}
              <div style={{
                marginTop: '40px',
                padding: '30px',
                background: '#F8F4EC',
                borderRadius: '16px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #70857A 0%, #103C29 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: '600',
                  flexShrink: 0
                }}>
                  {blog.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 style={{ color: '#103C29', marginBottom: '4px' }}>{blog.author}</h4>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                    Passionate about organic living and traditional wisdom. Writing to share the joy of natural, healthy food.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div style={{ position: 'sticky', top: '120px' }}>
                {/* Recent Posts */}
                <div className="wow fadeInUp animate-on-scroll" data-animate style={{
                  background: '#F8F4EC',
                  borderRadius: '16px',
                  padding: '24px',
                  marginBottom: '24px'
                }}>
                  <h4 style={{ color: '#103C29', marginBottom: '20px' }}>Recent Posts</h4>
                  {recentBlogs.map(recentBlog => (
                    <Link
                      key={recentBlog.id}
                      to={`/blog/${recentBlog.slug}`}
                      style={{
                        display: 'block',
                        padding: '16px 0',
                        borderBottom: '1px solid #e0e0e0',
                        textDecoration: 'none'
                      }}
                    >
                      <h5 style={{
                        color: '#103C29',
                        fontSize: '15px',
                        marginBottom: '4px',
                        lineHeight: 1.4
                      }}>
                        {recentBlog.title}
                      </h5>
                      <span style={{ color: '#70857A', fontSize: '12px' }}>
                        {formatDate(recentBlog.date)}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/blog"
                    style={{
                      display: 'block',
                      marginTop: '16px',
                      color: '#103C29',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    View All Posts →
                  </Link>
                </div>

                {/* CTA */}
                <div style={{
                  background: 'linear-gradient(135deg, #103C29 0%, #1a5c3f 100%)',
                  borderRadius: '16px',
                  padding: '30px',
                  textAlign: 'center',
                  color: '#fff'
                }}>
                  <h4 style={{ marginBottom: '12px' }}>Shop Our Products</h4>
                  <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px' }}>
                    Experience the purity of organic food from our farm.
                  </p>
                  <Link to="/shop" className="tf-btn btn-white small">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section style={{ padding: '40px 0', backgroundColor: '#F8F4EC' }}>
        <div className="container text-center">
          <Link to="/blog" className="tf-btn btn-stroke">
            ← Back to All Posts
          </Link>
        </div>
      </section>

      <style>{`
        .blog-content h3 {
          color: #103C29;
          margin-top: 32px;
          margin-bottom: 16px;
          font-size: 24px;
        }
        .blog-content p {
          margin-bottom: 20px;
        }
        .blog-content ul {
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .blog-content li {
          margin-bottom: 10px;
        }
        .blog-content strong {
          color: #103C29;
        }
      `}</style>
    </>
  );
}

export default BlogDetailPage;
