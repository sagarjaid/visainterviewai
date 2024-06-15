import { useState } from 'react';

export const useToggle = () => {
  const [officerToogle, setOfficerToogle] = useState(false);
  const [feedbackToogle, setFeedbackToogle] = useState(false);
  const [responseToogle, setResponseToogle] = useState(false);

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

  return {
    officerToogle,
    feedbackToogle,
    responseToogle,
    setOfficerToogle,
    setFeedbackToogle,
    setResponseToogle,
    handleOfficerToogle,
    handleFeedbackToogle,
    handleResponseToogle,
  };
};
