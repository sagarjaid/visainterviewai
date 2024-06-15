import ToggleSection from './toggleSection';

const ToggleSections = ({
  visaOfficerResponseText,
  officerToogle,
  setOfficerToogle,
  handleOfficerToogle,
  handleTextToSpeech,
  feedbackToogle,
  setFeedbackToogle,
  handleFeedbackToogle,
  responseToogle,
  setResponseToogle,
  handleResponseToogle,
}) => {
  return (
    <>
      <ToggleSection
        title='Visa officer response'
        content={
          visaOfficerResponseText
            ? visaOfficerResponseText
            : 'Answer the above given question to recive a response from visa officer '
        }
        isToggled={officerToogle}
        setToogle={setOfficerToogle}
        onToggle={handleOfficerToogle}
        handleTextToSpeech={handleTextToSpeech}
        lastToogle={false}
      />
      <ToggleSection
        title='Feedback'
        content='Use the mic icon to speak and your answers will appear here Use the mic icon to speak and your answers will appear here Use the mic icon to speak and your answers will appear here the mic icon to speak and your answers will appear here Use the mic icon to speak.'
        isToggled={feedbackToogle}
        setToogle={setFeedbackToogle}
        onToggle={handleFeedbackToogle}
        handleTextToSpeech={handleTextToSpeech}
        lastToogle={false}
      />
      <ToggleSection
        title='Sample response'
        content='Use the mic icon to speak and your answers will appear here Use the mic icon to speak and your answers will appear here Use the mic icon to speak and your answers will appear here the mic icon to speak and your answers will appear here Use the mic icon to speak and your answers will appear here'
        isToggled={responseToogle}
        setToogle={setResponseToogle}
        onToggle={handleResponseToogle}
        handleTextToSpeech={handleTextToSpeech}
        lastToogle={true}
      />
    </>
  );
};

export default ToggleSections;
