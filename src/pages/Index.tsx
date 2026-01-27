import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';
import { DataSection } from '@/components/sections/DataSection';
import { MapSection } from '@/components/sections/MapSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ActivitiesSection />
        <DataSection />
        <MapSection />
        <TeamSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
