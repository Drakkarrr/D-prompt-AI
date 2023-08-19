import LandingNavbar from '@/components/LandingNavbar';
import LandingHero from '@/components/LandingHero';
// import LandingPageContents from '@/components/LandingPageContents';

const LandingPage = () => {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      {/* <LandingPageContents /> */}
    </div>
  );
};

export default LandingPage;
