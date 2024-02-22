import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import WhySection from '@/components/WhySection';

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
