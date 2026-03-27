function QuickViewOffcanvas({ product }) {
  const currentProduct = product || {
    name: "Basmati Rice",
    category: "Organic",
    img: "/assets/images/product/basmati-rice.webp",
    hover: "/assets/images/product/basmati-rice-h.webp",
    price: "\u20B9320.00",
        sale: "-25%"
  };

  return (
    <>
{/* Quick View */}
<div className="offcanvas offcanvas-end canvas-quickview" id="quickView">
  <div className="mini-quick-image">
    <div className="wrap-quick">
      <div className="image">
        <img loading="lazy" src={currentProduct.img} alt={currentProduct.name} />
      </div>
      <div className="image">
        <img loading="lazy" src={currentProduct.hover || currentProduct.img} alt={currentProduct.name} />
      </div>
      <div className="image">
        <img loading="lazy" src={currentProduct.img} alt={currentProduct.name} />
      </div>
    </div>
  </div>
  <div className="wrap-canvas">
    <div className="canvas-header ps-md-0">
      <h5 className="title-pop">Quick View</h5>
      <span className="icon-close-popup" data-bs-dismiss="offcanvas">
        <i className="icon icon-X2" />
      </span>
    </div>
    <div className="canvas-body ps-md-0">
      <div className="tf-product-quick_view tf-quick-prd_variant">
        <div className="tf-product-info-heading">
          <p className="product-infor-cate text-caption-01 mb-4">
            {currentProduct.category || "Organic"}
          </p>
          <h3 className="product-infor-name mb-12 letter-space-0">
            {currentProduct.name}
          </h3>
          <div className="product-infor-meta mb-20">
            <div className="meta_rate">
              <div className="star-wrap normal d-flex align-items-center">
                <i className="icon icon-Star" />
                <i className="icon icon-Star" />
                <i className="icon icon-Star" />
                <i className="icon icon-Star" />
                <i className="icon icon-Star" />
              </div>
              <span className="text-caption-01 cl-text-2">
                (134 reviews)
              </span>
            </div>
            <div className="br-line type-vertical" />
            <div className="meta_sold">
              <i className="icon icon-Lightning text-primary" />
              <span className="text-caption-01 cl-text-2">18&nbsp;sold in last&nbsp;32&nbsp;hours</span>
            </div>
          </div>
          <div className="product-infor-price mb-12">
            <h4 className="price-on-sale">{currentProduct.price || "\u20B9320.00"}</h4>
            {currentProduct.oldPrice && (
              <>
                <div className="br-line type-vertical" />
                <p className="cl-text-3 text-decoration-line-through">{currentProduct.oldPrice}</p>
              </>
            )}
            {currentProduct.sale && (
              <span className="badge-sale text-white fw-semibold text-caption-02">
                {currentProduct.sale}
              </span>
            )}
          </div>
          <p className="product-infor-desc cl-text-2 mb-12">
            Premium quality {currentProduct.name} sourced with a focus on purity, freshness, and natural goodness.
          </p>
          <div className="product-infor-reality lh-24">
            <div className="ic d-flex">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={24} height={24} rx={4} fill="#101010" />
                <path d="M19.4569 11.7975C19.435 11.7481 18.9056 10.5738 17.7287 9.39687C16.1606 7.82875 14.18 7 12 7C9.81999 7 7.83937 7.82875 6.27124 9.39687C5.09437 10.5738 4.56249 11.75 4.54312 11.7975C4.51469 11.8614 4.5 11.9306 4.5 12.0006C4.5 12.0706 4.51469 12.1398 4.54312 12.2037C4.56499 12.2531 5.09437 13.4269 6.27124 14.6038C7.83937 16.1713 9.81999 17 12 17C14.18 17 16.1606 16.1713 17.7287 14.6038C18.9056 13.4269 19.435 12.2531 19.4569 12.2037C19.4853 12.1398 19.5 12.0706 19.5 12.0006C19.5 11.9306 19.4853 11.8614 19.4569 11.7975ZM12 14.5C11.5055 14.5 11.0222 14.3534 10.6111 14.0787C10.1999 13.804 9.87951 13.4135 9.69029 12.9567C9.50107 12.4999 9.45157 11.9972 9.54803 11.5123C9.64449 11.0273 9.88259 10.5819 10.2322 10.2322C10.5819 9.8826 11.0273 9.6445 11.5123 9.54804C11.9972 9.45157 12.4999 9.50108 12.9567 9.6903C13.4135 9.87952 13.804 10.2 14.0787 10.6111C14.3534 11.0222 14.5 11.5055 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5Z" fill="white" />
              </svg>
            </div>
            28&nbsp;people are viewing this right now
          </div>
        </div>
        <div className="br-line" />
        <div className="tf-product-variant">
          <div className="quick-variant-picker picker_size">
            <div className="variant-picker_label mb-12">
              <div>
                Size:
                <span className="variant__value text-capitalize fw-medium">500 GM</span>
              </div>
            </div>
            <div className="variant-picker_values">
              <span className="size_btn style-2 active" data-quick-size="500 GM" data-quick-price="320.00">500 GM</span>
              <span className="size_btn style-2" data-quick-size="1 KG" data-quick-price="640.00">1 KG</span>
              <span className="size_btn style-2" data-quick-size="2 KG" data-quick-price="1280.00">2 KG</span>
            </div>
          </div>
          <div className="tf-product-total-quantity">
            <p>
              Quantity:
            </p>
            <div className="group-action">
              <div className="wg-quantity">
                <button className="btn-quantity btn-decrease">
                  <i className="icon icon-minus" />
                </button>
                <input className="quantity-product" type="text" name="number" defaultValue={1} />
                <button className="btn-quantity btn-increase">
                  <i className="icon icon-plus" />
                </button>
              </div>
              <a href="#shoppingCart" data-bs-toggle="offcanvas" className="btn-action-price tf-btn type-xl animate-btn w-100">
                Add to Cart
                <span className="d-none d-sm-block d-md-none d-lg-block">&nbsp;-&nbsp;</span>
                <span className="price-add d-none d-sm-block d-md-none d-lg-block">{currentProduct.price || "\u20B9320.00"}</span>
              </a>
            </div>
            <a href="checkout.html" className="tf-btn type-xl btn-primary animate-btn w-100">
              Buy It Now
            </a>
          </div>
        </div>
        <div className="box-action">
          <a href="product-detail.html" className="tf-btn-line-2 style-primary fw-semibold">
            View Full Details
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /Quick View */}
    </>

  );
}

export default QuickViewOffcanvas;







