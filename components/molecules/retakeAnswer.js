import Image from 'next/image';

const RetakeAnswer = ({ handleRetake }) => {
  return (
    <div
      onClick={handleRetake}
      className='flex flex-col gap-1 justify-center items-center h-30 w-30 cursor-pointer'>
      <div className='border-2 border-black px-2 pt-1.5 pb-2 rounded-full'>
        <Image
          src='/retake.svg'
          width={30}
          height={30}
        />
      </div>
      <div className='text-xs'>retake answer</div>
    </div>
  );
};

export default RetakeAnswer;
