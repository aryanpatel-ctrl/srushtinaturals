function SignInModal() {
  return (
    <>
      {/* Sign In */}
      <div className="modal modalCentered fade modal-log" id="sign">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span className="icon-close-popup" data-bs-dismiss="modal">
              <i className="icon-X2"></i>
            </span>
            <div className="modal-heading text-center">
              <h3 className="title-pop mb-8">Sign In</h3>
              <p className="desc-pop cl-text-2">Sign in to access your personalized experience.</p>
            </div>
            <div className="modal-main">
              <form action="account-page.html" className="form-log">
                <div className="form-content">
                  <fieldset className="tf-field">
                    <label htmlFor="user-name-log" className="tf-lable fw-medium">
                      Username or email address <span className="text-primary">*</span>
                    </label>
                    <input type="text" id="user-name-log" placeholder="Username or email address*" required />
                  </fieldset>
                  <fieldset className="tf-field password-wrapper">
                    <label htmlFor="password" className="tf-lable fw-medium">
                      Password
                      <span className="text-primary">*</span>
                    </label>
                    <div className="password-wrapper w-100">
                      <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                      <input className="password-field" type="password" id="password" placeholder="Password" required />
                    </div>
                  </fieldset>
                  <fieldset className="field-bottom">
                    <div className="checkbox-wrap">
                      <input className="tf-check style-2" type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#modalForgot" data-bs-toggle="modal" className="link text-decoration-underline">
                      <span className="text-caption-01 fw-semibold">Forgot Your Password?</span>
                    </a>
                  </fieldset>
                </div>
                <div className="group-action">
                  <button type="submit" className="tf-btn animate-btn w-100">
                    Login
                  </button>
                  <a href="#register" data-bs-toggle="modal" className="tf-btn btn-stroke">
                    Create Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Sign In */}
    </>
  );
}

export default SignInModal;