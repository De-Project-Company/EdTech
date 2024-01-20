import React from 'react';
import Card from '../../cards/assessmentcard';
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6
} from '../../../libs/constants';

function page() {
  return (
    <div className="bg-[#4221B0] h-[515px] overflow-y-auto overflow-x-hidden py-[24px] px-[18px] rounded-[12px] mt-[24px] w-[940px] space-y-5">
      <Card {...card1} />
      <Card {...card2} />
      <Card {...card3} />
      <Card {...card4} />
      <Card {...card5} />
      <Card {...card6} />
    </div>
  );
}

export default page;
