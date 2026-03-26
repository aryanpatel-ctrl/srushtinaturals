import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { homeOrganicScripts } from '../../config/homeOrganicScripts';
import { useExternalScripts, useRouteChangeReinit, reinitializePlugins } from '../../hooks/useExternalScripts';
import Header from './Header';
import Footer from './Footer';
import AnimationInitializer from '../common/AnimationInitializer';
import MobileMenu from './MobileMenu';
import Toolbar from '../homeOrganic/Toolbar';
import ScrollTopPreload from '../homeOrganic/ScrollTopPreload';
import ForgotPassModal from '../homeOrganic/ForgotPassModal';
import SizeGuideModal from '../homeOrganic/SizeGuideModal';
import ShareModal from '../homeOrganic/ShareModal';
import AskModal from '../homeOrganic/AskModal';
import CompareCanvas from '../homeOrganic/CompareCanvas';
import QuickAddModal from '../homeOrganic/QuickAddModal';
import QuickViewOffcanvas from '../homeOrganic/QuickViewOffcanvas';
import ShoppingCartOffcanvas from './ShoppingCartOffcanvas';
import SearchModal from '../homeOrganic/SearchModal';
import RegisterModal from '../homeOrganic/RegisterModal';
import SignInModal from '../homeOrganic/SignInModal';

function Layout() {
  useExternalScripts(homeOrganicScripts, true);
  const location = useLocation();

  // Reinitialize plugins on route change
  useRouteChangeReinit(location.pathname);

  const [quickViewProduct, setQuickViewProduct] = useState({
    name: 'Basmati Rice',
    category: 'Organic',
    img: '/assets/images/product/basmati-rice.webp',
    hover: '/assets/images/product/basmati-rice-h.webp',
    price: '₹320.00',
    sale: null
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Initialize plugins after first mount (ensure DOM is ready)
  useEffect(() => {
    const timer = setTimeout(() => {
      reinitializePlugins();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollTopPreload />
      <AnimationInitializer />

      <main id="wrapper">
        <Header onQuickView={setQuickViewProduct} />
        <Outlet context={{ onQuickView: setQuickViewProduct }} />
        <Footer />
      </main>

      <MobileMenu />
      <Toolbar />
      <ForgotPassModal />
      <SizeGuideModal />
      <ShareModal />
      <AskModal />
      <CompareCanvas />
      <QuickAddModal />
      <QuickViewOffcanvas product={quickViewProduct} />
      <ShoppingCartOffcanvas />
      <SearchModal onQuickView={setQuickViewProduct} />
      <RegisterModal />
      <SignInModal />
    </>
  );
}

export default Layout;
