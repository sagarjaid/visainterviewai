import LoginWithGoogle from '@/components/LoginWithGoogle';
import SEOMeta from '@/components/SEOMeta';
import React from 'react';
import Nav from '@/components/Nav';
import Interview from '@/components/interview';
import Interviewx2 from '@/components/interviewx-2';

const Home = () => {
  return (
    <>
      <SEOMeta
        title='Visa Interview AI — Practice US visa mock interview'
        description='Practice US visa mock interview and Get realistic feedback'
      />
      <div className='flex flex-col gap-8 md:gap-14 pb-6 items-center '>
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
              <span className='text-xs'>✓ No credit card require</span>
            </div>
          </main>
        </div>
        <Interview />

        {/* <Interviewx2 /> */}

        {/* <iframe
          className="w-full max-w-6xl  aspect-video rounded-2xl border-4 border-black bg-black shadow-2xl sm:w-11/12"
          src="https://www.youtube.com/embed/bWC7SYxkyfg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe> */}

        {/* <div className='relative overflow-x-hidden w-full flex-col justify-end gap-2 bg-gradient-to-t from-white via-blue-200 to-white px-2 flex'>
          <div className='slide-track  flex-row gap-2 bg-transparent flex'>
            <HeroCard
              name='Web Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Dentist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Astronaut'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Math Teacher'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Youtuber'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Software Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Digital Marketer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Graphic Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Data Scientist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Business Analyst'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Network Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Fashion Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Financial Analyst'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Air Hostess'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Project Manager'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Civil Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Web Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Dentist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Astronaut'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Math Teacher'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Youtuber'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Software Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Digital Marketer'
              styles='w-52 h-52 bg-transparent'
            />
          </div>
          <div className='slide-track-2 flex-row gap-2 bg-transparent flex'>
            <HeroCard
              name='Web Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Dentist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Astronaut'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Math Teacher'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Youtuber'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Software Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Digital Marketer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Graphic Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Data Scientist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Business Analyst'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Network Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Fashion Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Financial Analyst'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Air Hostess'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Project Manager'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Civil Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Web Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Dentist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Astronaut'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Math Teacher'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Youtuber'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Software Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Digital Marketer'
              styles='w-52 h-52 bg-transparent'
            />
          </div>
          <div className='slide-track-3 flex-row gap-2 bg-transparent flex'>
            <HeroCard
              name='Web Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Dentist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Astronaut'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Math Teacher'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Youtuber'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Software Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Digital Marketer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Graphic Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Data Scientist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Business Analyst'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Network Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Fashion Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Financial Analyst'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Air Hostess'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Project Manager'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Civil Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Web Designer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Dentist'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Astronaut'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Math Teacher'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Youtuber'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Software Engineer'
              styles='w-52 h-52 bg-transparent'
            />
            <HeroCard
              name='Digital Marketer'
              styles='w-52 h-52 bg-transparent'
            />
          </div>
        </div> */}

        {/* <div className=' w-full flex items-center justify-center'>
          <div className=' m-4 flex max-w-4xl flex-col items-center text-center justify-center gap-4 rounded-2xl bg-blue-500 p-8 text-white'>
            <div className='mt-4 text-3xl font-bold'>
              Take the first step toward your dream career today!
            </div>
            <p className='max-w-lg text-center'>
              Are you struggling to decide on the right career path for you? Let
              our AI-poweblue career guidance tool help you find the perfect fit!
            </p>
            <LoginWithGoogle />
          </div>
        </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
