import Image from 'next/image';
import avatar from '@/public/cta2.png';
import ReviewCard from '../ReviewCard';

export default function Reviews() {
  return (
    <div className="w-full py-32 bg-indigo-50 overflow-hidden relative">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className="w-11/12 mx-auto">
        <div className="w-full md:w-8/12 mx-auto text-center">
          <h1 className="font-bold text-lg md:text-4xl text-[#1A0D46]">
            What Schools Using Starters Ed-Management Have to Say About Us
          </h1>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
