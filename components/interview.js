import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import useWhisper from '@chengsokdara/use-whisper';
import Webcam from './webcam';
import useDevice from '@/hooks/useDevice';

import Countdown from 'react-countdown';

const Interview = () => {
  const [officerToogle, setOfficerToogle] = useState(false);
  const [feedbackToogle, setFeedbackToogle] = useState(false);
  const [responseToogle, setResponseToogle] = useState(false);
  const [cameraToogle, setCameraToogle] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [stream, setStream] = useState(null);
  const [err, setErr] = useState(false);

  const { isMobile, isDesktop, isTablet } = useDevice();

  console.log({ isMobile, isDesktop, isTablet }, 'Hello');

  const startWebcam = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(userStream);
    } catch (error) {
      setErr(true);
      console.error('Error accessing webcam:', error);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const [question, setquestion] = useState(false);

  // const {
  //   startRecording,
  //   stopRecording,
  //   togglePauseResume,
  //   recordingBlob,
  //   isRecording,
  //   isPaused,
  //   recordingTime,
  //   mediaRecorder,
  // } = useAudioRecorder();

  const {
    recording,
    speaking,
    transcribing,
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: process.env.OPENAI_API_TOKEN || 'dkhdkdhsk',
    removeSilence: true,
    // autoStart: true,
    stopTimeout: 120000,
    streaming: true,
  });

  console.log(recording, transcribing, 'recording');
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
    console.log(cameraToogle, 'cameraToogle');
    if (cameraToogle) {
      setCameraToogle(false);
      stopWebcam();
    } else {
      setCameraToogle(true);
      startWebcam();
    }
  };

  // useEffect(() => {
  //   if (isDesktop) {
  //     handleCameraToogle();
  //   }
  // }, []);

  useEffect(() => {
    if (isDesktop) {
      setTimeout(() => {
        startWebcam();
        setCameraToogle(true);
      }, 3000);
    }
  }, [isDesktop]);

  useEffect(() => {
    let timerId;

    const startTimer = () => {
      setIsRunning(true);
      timerId = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 120) {
            clearInterval(timerId);
            setIsRunning(false);
            // Call another function when 2 minutes are reached
            handleTimerEnd();
            return 0; // Reset countdown to 0
          } else {
            return prevCountdown + 1;
          }
        });
      }, 1000); // Update every second
    };

    const stopTimer = () => {
      clearInterval(timerId);
      setIsRunning(false);
    };

    if (isRunning) {
      startTimer();
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleStopRecording = () => {
    stopRecording();
    setAnswer(true);
    handleStopClick();
    setCountdown(0);
    setTimeout(() => {
      console.log('API call made');
      setAnswer(false);
      setOfficerToogle(true);
    }, 6000);
  };

  const handleRetake = () => {
    setAnswer(false);
  };

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleStopClick = () => {
    setIsRunning(false);
  };

  const handleTimerEnd = () => {
    console.log('Timer has ended!');
    // Call your function here
    handleStopRecording();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  const playSound = () => {
    console.log('playSound got called');
    const sound = new Audio('/q1.mp3');
    sound.play();
  };

  useEffect(() => {
    const sound = new Audio('/q1.mp3');
    const timer = setTimeout(() => {
      sound.play();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // React.useEffect(() => {
  //   if (!recordingBlob) return;

  //   console.log(recordingBlob, 'recordingBlob');

  //   addAudioElement(recordingBlob);

  //   const audioBlob = new Blob([recordingBlob], { type: 'audio/wav' });

  //   console.log(audioBlob, 'audioBlob');

  //   // recordingBlob will be present at this point after 'stopRecording' has been called
  // }, [recordingBlob]);

  // const addAudioElement = (blob) => {
  //   const url = URL.createObjectURL(blob);
  //   const audio = document.createElement('audio');
  //   audio.src = url;
  //   audio.controls = true;
  //   document.body.appendChild(audio);
  // };

  const handleStartRecording = () => {
    startRecording();
    handleStartClick();
  };

  const renderer = ({ seconds }) => {
    return <span>{seconds}</span>;
  };

  return (
    <div className='flex sdm:flex-row flex-col p-4 gap-4 rounded-xl h-fit'>
      <div className='border sdm:w-[600px] w-full flex flex-col h-fit rounded-lg drop-shadow-xl bg-white'>
        <div className='flex justify-between gap-2 border-b p-4'>
          <div className=' flex gap-1.5 items-start sdm:items-center font-semibold'>
            <div>Q1: </div>
            <div>Why do you want the US student visa today?</div>
          </div>
          <div
            onClick={playSound}
            className='cursor-pointer w-fit'>
            <Image
              src='/speaker-on.svg'
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className='flex flex-col-reverse sdm:flex-row gap-4 justify-between p-4 pb-6'>
          <div
            className=' h-24 sdm:h-52 border outline-none rounded-md w-full p-2 text-xs text-gray-400'
            contentEditable='true'
            onInput={(e) =>
              console.log('Text inside div', e.currentTarget.textContent)
            }>
            {transcript?.text
              ? transcript.text
              : 'Use the microphone icon to answer the asked question and your answer will appear here in text format...'}
          </div>

          <div className='sdm:h-full flex flex-col gap-4 sdm:justify-between justify-around'>
            <div className='flex flex-col gap-2 w-full h-full sdm:w-60  border rounded-md p-3 bg-white'>
              <div className='flex items-center mx-1 justify-between'>
                <div className='text-xs'>Student</div>
                <div className='flex gap-6'>
                  <div
                    className='cursor-pointer'
                    onClick={handleCameraToogle}>
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
                        src='/up-arrow.svg'
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src='/down-arrow.svg'
                        width={18}
                        height={18}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* {cameraToogle && (
                <div className='sdm:hidden flex justify-center items-center border rounded-md w-full h-full'>
                  <Webcam stream={stream} />
                </div>
              )} */}
              {cameraToogle && !isDesktop && (
                <div className='flex justify-center items-center border rounded-md w-full h-full'>
                  <Webcam stream={stream} />
                </div>
              )}

              {isDesktop && (
                <div className='flex justify-center items-center border rounded-md w-full h-[159px]'>
                  {!cameraToogle || err ? (
                    <Image
                      className='my-16 sdm:my-10'
                      src='/talking-2.svg'
                      width={35}
                      height={35}
                    />
                  ) : (
                    <Webcam stream={stream} />
                  )}
                </div>
              )}

              {/* <div className='hidden sdm:flex justify-center items-center border rounded-md w-full h-full'>
                {cameraToogle ? (
                  <Image
                    className='my-16 sdm:my-10'
                    src='/talking-2.svg'
                    width={35}
                    height={35}
                  />
                ) : (
                  <Webcam stream={stream} />
                )}
              </div> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 px-4 pt-6 pb-8 w-full'>
          <div className='flex flex-col justify-center items-center gap-8'>
            {answer ? (
              <>
                <div
                  onClick={handleRetake}
                  class=' flex flex-col gap-1 text-sm h-30 w-30 cursor-pointer'>
                  <Image
                    src='/retake.svg'
                    width={40}
                    height={40}
                  />
                  <div>retake</div>
                </div>

                <div className='flex gap-1 font-bold'>
                  <span>Submistting for Feedback in</span>
                  <Countdown
                    date={Date.now() + 9000} // Example: 60 seconds from now
                    renderer={renderer}
                  />
                  <span>seconds</span>
                </div>
              </>
            ) : (
              <>
                {recording ? (
                  <div
                    onClick={handleStopRecording}
                    class=' flex h-30 w-30 p-2 bg-green-500 rounded-full shadow-lg cursor-pointer'>
                    <Image
                      src='/pause.svg'
                      width={40}
                      height={40}
                    />
                  </div>
                ) : (
                  <div
                    onClick={handleStartRecording}
                    class='relative flex h-30 w-30 cursor-pointer'>
                    <div class='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></div>
                    <div class='relative inline-flex shadow-lg rounded-full p-2 bg-red-500'>
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
            )}
          </div>

          {/* <button onClick={startRecording}>Stop recording</button>
          <button onClick={stopRecording}>Stop recording</button> */}

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
                src='/up-arrow.svg'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src='/down-arrow.svg'
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
                src='/up-arrow.svg'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src='/down-arrow.svg'
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
                src='/up-arrow.svg'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src='/down-arrow.svg'
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
