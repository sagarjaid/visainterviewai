import VisaInterview from '@/components/core/visaInterview';
import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='flex justify-center mt-12 h-screen '>
      <VisaInterview />
    </div>
  );
};

export default DynamicPage;
