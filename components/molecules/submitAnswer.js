import React from 'react';
import Countdown from 'react-countdown';

const SubmitAnswer = () => {
  const renderer = ({ seconds }) => <span>{seconds}</span>;

  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      {/* <div
                  onClick={'handleSubmit'}
                  className='flex cursor-pointer w-fit items-center gap-2 justify-around border-2 border-green-600 rounded-full bg-green-500 p-2.5 px-4 text-white'>
                  <span className='text-sm font-semibold'>Submit Answer</span>
                  <svg
                    className='w-4'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={3}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                    />
                  </svg>
                </div> */}
      <div className='text-[10px] flex flex-col justify-center items-center gap-1'>
        <span>Submitting your answer for feedback</span>
        <span className='flex gap-1'>
          <span>automatically in</span>
          <Countdown
            date={Date.now() + 6000}
            renderer={renderer}
          />
          <span>seconds</span>
        </span>
      </div>
    </div>
  );
};

export default SubmitAnswer;
