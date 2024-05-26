import Interviewx from '@/components/interviewx';
import Interview from '@/components/interview';
import Interview2 from '@/components/interview-2';
import Interviewx2 from '@/components/interviewx-2';

export default function Home() {
  return (
    <main className='h-full my-10 flex flex-col justify-center bg-stone-50 items-center'>
      <Interview />
      <Interview2 />
      <Interviewx />
      <Interviewx2 />
    </main>
  );
}
