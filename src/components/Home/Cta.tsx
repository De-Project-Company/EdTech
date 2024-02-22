import Image from 'next/image';
import ctaOne from '@/public/cta1.png';
import ctaTwo from '@/public/cta2.png';
import ctaThr from '@/public/cta3.png';

export default function Cta() {
  return (
    <div className="w-full py-32 bg-white text-black">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full md:w-6/12">
          <div className="columns-1 md:columns-2 [&>img:not(:first-child)]:mt-5 md:[&>img:not(first-child)]:mt-8">
            <Image
              src="/cta1.png"
              height={341}
              width={333}
              alt=""
              className=""
            />
            <Image
              src="/cta2.png"
              height={255}
              width={260}
              alt=""
              className="hidden md:block"
            />
            <Image
              src="/cta3.png"
              height={322}
              width={648}
              alt=""
              className="hidden md:block"
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 flex items-center">
          <div>
            <span className="flex items-center gap-1 mb-2">
              <hr className="w-4 h-0.5 bg-[#4221B0]" />
              <span className="text-[#4221B0] font-bold text-[12px] md:text-base">
                Better Educational Administration future with us!
              </span>
              <hr className="w-4 h-0.5 bg-[#4221B0]" />
            </span>
            <h1 className="font-bold text-lg md:text-4xl">
              Revolutionize the way you manage your school’s administration.
            </h1>
            <p className="my-9">
              Register today and experience the power of starters Ed-Management
              in transforming administrative tasks into streamlined, efficient
              processes.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#4221B0] text-white rounded-md py-2 px-6">
                Register
              </button>
              <button className="border border-[#4221B0] text-[#4221B0] py-2 px-6 rounded-md">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
