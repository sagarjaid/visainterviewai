import useWhisper from '@chengsokdara/use-whisper';

export const useWhisperRecording = (key) => {
  const { recording, transcript, startRecording, stopRecording } = useWhisper({
    apiKey: key,
    removeSilence: true,
    stopTimeout: 120000,
    streaming: true,
  });

  return {
    recording,
    transcript,
    startRecording,
    stopRecording,
  };
};
