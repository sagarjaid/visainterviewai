import Image from 'next/image';

import { usePageReload } from '@/hooks/usePageReload';

const QuestionControls = ({
  handleNextQuestion,
  currentQuestionIndex,
  totalQuestions,
  handleResult,
}) => {
  const reloadPage = usePageReload();

  return (
    <div className='w-full flex flex-col justify-center items-center gap-4 text-sm'>
      {currentQuestionIndex < totalQuestions ? (
        <div
          className='px-3.5 py-1.5 w-36 text-center border cursor-pointer hover:bg-slate-100 shadow-sm rounded-md bg-white'
          onClick={handleNextQuestion}>
          Next Question
        </div>
      ) : (
        <div
          className='px-3.5 py-1.5 w-fit text-center border border-green-200 hover:bg-green-200 cursor-pointer shadow-sm rounded-md bg-green-100'
          onClick={handleResult}>
          End the Interview and get Results
        </div>
      )}
    </div>
  );
};

export default QuestionControls;
