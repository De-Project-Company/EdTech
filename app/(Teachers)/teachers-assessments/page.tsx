'use client';

import React, { useState } from 'react';
import TopCard from '../../../components/teacher/assessments';
import Upcoming from '../../../components/teacher/assessments/upcoming';
import Ongoing from '../../../components/teacher/assessments/ongoing';

const Assessments = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing'>(
    'upcoming'
  ); // Updated state value

  const handleTabClick = (tab: 'upcoming' | 'ongoing') => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="xl:pl-[70px] xl:pt-[41px] xl:pr-[30px] flex-col justify-between gap-2">
        <TopCard />

        <div className="container mx-auto mt-8">
          <div className="flex space-x-4 font-[24px]">
            <button
              className={`${
                activeTab === 'ongoing'
                  ? 'text-black font-medium text-[24px] border-b-[4px] border-[#994431] '
                  : 'text-[#D1D1D1] text-[24px]'
              } px-4 py-2 rounded`}
              onClick={() => handleTabClick('ongoing')}
            >
              Ongoing
            </button>
            <button
              className={`${
                activeTab === 'upcoming'
                  ? 'text-black font-medium border-b-[4px] border-[#994431] text-[24px] '
                  : 'text-[#D1D1D1] text-[24px]'
              } px-4 py-2 rounded`}
              onClick={() => handleTabClick('upcoming')}
            >
              Upcoming
            </button>
          </div>

          <div className="mt-4">
            {activeTab === 'ongoing' && (
              <div>
                <Ongoing />
              </div>
            )}
            {activeTab === 'upcoming' && (
              <div>
                <Upcoming />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Assessments;
