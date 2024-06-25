import Nav from '@/components/atoms/nav';
import SEOMeta from '@/components/atoms/SEOMeta';
import LoginWithGoogle from '@/components/atoms/loginWithGoogle';
import { useLoadUrl } from '@/hooks/useLoadUrl';
import VisaInterviewHomePage from '@/components/core/visaInterviewHomePage';
import Footer from '@/components/atoms/footer';

const Home = () => {
  const handleHomePageClik = useLoadUrl();
  return (
    <>
      <SEOMeta
        title='Visa Interview AI — Practice US visa mock interview'
        description='Practice US visa mock interview and Get realistic feedback'
      />
      <div className='flex flex-col gap-8 md:gap-14 pb-20 items-center '>
        <div className='w-full flex flex-col items-center bg-gradient-to-t from-white via-blue-200 to-white'>
          <main className='flex max-w-5xl gap-6 items-center flex-col w-full'>
            <Nav />
            <div className='flex flex-col text-center items-center pt-16 text-base font-bold xs:text-2xl sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl '>
              <div>Practice US visa mock interview</div>
              <div>Get realistic feedback</div>
            </div>
            <div className='flex flex-col items-center gap-4 text-center  text-gray-600 sm:text-base'>
              <a href='/'>
                <img
                  src='/usedby.png'
                  className='w-[200px]'
                />
              </a>
              <p className='text-center text-xs sm:text-base'>
                100+ people already interviewed
              </p>
              <LoginWithGoogle />
              <div className='flex flex-col gap-1'>
                <span className='text-xs'>✓ No credit card require</span>
                <span className='text-xs'>✓ No login is required</span>
              </div>
            </div>
          </main>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => handleHomePageClik(event)}>
          <div className='pointer-events-none'>
            <VisaInterviewHomePage />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
