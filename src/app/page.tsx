import HomeBenifits from '@/components/HomeBenifits';
import HomeBoardRoom from '@/components/HomeBoardRoom';
import HomeHeroSection from '@/components/HomeHeroSection';
import HomePartnersSection from '@/components/HomePartnersSection';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function Home() {
  return (
    <div>
      <div className='bg-[url("/images/hero_background.png")] bg-cover bg-center bg-no-repeat'>
        <Header />
        <HomeHeroSection />
      </div>
      <HomePartnersSection />
      <HomeBoardRoom />
      <HomeBenifits />
      <Footer />
    </div>
  );
}
