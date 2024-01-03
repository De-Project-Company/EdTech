import React from 'react';
import { Activity, ArchiveBook, BookSaved } from 'iconsax-react';
import Greetings from '../dashboard/greeting';

const TopCard = () => {
  const upcomingLesson = 100;
  const pendingAssignment = 200;
  const recentAct = 400;
  const userName = 'Phoenix';
  return (
    <>
      <Greetings name={userName} />
      <section className="">
        <div className="flex flex-wrap justify-between w-[600px] mt-5">
          <div className="lg:max-w-none flex flex-shrink-0 justify-between w-[196px] h-[176px] p-2 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <div className="flex flex-col gap-3 justify-between">
              <div className=" content-center items-center justify-center bg-[#FFF2DD] w-[50px] h-[50px] rounded-full hidden md:flex">
                <ArchiveBook
                  color="#662500"
                  size={35}
                  aria-hidden
                  variant="Bold"
                  className="hidden md:flex"
                />
              </div>
              <span className="text-base md:text-xl text-[#707070] ">
                Assignments
              </span>
              <span
                className={` text-2xl md:text-[32px] md:leading-[40px] font-bold  `}
              >
                {upcomingLesson}
              </span>
            </div>
          </div>
          <div className="lg:max-w-none flex flex-shrink-0 justify-between w-[196px] h-[176px] p-2 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <div className="flex flex-col gap-3 justify-between">
              <div className="content-center items-center justify-center bg-[#D7FAFF] w-[50px] h-[50px] rounded-full hidden md:flex">
                <BookSaved
                  color="#003D62"
                  size={35}
                  variant="Bold"
                  aria-hidden
                  className="hidden md:flex"
                />
              </div>
              <span className="text-base md:text-xl text-[#707070] ">
                Quizzes
              </span>
              <span
                className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold `}
              >
                {pendingAssignment}
              </span>
            </div>
          </div>

          <div className="lg:max-w-none flex flex-shrink-0 justify-between w-[196px] h-[176px] p-2 rounded-lg whitespace-nowrap border bordder-[#707070]">
            <div className="flex flex-col gap-3 justify-between">
              <div className="hidden md:flex content-center items-center justify-center bg-[#FFDBFA] w-[50px] h-[50px] rounded-full">
                <Activity
                  color="#6B036A"
                  size={35}
                  variant="Bold"
                  aria-hidden
                  className="hidden md:flex"
                />
              </div>
              <span className="text-base md:text-xl text-[#707070] ">
                Tests
              </span>
              <span
                className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold  `}
              >
                {recentAct}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCard;
