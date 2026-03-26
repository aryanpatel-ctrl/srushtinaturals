import { useParams, useOutletContext, Link } from 'react-router-dom';
import { products, getProductsByCategory } from '../data/products';
import { categories, getCategoryBySlug } from '../data/categories';
import ProductCard from '../components/common/ProductCard';

function ShopPage() {
  const { category } = useParams();
  const { onQuickView } = useOutletContext();

  const filteredProducts = getProductsByCategory(category);
  const currentCategory = category ? getCategoryBySlug(category) : null;

  return (
    <>
      {/* Page Title */}
      <div className="page-title flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-inner text-center">
                <h1 className="page-title-heading fw-medium">
                  {currentCategory ? currentCategory.name : 'All Products'}
                </h1>
                <nav className="breadcrumb-wrap" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {currentCategory ? currentCategory.name : 'Shop'}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <section className="flat-spacing pt-0">
        <div className="container">
          {/* Categories Filter */}
          <div className="mb-32">
            <div className="d-flex flex-wrap gap-8 justify-content-center">
              <Link
                to="/shop"
                className={`tf-btn ${!category ? 'animate-btn' : 'btn-stroke'} small`}
              >
                All Products
              </Link>
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  to={`/shop/${cat.slug}`}
                  className={`tf-btn ${category === cat.slug ? 'animate-btn' : 'btn-stroke'} small`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="col-6 col-sm-6 col-md-4 col-lg-3 mb-32"
                >
                  <ProductCard
                    product={product}
                    onQuickView={onQuickView}
                    showRating={true}
                    variant="popular"
                  />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-48">
                <div className="box-text_empty">
                  <span className="icon mb-16">
                    <i className="icon-MagnifyingGlass fs-48"></i>
                  </span>
                  <h4 className="mb-8">No products found</h4>
                  <p className="cl-text-2 mb-16">
                    We couldn&apos;t find any products in this category.
                  </p>
                  <Link to="/shop" className="tf-btn animate-btn">
                    View All Products
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Product Count */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-16">
              <p className="cl-text-2">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                {currentCategory && ` in ${currentCategory.name}`}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ShopPage;
