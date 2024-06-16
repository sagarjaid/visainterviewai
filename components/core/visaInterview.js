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
    officerToggle,
    feedbackToggle,
    responseToggle,
    setOfficerToggle,
    setFeedbackToggle,
    setResponseToggle,
    handleOfficerToggle,
    handleFeedbackToggle,
    handleResponseToggle,
  } = useToggle();

  const handleTextToSpeech = useTextToSpeech();

  const { recording, transcript, startRecording, stopRecording } =
    useWhisperRecording(process.env.NEXT_PUBLIC_OPENAI_KEY);

  const [visaOfficerResponseText, setVisaOfficerResponseText] = useState('');
  const [visaOfficerFeedbackText, setVisaOfficerFeedbackText] = useState('');
  const [visaOfficerSampleResponseText, setVisaOfficerSampleResponseText] =
    useState('');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < baseInterviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setOfficerToggle(false);
    setFeedbackToggle(false);
    setResponseToggle(false);
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
          setOfficerToggle={setOfficerToggle}
          handleTextToSpeech={handleTextToSpeech}
          recording={recording}
          transcript={transcript}
          startRecording={startRecording}
          stopRecording={stopRecording}
          setVisaOfficerResponseText={setVisaOfficerResponseText}
          setVisaOfficerFeedbackText={setVisaOfficerFeedbackText}
          setVisaOfficerSampleResponseText={setVisaOfficerSampleResponseText}
          handleNextQuestion={handleNextQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          handleResult={handleResult}
          baseInterviewQuestions={baseInterviewQuestions}
          currentQuestion={
            baseInterviewQuestions[currentQuestionIndex].question
          }
        />
        <ToggleSections
          visaOfficerResponseText={visaOfficerResponseText}
          visaOfficerFeedbackText={visaOfficerFeedbackText}
          visaOfficerSampleResponseText={visaOfficerSampleResponseText}
          officerToggle={officerToggle}
          setOfficerToggle={setOfficerToggle}
          handleOfficerToggle={handleOfficerToggle}
          handleTextToSpeech={handleTextToSpeech}
          feedbackToggle={feedbackToggle}
          setFeedbackToggle={setFeedbackToggle}
          handleFeedbackToggle={handleFeedbackToggle}
          responseToggle={responseToggle}
          setResponseToggle={setResponseToggle}
          handleResponseToggle={handleResponseToggle}
        />
      </div>
    </div>
  );
};

export default VisaInterview;
