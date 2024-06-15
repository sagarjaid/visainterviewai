import UserFeedbackView from '../molecules/userFeedbackView';
import SpeechContainer from '../molecules/speechContainer';
import ToggleSections from '../molecules/toggleSections';
import Question from '../molecules/question';

import { useEffect, useState } from 'react';
import { useWhisperRecording } from '@/hooks/useWhisperRecording';
import { useToggle } from '@/hooks/useToggle';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

const VisaInterview = ({ baseInterviewQuestions }) => {
  const {
    officerToogle,
    feedbackToogle,
    responseToogle,
    setOfficerToogle,
    setFeedbackToogle,
    setResponseToogle,
    handleOfficerToogle,
    handleFeedbackToogle,
    handleResponseToogle,
  } = useToggle();

  const handleTextToSpeech = useTextToSpeech();

  const { recording, transcript, startRecording, stopRecording } =
    useWhisperRecording(process.env.NEXT_PUBLIC_OPENAI_KEY);

  const [visaOfficerResponseText, setVisaOfficerResponseText] = useState('');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < baseInterviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleResult = () => {
    console.log(' getResult() got called');
  };

  const totalQuestions = baseInterviewQuestions?.length - 1;

  useEffect(() => {
    handleTextToSpeech(baseInterviewQuestions[currentQuestionIndex]?.question);
  }, [currentQuestionIndex]);

  return (
    <div className='flex sdm:flex-row flex-col p-4 gap-4 rounded-xl h-fit'>
      <div className='border sdm:w-[600px] w-full flex flex-col h-fit rounded-lg drop-shadow-xl bg-white'>
        <Question
          questionNumber={
            baseInterviewQuestions[currentQuestionIndex].questionNumber
          }
          question={baseInterviewQuestions[currentQuestionIndex].question}
          handleTextToSpeech={handleTextToSpeech}
        />

        <UserFeedbackView userAnswer={transcript.text} />
        <SpeechContainer
          setOfficerToogle={setOfficerToogle}
          handleTextToSpeech={handleTextToSpeech}
          recording={recording}
          transcript={transcript}
          startRecording={startRecording}
          stopRecording={stopRecording}
          setVisaOfficerResponseText={setVisaOfficerResponseText}
          handleNextQuestion={handleNextQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          handleResult={handleResult}
        />
        <ToggleSections
          visaOfficerResponseText={visaOfficerResponseText}
          officerToogle={officerToogle}
          setOfficerToogle={setOfficerToogle}
          handleOfficerToogle={handleOfficerToogle}
          handleTextToSpeech={handleTextToSpeech}
          feedbackToogle={feedbackToogle}
          setFeedbackToogle={setFeedbackToogle}
          handleFeedbackToogle={handleFeedbackToogle}
          responseToogle={responseToogle}
          setResponseToogle={setResponseToogle}
          handleResponseToogle={handleResponseToogle}
        />
      </div>
    </div>
  );
};

export default VisaInterview;
