import React from 'react';
import Image from 'next/image';
import { Activity, ArchiveBook, BookSaved } from 'iconsax-react';
import Greetings from './greeting';
import { CircularProgress } from '@nextui-org/react';

const TopCard = () => {
  const upcomingLesson = 20;
  const pendingAssignment = 3;
  const recentAct = 20;
  const userName = 'Phoenix';
  return (
    <>
      <Greetings name={userName} />
      <section className="">
        <div className="flex flex-wrap justify-between w-full mt-5">
          <div className="lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <div className="flex flex-col gap-3 justify-between">
              <div className=" content-center items-center justify-center bg-[#FFF2DD] w-16 h-16 rounded-full hidden md:flex">
                <ArchiveBook
                  color="#662500"
                  size={35}
                  aria-hidden
                  variant="Bold"
                  className="hidden md:flex"
                />
              </div>
              <span
                className={` text-2xl md:text-[32px] md:leading-[40px] font-bold  `}
              >
                {upcomingLesson}
              </span>
              <span className="text-base md:text-xl text-[#707070] ">
                Upcoming Lessons
              </span>
            </div>
          </div>
          <div className="lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <div className="flex flex-col gap-3 justify-between">
              <div className="content-center items-center justify-center bg-[#D7FAFF] w-16 h-16 rounded-full hidden md:flex">
                <BookSaved
                  color="#003D62"
                  size={35}
                  variant="Bold"
                  aria-hidden
                  className="hidden md:flex"
                />
              </div>
              <span
                className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold `}
              >
                {pendingAssignment}
              </span>
              <span className="text-base md:text-xl text-[#707070] ">
                Pending Assignments
              </span>
            </div>
          </div>

          <div className="lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <div className="flex flex-col gap-3 justify-between">
              <div className="hidden md:flex content-center items-center justify-center bg-[#FFDBFA] w-16 h-16 rounded-full">
                <Activity
                  color="#6B036A"
                  size={35}
                  variant="Bold"
                  aria-hidden
                  className="hidden md:flex"
                />
              </div>
              <span
                className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold  `}
              >
                {recentAct}
              </span>
              <span className="text-base md:text-xl text-[#707070] ">
                Recent student activity
              </span>
            </div>
          </div>
          <div className="lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <CircularProgress
              classNames={{
                svg: 'w-36 h-36 drop-shadow-md',
                indicator: 'stroke-[#351A8D]',
                track: 'stroke-[#D9D3EF]',
                value: 'text-3xl font-semibold text-[#351A8D]'
              }}
              value={70}
              strokeWidth={4}
              showValueLabel={true}
            />
            <div className="flex flex-col my-7 justify-between">
              <span className="text-[28px] text-[#707070] md:text-xl">
                Meta
              </span>
              <span
                className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold  `}
              >
                Metric
              </span>
            </div>
            <button>
              <Image src="/Dotted.svg" height={48} width={48} alt="dotted" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCard;
