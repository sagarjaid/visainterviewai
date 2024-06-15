import Image from 'next/image';
import RetakeAnswer from './retakeAnswer';
import QuestionControls from './questionControls';
import SubmitAnswer from './submitAnswer';

import { useState, useCallback } from 'react';
import { formatTime } from '../helper/helper';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { useApiCall } from '@/hooks/useApiCall';

const SpeachContainer = ({
  setOfficerToogle,
  handleTextToSpeech,
  recording,
  transcript,
  startRecording,
  stopRecording,
  setVisaOfficerResponseText,
}) => {
  const [visaOfficerResponse, setVisaOfficerResponse] = useState(false);
  const [answer, setAnswer] = useState(false);

  const handleTimerEnd = useCallback(() => {
    handleStopRecording();
  }, []);

  const { countdown, startTimer, stopTimer } = useCountdownTimer(
    false,
    120,
    handleTimerEnd
  );

  const { callApi } = useApiCall();

  const handleStartRecording = () => {
    startRecording();
    startTimer();
  };

  const handleStopRecording = async () => {
    stopRecording();
    setAnswer(true);
    stopTimer();
    setTimeout(async () => {
      try {
        const resData1 = await callApi('/api/getData', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tag: transcript.text }),
        });

        setVisaOfficerResponseText(resData1?.result);
        handleTextToSpeech(resData1?.result);
        setAnswer(false);
        setOfficerToogle(true);
        setVisaOfficerResponse(true);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }, 7000);
  };

  const handleRetake = () => {
    setAnswer(false);
  };

  return (
    <div className='flex flex-col gap-8 px-4 pt-6 pb-8 w-full'>
      {visaOfficerResponse ? (
        <>
          <RetakeAnswer handleRetake={handleRetake} />
          <QuestionControls />
        </>
      ) : (
        <div className='flex flex-col justify-center items-center gap-4'>
          {!answer ? (
            <>
              {recording ? (
                <div
                  onClick={handleStopRecording}
                  className='flex h-30 w-30 p-2 bg-green-500 rounded-full shadow-lg cursor-pointer'>
                  <Image
                    src='/pause.svg'
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                <div
                  onClick={handleStartRecording}
                  className='relative flex h-30 w-30 cursor-pointer'>
                  <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></div>
                  <div className='relative inline-flex shadow-lg rounded-full p-2 bg-red-500'>
                    <Image
                      src='/mic.svg'
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              )}
              <div className='font-bold'>{formatTime(countdown)}/02:00</div>
            </>
          ) : (
            <>
              <RetakeAnswer handleRetake={handleRetake} />
              <SubmitAnswer />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SpeachContainer;
