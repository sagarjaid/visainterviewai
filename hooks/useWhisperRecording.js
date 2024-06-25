import useWhisper from "@chengsokdara/use-whisper";

// try ro make you own audio npm

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
