import Cta from '@/components/Home/Cta';
import Hero from '@/components/Home/Hero';
import Reviews from '@/components/Home/Reviews';
import WhySection from '@/components/Home/WhySection';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WhySection />
      <Cta />
      <Reviews />
    </div>
  );
}
