import UserFeedbackView from '../molecules/userFeedbackView';
import SpeachContainer from '../molecules/speachContainer';
import ToggleSections from '../molecules/toggleSections';
import Question from '../molecules/question';

import { useState } from 'react';
import { useWhisperRecording } from '@/hooks/useWhisperRecording';
import { useToggle } from '@/hooks/useToggle';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

const VisaInterview = () => {
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

  return (
    <div className='flex sdm:flex-row flex-col p-4 gap-4 rounded-xl h-fit'>
      <div className='border sdm:w-[600px] w-full flex flex-col h-fit rounded-lg drop-shadow-xl bg-white'>
        <Question
          questionNumber={1}
          question={'Why do you want the US student visa today?'}
          handleTextToSpeech={handleTextToSpeech}
        />
        <UserFeedbackView userAnswer={transcript.text} />
        <SpeachContainer
          setOfficerToogle={setOfficerToogle}
          handleTextToSpeech={handleTextToSpeech}
          recording={recording}
          transcript={transcript}
          startRecording={startRecording}
          stopRecording={stopRecording}
          setVisaOfficerResponseText={setVisaOfficerResponseText}
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
