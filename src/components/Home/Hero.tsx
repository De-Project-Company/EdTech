import Image from 'next/image';
import Link from 'next/link';
import frameOne from '@/public/frame1.png';
import frameTwo from '@/public/frame2.png';
import frameThr from '@/public/frame3.png';

export default function Hero() {
  return (
    <div className="w-full pt-32 md:pt-20">
      <div className="w-full flex flex-col md:flex-row h-screen justify-between gap-5 md:gap-0">
        <div className="md:ms-12 w-11/12 mx-auto md:mx-0 md:w-5/12 flex flex-col justify-center">
          <div className="mb-6">
            <span className="flex items-center gap-1 mb-2">
              <hr className="w-4 h-0.5 bg-[#4221B0]" />
              <span className="text-[#4221B0] font-bold text-[12px] md:text-base">
                Better Educational Administration future with us!
              </span>
              <hr className="w-4 h-0.5 bg-[#4221B0]" />
            </span>
            <h1 className="font-bold text-[#1A0D46] text-lg md:text-4xl">
              Empower Your School Administration with Starters Management
            </h1>
          </div>

          <p className="mb-10 text-[#666666] text-base md:text-lg">
            Streamline, Organize, and Thrive in Educational Management
          </p>

          <div>
            <Link
              href={'#'}
              className="bg-[#4221B0] rounded-md text-white py-2 px-6"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-full md:w-6/12 hero-banner h-full">
          <div className="w-full h-full flex justify-center relative">
            <Image
              src={frameThr}
              className="h-full w-10/12 object-cover object-top"
              alt=""
            />
            <div className="h-4/6 w-full absolute top-[18%] flex flex-col justify-between">
              <div className="w-full flex justify-center">
                <div className="w-9/12 mx-auto flex justify-between">
                  <div className="bg-white rounded-2xl px-4 py-2 flex justify-center relative border border-black">
                    <div className="bg-black text-white rounded-full absolute px-1 top-[-12px] ">
                      M
                    </div>
                    <div className="flex flex-col items-center mt-3">
                      <span className="text-sm">Over</span>
                      <span className="text-xl text-[#4221B0] font-bold">
                        1023
                      </span>
                      <span className="text-sm">Users</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl px-4 py-2 flex justify-center relative border border-black">
                    <div className="bg-black text-white rounded-full absolute px-1 top-[-12px] ">
                      M
                    </div>
                    <div className="flex flex-col items-center mt-3">
                      <span className="text-sm">Over</span>
                      <span className="text-xl text-[#4221B0] font-bold">
                        1023
                      </span>
                      <span className="text-sm">Users</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-11/12 mx-auto flex justify-between">
                  <div className="bg-[#4221B0] text-white rounded-2xl px-4 py-2 flex justify-center relative border">
                    <div className="bg-black text-white rounded-full absolute px-1 top-[-12px] ">
                      M
                    </div>
                    <div className="flex flex-col items-center mt-3">
                      <span className="text-sm">Over</span>
                      <span className="text-xl text-white font-bold">1023</span>
                      <span className="text-sm">Users</span>
                    </div>
                  </div>

                  <div className="bg-[#4221B0] text-white rounded-2xl px-4 py-2 flex justify-center relative border">
                    <div className="bg-black text-white rounded-full absolute px-1 top-[-12px] ">
                      M
                    </div>
                    <div className="flex flex-col items-center mt-3">
                      <span className="text-sm">Over</span>
                      <span className="text-xl text-white font-bold">1023</span>
                      <span className="text-sm">Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
