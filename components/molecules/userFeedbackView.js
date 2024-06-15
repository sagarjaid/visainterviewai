import Image from 'next/image';
import CameraControls from './cameraControls';
import DisplayText from '../atoms/displayText';
import Webcam from './webcam';

import { useWebcam } from '@/hooks/useWebcam';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

const UserFeedbackView = ({ userAnswer }) => {
  console.log(userAnswer, 'userAnswer');

  const { err, stream, cameraToggle, handleCameraToggle, handleUpNDown } =
    useWebcam();
  const { isMobile, isDesktop, isTablet } = useDeviceDetection();

  console.log(stream, 'stream');

  return (
    <div className='flex flex-col-reverse sdm:flex-row gap-4 justify-between p-4 pb-6'>
      <DisplayText text={userAnswer} />

      <div className='sdm:h-full flex flex-col gap-4 sdm:justify-between justify-around'>
        <div className='flex flex-col gap-2 w-full h-full min-w-60 border rounded-md p-3 bg-white'>
          <CameraControls
            toggle={cameraToggle}
            handleToggle={handleCameraToggle}
            isMobile={isMobile}
            handleUpNDown={handleUpNDown}
          />

          {cameraToggle && !isDesktop && !isTablet && (
            <div className='flex justify-center items-center border rounded-md w-full h-full'>
              <Image
                className='my-16 sdm:my-10'
                src='/talking-2.svg'
                width={35}
                height={35}
              />
            </div>
          )}

          {(isDesktop || isTablet) && !isMobile && (
            <div className='flex justify-center items-center rounded-md w-full h-[159px]'>
              {!cameraToggle || err || !stream ? (
                <div className='flex justify-center items-center rounded-md border w-full h-full'>
                  <Image
                    src='/talking-2.svg'
                    width={35}
                    height={35}
                  />
                </div>
              ) : (
                <div className='w-52 h-[159px]'>
                  <Webcam stream={stream} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserFeedbackView;
