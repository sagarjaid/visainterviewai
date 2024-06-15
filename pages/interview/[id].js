import { useState, useEffect } from 'react';
import VisaInterview from '@/components/core/visaInterview';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useApiCall } from '@/hooks/useApiCall';

const DynamicPage = () => {
  const [loading, setLoading] = useState(true);
  const [baseInterviewQuestions, setBaseInterviewQuestions] = useState([]);

  const router = useRouter();
  const { callApi } = useApiCall();

  const { id } = router.query;

  const getBaseQuestions = async () => {
    try {
      setLoading(true);
      const resData1 = await callApi('/api/getQuestions', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(resData1, 'resData1');

      const arr = JSON.parse(resData1?.result);

      console.log(arr, 'arr');
      setBaseInterviewQuestions(arr.balancedInterviewQuestionsArr);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getBaseQuestions();
  }, []);

  // useEffect(() => {
  //   if (!baseInterviewQuestions) {
  //     getBaseQuestions();
  //   }
  // }, [baseInterviewQuestions]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  console.log(baseInterviewQuestions, 'baseInterviewQuestions');
  return (
    <>
      {loading ? (
        <div className='flex gap-2  justify-center items-center h-screen'>
          <Image
            src='/loading.gif'
            width={20}
            height={20}
          />
          <div>loading new interview...</div>
        </div>
      ) : (
        <div className='flex justify-center mt-12 h-screen'>
          <VisaInterview baseInterviewQuestions={baseInterviewQuestions} />
        </div>
      )}
    </>
  );
};

export default DynamicPage;
