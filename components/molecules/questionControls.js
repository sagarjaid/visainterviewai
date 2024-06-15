import Image from 'next/image';

import { usePageReload } from '@/hooks/usePageReload';

const QuestionControls = () => {
  const reloadPage = usePageReload();
  return (
    <div className='w-full flex justify-center items-center gap-3.5 text-sm'>
      <div className='px-3.5 py-1 text-center border bg-gray-100 cursor-pointer shadow-md rounded-md'>
        Previous Question
      </div>
      <div
        className='px-6 py-1 pb-2 text-center flex flex-col justify-center items-center w-fit bg-green-500 border cursor-pointer shadow-md rounded-full text-white'
        onClick={reloadPage}>
        <Image
          src='/end-call.svg'
          width={22}
          height={22}
        />
        <div>Get The Interview Results</div>
      </div>
      <div className='px-3.5 py-1 w-36 text-center border cursor-pointer shadow-sm rounded-md bg-white'>
        Next Question
      </div>
    </div>
  );
};

export default QuestionControls;
