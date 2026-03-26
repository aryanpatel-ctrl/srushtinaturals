import { useOutletContext } from 'react-router-dom';

// Existing sections
import SlideShowSection from '../components/homeOrganic/SlideShowSection';
import CategorySection from '../components/homeOrganic/CategorySection';
import FavoriteSection from '../components/homeOrganic/FavoriteSection';
import BannerImageSection from '../components/homeOrganic/BannerImageSection';
import PopularSection from '../components/homeOrganic/PopularSection';
import CowGheeDetailSection from '../components/homeOrganic/CowGheeDetailSection';
import GallerySection from '../components/homeOrganic/GallerySection';

// New sections
import WaveDivider from '../components/homeOrganic/WaveDivider';
import OurStorySection from '../components/homeOrganic/OurStorySection';
import FarmJourneySection from '../components/homeOrganic/FarmJourneySection';
import TestimonialsSection from '../components/homeOrganic/TestimonialsSection';
import NewsletterSection from '../components/homeOrganic/NewsletterSection';

/**
 * HomePage - Immersive Nature-First Experience
 * Flow: Inspire → Connect → Browse → Convert
 */
function HomePage() {
  const { onQuickView } = useOutletContext();

  return (
    <>
      {/* 1. Hero Section with Floating Leaves */}
      <SlideShowSection />

      {/* 2. Wave Divider - Hero to Story */}
      <WaveDivider
        variant="organic"
        fillColor="#F8F4EC"
        backgroundColor="transparent"
      />

      {/* 3. Our Story - Brand Connection */}
      <OurStorySection />

      {/* 4. Farm Journey - Process Visualization (on cream background) */}
      <div style={{ backgroundColor: '#F8F4EC' }}>
        <FarmJourneySection />
      </div>

      {/* 5. Wave from cream to white */}
      <WaveDivider
        variant="gentle"
        flip
        fillColor="#F8F4EC"
        backgroundColor="#ffffff"
      />

      {/* 6. Category Section - Browse Products (white background) */}
      <CategorySection />

      {/* 7. Wave from white to cream */}
      <WaveDivider
        variant="leaf"
        fillColor="#F8F4EC"
        backgroundColor="#ffffff"
      />

      {/* 8. Favorite Section - "Nature's Best Picks" (cream background) */}
      <div style={{ backgroundColor: '#F8F4EC', paddingTop: '10px' }}>
        <FavoriteSection onQuickView={onQuickView} />
      </div>

      {/* 9. Wave from cream to white */}
      <WaveDivider
        variant="gentle"
        flip
        fillColor="#F8F4EC"
        backgroundColor="#ffffff"
      />

      {/* 10. Testimonials - Social Proof (white background) */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <TestimonialsSection />
      </div>

      {/* 11. Popular Section - "Fresh from Farm" */}
      <PopularSection onQuickView={onQuickView} />

      {/* 12. Cow Ghee Detail - Featured Product Story (TEMPORARILY HIDDEN) */}
      {/* <CowGheeDetailSection /> */}

      {/* 13. Banner Image */}
      <BannerImageSection />

      {/* 14. Wave from white to cream (newsletter) */}
      <WaveDivider
        variant="organic"
        fillColor="#F8F4EC"
        backgroundColor="#ffffff"
      />

      {/* 15. Newsletter - "Join Our Farm Family" */}
      <NewsletterSection />

      {/* 16. Gallery - "Moments from Our Farm" */}
      <GallerySection />
    </>
  );
}

export default HomePage;
