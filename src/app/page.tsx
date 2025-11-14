import Banner from '@/components/home/Banner';
import Categories from '@/components/home/Categories';
import AboutUs from '@/components/home/AboutUs';
import ArtSellingFeatures from '@/components/features/ArtSellingFeatures';
import PricingTestimonials from '@/components/features/PricingTestimonials';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Categories />
      <AboutUs />
      <ArtSellingFeatures />
      <PricingTestimonials />
    </div>
  );
}
