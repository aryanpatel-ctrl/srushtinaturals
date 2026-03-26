import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getRecommendedProducts, formatPrice } from '../../data/products';
import { formatPriceSimple } from '../../utils/formatPrice';

function ShoppingCartOffcanvas() {
  const {
    cartItems,
    subtotal,
    amountForFreeShipping,
    freeShippingProgress,
    isEmpty,
    removeFromCart
  } = useCart();

  const recommendedProducts = getRecommendedProducts();

  const handleRemove = (itemId, selectedSizeLabel) => {
    removeFromCart(itemId, selectedSizeLabel);
  };

  return (
    <div className="offcanvas offcanvas-end popup-shopping-cart" id="shoppingCart">
      <div className="tf-minicart-recommendations file-delete">
        <div className="title d-flex justify-content-between align-items-center">
          <h5>You Might Like</h5>
          <i className="icon icon-X2 link remove fs-24 cs-pointer" />
        </div>
        <div className="wrap-recommendations">
          <div className="list-cart">
            {recommendedProducts.map(product => (
              <div className="list-cart-item" key={product.id}>
                <Link to={`/product/${product.slug}`} className="image" data-bs-dismiss="offcanvas">
                  <img loading="lazy" width={212} height={283} src={product.img} alt={product.name} />
                </Link>
                <div className="content">
                  <Link className="name fw-medium link text-line-clamp-1" to={`/product/${product.slug}`} data-bs-dismiss="offcanvas">
                    {product.name}
                  </Link>
                  <div className="price-wrap">
                    <span className="price-new text-primary fw-semibold">{formatPriceSimple(product.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="canvas-wrapper">
        <div className="popup-header">
          <div className="d-flex align-items-center justify-content-between mb-12">
            <h5 className="title">Shopping Cart</h5>
            <span className="icon-X2 icon-close-popup" data-bs-dismiss="offcanvas" />
          </div>
          <div className="cart-threshold">
            <p className="text">
              {amountForFreeShipping > 0 ? (
                <>
                  Buy <span className="text-primary fw-7">{formatPriceSimple(amountForFreeShipping)}</span> more to get freeship
                </>
              ) : (
                <span className="text-primary fw-7">You qualify for free shipping!</span>
              )}
            </p>
            <div className="tf-progress-bar tf-progress-ship">
              <div className="value" style={{ width: `${freeShippingProgress}%` }} data-progress={freeShippingProgress} />
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="tf-mini-cart-wrap list-file-delete wrap-empty_text">
            <div className="tf-mini-cart-main">
              <div className="tf-mini-cart-sroll">
                <div className={`tf-mini-cart-items ${isEmpty ? 'list-empty' : ''}`}>
                  {isEmpty ? (
                    <div className="box-text_empty type-shop_cart">
                      <div className="shop-empty_top">
                        <span className="icon">
                          <i className="icon-Handbag" />
                        </span>
                        <h4 className="text-emp">Your cart is empty</h4>
                        <p className="cl-text-2">
                          Your cart is currently empty. Let us assist you in finding the right product
                        </p>
                      </div>
                      <div className="shop-empty_bot">
                        <Link to="/shop" className="tf-btn animate-btn" data-bs-dismiss="offcanvas">
                          Shopping
                        </Link>
                        <Link to="/" className="tf-btn btn-stroke" data-bs-dismiss="offcanvas">
                          Back to home
                        </Link>
                      </div>
                    </div>
                  ) : (
                    cartItems.map((item, index) => (
                      <div className="tf-mini-cart-item file-delete" key={`${item.id}-${item.selectedSize?.label || index}`}>
                        <div className="tf-mini-cart-image">
                          <img
                            className="aspect-ratio-1"
                            loading="lazy"
                            width={100}
                            height={133}
                            src={item.img}
                            alt={item.name}
                          />
                        </div>
                        <div className="tf-mini-cart-info">
                          <Link
                            to={`/product/${item.slug}`}
                            className="name fw-medium link text-line-clamp-1"
                            data-bs-dismiss="offcanvas"
                          >
                            {item.name}
                          </Link>
                          {item.selectedSize && (
                            <span className="cl-text-2 text-caption-01">{item.selectedSize.label}</span>
                          )}
                          <div className="fw-semibold d-flex align-items-center gap-4">
                            <span className="number">{item.quantity}</span>
                            <span>x</span>
                            <span className="price text-primary tf-mini-card-price">
                              {formatPriceSimple(item.price)}
                            </span>
                          </div>
                        </div>
                        <div className="tf-mini-cart-price">
                          <div
                            className="tf-btn-line-3 type-primary remove cs-pointer"
                            onClick={() => handleRemove(item.id, item.selectedSize?.label)}
                          >
                            <span className="text-caption-01 fw-semibold">Remove</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {!isEmpty && (
              <div className="tf-mini-cart-bottom box-empty_clear">
                <div className="tf-mini-cart-tool">
                  <div className="tf-mini-cart-tool-btn btn-add-note">
                    <i className="icon icon-NotePencil" />
                    <div className="lh-24">Note</div>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                    <i className="icon icon-Truck" />
                    <div className="lh-24">Shipping</div>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-add-gift">
                    <i className="icon icon-SealPercent" />
                    <div className="lh-24">Coupon</div>
                  </div>
                </div>
                <div className="tf-mini-cart-bottom-wrap">
                  <div className="tf-mini-cart-total">
                    <h5 className="text-total d-flex align-content-center justify-content-between">
                      <span className="subtotal">Subtotal</span>
                      <span className="total-price tf-totals-total-value">{formatPriceSimple(subtotal)}</span>
                    </h5>
                  </div>
                  <div className="checkbox-wrap">
                    <input className="tf-check style-2" type="checkbox" id="agree-term" />
                    <label htmlFor="agree-term">
                      I agree with
                      <a href="term-and-condition.html" className="text-decoration-underline">
                        Terms &amp; Conditions
                      </a>
                    </label>
                  </div>
                  <div className="tf-mini-cart-view-checkout">
                    <a href="view-cart.html" className="tf-btn btn-stroke">
                      View cart
                    </a>
                    <a href="checkout.html" className="tf-btn animate-btn">
                      Check Out
                    </a>
                  </div>
                  <Link to="/shop" className="d-flex justify-content-center fw-semibold text-center link" data-bs-dismiss="offcanvas">
                    Or Continue Shopping
                  </Link>
                </div>
              </div>
            )}

            <div className="tf-mini-cart-tool-openable add-note">
              <div className="overlay tf-mini-cart-tool-close" />
              <form action="#" className="tf-mini-cart-tool-content">
                <label htmlFor="cart-note" className="tf-mini-cart-tool-text h6 fw-medium">
                  <i className="icon icon-NotePencil" />
                  Note
                </label>
                <textarea name="note" id="cart-note" placeholder="Note about your order" defaultValue="" />
                <div className="tf-cart-tool-btns">
                  <button className="subscribe-button tf-btn animate-btn" type="submit">
                    Save
                  </button>
                  <div className="tf-btn btn-stroke tf-mini-cart-tool-close">
                    Cancel
                  </div>
                </div>
              </form>
            </div>

            <div className="tf-mini-cart-tool-openable estimate-shipping">
              <div className="overlay tf-mini-cart-tool-close" />
              <form id="shipping-form" className="tf-mini-cart-tool-content">
                <div className="tf-mini-cart-tool-text h6 fw-medium">
                  <i className="icon icon-Truck" />
                  Shipping
                </div>
                <div className="form-content gap-10">
                  <div className="tf-select">
                    <select className="w-100" id="shipping-country-form" name="address[country]" data-default>
                      <option value="India" data-provinces="[]">India</option>
                    </select>
                  </div>
                  <div className="tf-select">
                    <select id="shipping-province-form" name="address[province]" data-default>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                  </div>
                  <input type="text" placeholder="Postal code" data-opend-focus id="zipcode" name="address[zip]" defaultValue="" />
                  <div id="zipcode-message" className="error" style={{ display: 'none' }}>
                    We found one shipping rate available for undefined.
                  </div>
                  <div id="zipcode-success" className="success" style={{ display: 'none' }}>
                    <p>We found one shipping rate available for your address:</p>
                    <p className="standard">
                      Standard at <span>₹0.00</span> INR
                    </p>
                  </div>
                </div>
                <div className="tf-cart-tool-btns">
                  <button className="subscribe-button tf-btn animate-btn" type="submit">
                    Save
                  </button>
                  <div className="tf-btn btn-stroke tf-mini-cart-tool-close">
                    Cancel
                  </div>
                </div>
              </form>
            </div>

            <div className="tf-mini-cart-tool-openable add-gift">
              <div className="overlay tf-mini-cart-tool-close" />
              <form action="#" className="tf-mini-cart-tool-content">
                <div className="tf-mini-cart-tool-text h6 fw-medium">
                  <i className="icon icon-SealPercent" />
                  Coupon
                </div>
                <div className="wrap">
                  <h5>
                    Only <span className="text-primary">₹2.00</span> for a gift box
                  </h5>
                </div>
                <div className="tf-cart-tool-btns">
                  <button className="subscribe-button tf-btn animate-btn" type="submit">
                    Add a gift
                  </button>
                  <div className="tf-btn btn-stroke line tf-mini-cart-tool-close">
                    Cancel
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartOffcanvas;
