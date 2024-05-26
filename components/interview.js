import Image from 'next/image';
import React, { useState } from 'react';

const Interview = () => {
  const [officerToogle, setOfficerToogle] = useState(false);
  const [feedbackToogle, setFeedbackToogle] = useState(false);
  const [responseToogle, setResponseToogle] = useState(false);
  const [cameraToogle, setCameraToogle] = useState(false);

  const [question, setquestion] = useState(false);

  const handleOfficerToogle = () => {
    setOfficerToogle(!officerToogle);
    setFeedbackToogle(false);
    setResponseToogle(false);
  };

  const handleFeedbackToogle = () => {
    setFeedbackToogle(!feedbackToogle);
    setOfficerToogle(false);
    setResponseToogle(false);
  };

  const handleResponseToogle = () => {
    setResponseToogle(!responseToogle);
    setOfficerToogle(false);
    setFeedbackToogle(false);
  };

  const handleCameraToogle = () => {
    setCameraToogle(!cameraToogle);
  };

  return (
    <div className='flex sdm:flex-row flex-col p-4 gap-4 rounded-xl h-fit'>
      <div className='border sdm:w-[600px] w-full flex flex-col h-fit rounded-lg drop-shadow-xl bg-white'>
        <div className='flex justify-between gap-2 border-b p-4'>
          <div className=' flex gap-1.5 items-start sdm:items-center font-semibold'>
            <div>Q1: </div>
            <div>How many other universities you applied?</div>
          </div>
          <div className='cursor-pointer w-fit'>
            <Image
              src='/speaker-on.svg'
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className='flex flex-col-reverse sdm:flex-row gap-4 justify-between p-4 pb-6'>
          <div
            className=' h-24 sdm:h-44 border outline-none rounded-md w-full p-2 text-xs text-gray-400'
            contentEditable='true'
            onInput={(e) =>
              console.log('Text inside div', e.currentTarget.textContent)
            }>
            Use the mic icon to speak and your answers will appear here...
          </div>

          <div className='sdm:h-full flex flex-col gap-4 sdm:justify-between justify-around'>
            <div className='flex flex-col gap-2 w-full h-full sdm:w-60 sdm:h-44 border rounded-md p-3 bg-white'>
              <div className='flex items-center mx-1 justify-between'>
                <div className='text-xs'>Student</div>
                <div className='flex gap-6'>
                  <div className='cursor-pointer'>
                    <Image
                      src='/videocam.svg'
                      width={18}
                      height={18}
                    />
                  </div>
                  <div
                    className='cursor-pointer sdm:hidden'
                    onClick={handleCameraToogle}>
                    {cameraToogle ? (
                      <Image
                        src='/down-arrow.svg'
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src='/up-arrow.svg'
                        width={18}
                        height={18}
                      />
                    )}
                  </div>
                </div>
              </div>

              {cameraToogle && (
                <div className='sdm:hidden flex justify-center items-center border rounded-md w-full h-full'>
                  <Image
                    className='my-16 sdm:my-10'
                    src='/talking-2.svg'
                    width={35}
                    height={35}
                  />
                </div>
              )}

              <div className='hidden sdm:flex justify-center items-center border rounded-md w-full h-full'>
                <Image
                  className='my-16 sdm:my-10'
                  src='/talking-2.svg'
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 px-4 pt-6 pb-8 w-full'>
          <div className='flex flex-col justify-center items-center gap-8'>
            <div class='relative flex h-30 w-30 cursor-pointer'>
              <div class='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></div>
              <div class='relative inline-flex shadow-lg rounded-full p-2 bg-red-500'>
                <Image
                  src='/mic.svg'
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className='font-bold'>0:00/1:00</div>
          </div>

          {question && (
            <div className='w-full flex justify-center items-center gap-3.5 text-sm '>
              <div className='px-3.5 py-1 w-20 text-center border bg-gray-100 cursor-pointer shadow-md rounded-md'>
                Previous
              </div>
              <div className='px-3.5 py-1 bg-gray-500 text-center text-white cursor-pointer w-fit shadow-mdxw border rounded-full'>
                <Image
                  src='/end-call.svg'
                  width={22}
                  height={22}
                />
              </div>
              <div className='px-3.5 py-1 w-20 text-center border cursor-pointer shadow-sm rounded-md bg-white'>
                Next
              </div>
            </div>
          )}
        </div>

        <div
          onClick={handleOfficerToogle}
          className='flex text-sm justify-between items-top bg-gray-50 cursor-pointer border-y p-4'>
          <div className='flex flex-col gap-2 max-w-[80%]'>
            <div>Visa officer response</div>
            {officerToogle && (
              <div className='text-xs text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has su
              </div>
            )}
          </div>
          <div>
            {officerToogle ? (
              <Image
                src='/down-arrow.svg'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src='/up-arrow.svg'
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
        <div
          onClick={handleFeedbackToogle}
          className='flex text-sm justify-between items-top bg-gray-50 cursor-pointer border-b p-4'>
          <div className='flex flex-col gap-2 max-w-[80%]'>
            <div>Feedback</div>
            {feedbackToogle && (
              <div className='text-xs text-gray-600'>
                Use the mic icon to speak and your answers will appear here Use
                the mic icon to speak and your answers will appear here Use the
                mic icon to speak and your answers will appear here the mic icon
                to speak and your answers will appear here Use the mic icon to
                speak.
              </div>
            )}
          </div>
          <div>
            {feedbackToogle ? (
              <Image
                src='/down-arrow.svg'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src='/up-arrow.svg'
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
        <div
          onClick={handleResponseToogle}
          className='flex text-sm justify-between items-top bg-gray-50 cursor-pointer p-4 rounded-md'>
          <div className='flex flex-col gap-2 max-w-[80%]'>
            <div>Sample response</div>
            {responseToogle && (
              <div className='text-xs text-gray-600'>
                Use the mic icon to speak and your answers will appear here Use
                the mic icon to speak and your answers will appear here Use the
                mic icon to speak and your answers will appear here the mic icon
                to speak and your answers will appear here Use the mic icon to
                speak and your answers will appear here
              </div>
            )}
          </div>
          <div>
            {responseToogle ? (
              <Image
                src='/down-arrow.svg'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src='/up-arrow.svg'
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
