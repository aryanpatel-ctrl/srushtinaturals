function ScrollTopPreload() {
  return (
    <>
      {/* Scroll Top */}
      <button id="goTop">
        <span className="border-progress"></span>
        <span className="ic-wrap">
          <span className="icon icon-CaretTopThin"></span>
        </span>
      </button>
      {/* /Scroll Top */}

      {/* Preload */}
      <div className="preload preload-container" id="preload">
        <div className="preload-logo">
          <div className="spinner"></div>
        </div>
      </div>
      {/* /Preload */}
    </>
  );
}

export default ScrollTopPreload;