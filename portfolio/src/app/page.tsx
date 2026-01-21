import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LogSection from '@/components/LogSection';
import Footer from '@/components/Footer';
import ScrollHandler from '@/components/ScrollHandler';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <HeroSection />
      <LogSection />
      <Footer />
    </main>
  );
}
