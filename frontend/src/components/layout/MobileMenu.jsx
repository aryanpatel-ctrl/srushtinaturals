import { Link } from 'react-router-dom';
import { navCategories } from '../../data/categories';

function MobileMenu() {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <div className="canvas-header">
        <span className="icon-close-popup" data-bs-dismiss="offcanvas">
          <i className="icon icon-X2"></i>
        </span>
        <form className="form-search-nav">
          <fieldset>
            <input type="text" placeholder="What are you looking for?" required />
          </fieldset>
          <button type="submit" className="btn-action">
            <i className="icon icon-MagnifyingGlass"></i>
          </button>
        </form>
      </div>
      <div className="canvas-body">
        <div className="mb-content-top">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">
              <Link to="/" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link to="/shop" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>Shop</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <a href="#categories-collapse" className="tf-btn-nav mb-menu-link" data-bs-toggle="collapse">
                <span>Categories</span>
                <i className="icon icon-CaretDown"></i>
              </a>
              <div id="categories-collapse" className="collapse">
                <ul className="sub-nav-menu">
                  {navCategories.map(cat => (
                    <li key={cat.id}>
                      <Link
                        to={`/shop/${cat.slug}`}
                        className="sub-nav-link"
                        data-bs-dismiss="offcanvas"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <Link to="/blog" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>Blog</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link to="/about" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>About Us</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link to="/contact" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link to="/faq" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>FAQs</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link to="/track-order" className="tf-btn-nav mb-menu-link" data-bs-dismiss="offcanvas">
                <span>Track Order</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="need-help-wrap">
          <p className="nd-title h6 fw-medium mb-16">Need Help?</p>
          <p className="lh-26 cl-text-2 mb-4">
            Opp Kargil Petrol Pump Near Gujarat High Court, 3GGG+563, Sarkhej - Gandhinagar Hwy, Vishwas City 1, Sola, Ahmedabad, Gujarat 380061, India
          </p>
          <a
            href="https://www.google.com/maps?q=Opp+Kargil+Petrol+Pump+Near+Gujarat+High+Court,+3GGG%2B563,+Sarkhej+-+Gandhinagar+Hwy,+Vishwas+City+1,+Sola,+Ahmedabad,+Gujarat+380061,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-underline text-primary lh-26 mb-16"
          >
            Open in Maps
          </a>
          <a href="mailto:hi@srushtinaturals.com" className="cl-text-2 link mb-8">
            hi@srushtinaturals.com
          </a>
          <a href="tel:+919998250088" className="cl-text-2 link">
            +91 9998250088
          </a>
        </div>
      </div>
      <div className="canvas-footer">
        <div className="d-flex justify-content-center">
          <div className="tf-languages">
            <select className="tf-dropdown-select style-default type-languages" defaultValue="English">
              <option value="English">English</option>
              <option value="Gujarati">Gujarati</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
