import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import TrackOrderPage from './pages/TrackOrderPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <CompareProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Home */}
                <Route index element={<HomePage />} />

                {/* Shop */}
                <Route path="shop" element={<ShopPage />} />
                <Route path="shop/:category" element={<ShopPage />} />
                <Route path="product/:slug" element={<ProductDetailPage />} />

                {/* About & Info */}
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="faq" element={<FAQPage />} />

                {/* Blog */}
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:slug" element={<BlogDetailPage />} />

                {/* User Account */}
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<LoginPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="track-order" element={<TrackOrderPage />} />

                {/* Policy Pages (will redirect to FAQ for now) */}
                <Route path="shipping" element={<FAQPage />} />
                <Route path="returns" element={<FAQPage />} />
                <Route path="terms" element={<FAQPage />} />
                <Route path="privacy" element={<FAQPage />} />

                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </CompareProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
