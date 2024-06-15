import { useEffect, useRef } from 'react';

const Webcam = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    } else if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, [stream]);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        className='w-full h-full rounded-md transform scale-x-[-1]'
      />
    </div>
  );
};

export default Webcam;
