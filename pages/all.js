import Interview from '@/components/interview';
import Interviewx2 from '@/components/interviewx-2';

export default function Home() {
  return (
    <main className='h-full py-10 flex flex-col justify-center bg-stone-50 items-center'>
      <Interview />
      <Interviewx2 />
    </main>
  );
}
