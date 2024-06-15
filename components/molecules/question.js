import Image from 'next/image';

const Question = ({ questionNumber, question, handleTextToSpeech }) => {
  return (
    <div className='flex justify-between gap-2 border-b p-4'>
      <div className=' flex gap-1.5 items-start sdm:items-center font-semibold'>
        <div>Q{questionNumber}:</div>
        <div>{question}</div>
      </div>
      <div className='flex gap-2 items-center'>
        <div
          onClick={() => handleTextToSpeech(question)}
          className='cursor-pointer w-fit'>
          <Image
            src='/speaker-on.svg'
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
