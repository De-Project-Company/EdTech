import React from 'react';
import TopCard from '../../../components/teacher/assessments';
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6
} from '../../../libs/constants';
import Card from '../../../components/cards/assessmentcard';

const Assessments = () => {
  return (
    <>
      <section className="xl:pl-[70px] xl:pt-[41px] xl:pr-[30px] flex-col justify-between gap-2">
        <TopCard />
        <div className="mt-[37px]">
          <h2 className="text-[24px] font-medium leading-[128%]">
            Upcoming Assessments
          </h2>
          <div className="bg-[#F2EFFF] py-[24px] px-[18px] rounded-[12px] mt-[24px] w-[940px] ">
            <Card {...card1} />
            <Card {...card2} />
            <Card {...card3} />
            <Card {...card4} />
            <Card {...card5} />
            <Card {...card6} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Assessments;
