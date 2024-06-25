import { useState, useEffect, useRef } from 'react';
import VisaInterview from '@/components/core/visaInterview';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useApiCall } from '@/hooks/useApiCall';

const DynamicPage = () => {
  const [loading, setLoading] = useState(true);
  const [baseInterviewQuestions, setBaseInterviewQuestions] = useState([]);
  const hasFetchedRef = useRef(false); // Ref to track if the questions have been fetched

  const router = useRouter();
  const { callApi } = useApiCall();

  const { id } = router.query;

  const getBaseQuestions = async () => {
    try {
      setLoading(true);
      const resData1 = await callApi('/api/getQuestionsx', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(resData1, 'resData1');

      const arr = JSON.parse(resData1?.result);

      console.log(arr, 'arr');
      setBaseInterviewQuestions(arr.balancedInterviewQuestionsArr);
      setLoading(false);
    } catch (error) {
      setBaseInterviewQuestions(
        [
          { "questionNumber": 1, "question": "What university are you planning to attend?", "questioncategory": "universityAndStudyPlans" },
          { "questionNumber": 2, "question": "What was your GPA during your bachelor's degree?", "questioncategory": "academicsHistory" },
          { "questionNumber": 3, "question": "Who will be paying for your education?", "questioncategory": "studentFinances" },
          { "questionNumber": 4, "question": "What is your current job title?", "questioncategory": "workExperience" },
          { "questionNumber": 5, "question": "Do you plan to work in the USA after graduating?", "questioncategory": "postGraduationPlans" },
          { "questionNumber": 6, "question": "Why did you choose this university?", "questioncategory": "universityAndStudyPlans" },
          { "questionNumber": 7, "question": "What funds will be used to pay for your studies?", "questioncategory": "studentFinances" },
          { "questionNumber": 8, "question": "Why did you take a gap year?", "questioncategory": "workExperience" },
          { "questionNumber": 9, "question": "Do you have any scholarship?", "questioncategory": "otherQuestions" }
        ]
      )
      setLoading(false);
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    if (id && !hasFetchedRef.current) { // Ensure `id` is available and questions haven't been fetched
      getBaseQuestions();
      hasFetchedRef.current = true; // Set the ref to true after fetching
    }
  }, [id]); // Only run when `id` changes

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
