import Image from 'next/image';
import RetakeAnswer from './retakeAnswer';
import QuestionControls from './questionControls';
import SubmitAnswer from './submitAnswer';

import { useState, useCallback } from 'react';
import { formatTime } from '../helper/helper';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { useApiCall } from '@/hooks/useApiCall';

const SpeechContainer = ({
  setOfficerToggle,
  handleTextToSpeech,
  recording,
  transcript,
  startRecording,
  stopRecording,
  setVisaOfficerResponseText,
  setVisaOfficerFeedbackText,
  setVisaOfficerSampleResponseText,
  handleNextQuestion,
  currentQuestionIndex,
  totalQuestions,
  handleResult,
  baseInterviewQuestions,
  currentQuestion,
}) => {
  const [visaOfficerResponse, setVisaOfficerResponse] = useState(false);
  const [answer, setAnswer] = useState(false);

  const handleTimerEnd = useCallback(() => {
    handleStopRecording();
  }, []);

  const { countdown, startTimer, stopTimer, resetTimer } = useCountdownTimer(
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
    resetTimer();
    setTimeout(async () => {
      let userResponse = transcript.text;
      try {
        const resData1 = await callApi('/api/getData', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            baseInterviewQuestions: baseInterviewQuestions,
            currentQuestion: currentQuestion,
            userAnswer: userResponse,
          }),
        });

        const x = {
          currentQuestion: {
            visaOfficerResponse: "Okay, let's move to the next question",
            feedbackToStudent:
              'Your answer highlights your preference for University of Spitzer, but it would be beneficial to mention specific reasons such as academic programs, faculty, or campus facilities.',
            sampleResponse:
              'I chose University of Spitzer because of its renowned engineering program and state-of-the-art research facilities. The faculty members have strong industry connections, providing valuable networking opportunities for my future career.',
          },
          VisaStatus: false,
          isError: false,
        };

        const visaOfficerRes = JSON.parse(resData1?.result);
        console.log(visaOfficerRes, 'resData1?.result');
        setVisaOfficerResponseText(
          visaOfficerRes?.currentQuestion?.visaOfficerResponse
        );

        handleTextToSpeech(
          visaOfficerRes?.currentQuestion?.visaOfficerResponse
        );

        setVisaOfficerFeedbackText(
          visaOfficerRes?.currentQuestion?.feedbackToStudent
        );

        setVisaOfficerSampleResponseText(
          visaOfficerRes?.currentQuestion?.sampleResponse
        );

        setAnswer(false);
        setOfficerToggle(true);
        setVisaOfficerResponse(true);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }, 7000);
  };

  const handleRetake = () => {
    setAnswer(false);
  };

  const handleNextQuestionWithReset = () => {
    handleNextQuestion();
    setVisaOfficerResponse(false);
    setOfficerToggle(false);
    setVisaOfficerResponseText('');
    setVisaOfficerFeedbackText('');
    setVisaOfficerSampleResponseText('');
    setAnswer(false);
    stopTimer();
    resetTimer();
  };

  return (
    <div className='flex flex-col gap-8 px-4 pt-6 pb-8 w-full'>
      {visaOfficerResponse ? (
        <>
          <RetakeAnswer handleRetake={handleRetake} />

          <QuestionControls
            handleNextQuestion={handleNextQuestionWithReset}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            handleResult={handleResult}
          />
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

export default SpeechContainer;
