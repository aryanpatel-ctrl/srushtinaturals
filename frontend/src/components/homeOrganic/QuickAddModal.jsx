function QuickAddModal() {
  return (
    <>
{/* Quick Add */}
<div className="modal modalCentered fade modal-quickadd" id="quickAdd">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="d-flex align-items-center justify-content-between mb-20">
        <h5>Quick Add</h5>
        <span className="d-flex cs-pointer link" data-bs-dismiss="modal">
          <i className="icon icon-X2 fs-24" />
        </span>
      </div>
      <div className="tf-product-info-wrap p-0 m-0">
        <div className="tf-product-info-inner tf-product-info-list mb-0">
          <div className="tf-product-mini-view">
            <a href="product-detail.html" className="prd-image">
              <img src="/assets/images/product/product-2.jpg" alt="Image Product" />
            </a>
            <div className="prd-content">
              <a href="product-detail.html" className="prd-name fw-medium link-underline">
                linen slim-fit shirt
              </a>
              <div className="price-wrap">
                <span className="price-new text-primary fw-semibold price-on-sale">₹29.99</span>
                <span className="price-old text-caption-01 cl-text-3">₹49.99</span>
              </div>
            </div>
          </div>
          <div className="tf-product-variant">
            <div className="variant-picker-item variant-color">
              <div className="variant-picker-label">
                <div>
                  Colors:
                  <span className="variant-picker-label-value value-currentColor text-capitalize fw-medium">Gray</span>
                </div>
              </div>
              <div className="variant-picker-values">
                <div className="hover-tooltip tooltip-bot color-btn style-image" data-color="green">
                  {/* <span class="check-color bg-blue-1"></span> */}
                  <div className="img">
                    <img loading="lazy" width={60} height={60} src="/assets/images/product/single/detail-1_2.jpg" data-src="/assets/images/product/single/detail-1_2.jpg" alt="img" />
                  </div>
                  <span className="tooltip">Green</span>
                </div>
                <div className="hover-tooltip tooltip-bot color-btn style-image active" data-color="gray">
                  {/* <span class="check-color bg-caramel"></span> */}
                  <div className="img">
                    <img loading="lazy" width={60} height={60} src="/assets/images/product/single/detail-1_5.jpg" data-src="/assets/images/product/single/detail-1_5.jpg" alt="img" />
                  </div>
                  <span className="tooltip">Gray</span>
                </div>
              </div>
            </div>
            <div className="variant-picker-item variant-size">
              <div className="variant-picker-label">
                <div>
                  Size:
                  <span className="variant-picker-label-value value-currentSize text-capitalize fw-medium">M</span>
                </div>
                <a href="#findSize" data-bs-toggle="modal" className="tf-btn-line-2 style-primary text-caption-01 fw-semibold">
                  Size Guide
                </a>
              </div>
              <div className="variant-picker-values">
                <span className="size-btn" data-size="S" data-price="39.99">S</span>
                <span className="size-btn active" data-size="M" data-price="59.99">M</span>
                <span className="size-btn" data-size="L" data-price="79.99">L</span>
                <span className="size-btn" data-size="XL" data-price="89.99">XL</span>
                <span className="size-btn disabled" data-size="XX" data-price="99.99">XXL</span>
              </div>
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
                Add to cart
                <span className="price-add d-none">₹79.99</span>
              </a>
            </div>
            <a href="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn type-xl btn-primary animate-btn w-100">
              Buy it now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /Quick Add */}
    </>

  );
}

export default QuickAddModal;


