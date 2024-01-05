'use client';

import React from 'react';
import {
  StudentProgressTrackingData,
  StudentProgressTrackingOptions
} from '../../../libs/constants';
import LineChart from '../../charts/linechart';
import Card from '../../cards';

function chart() {
  return (
    <div className="flex-col flex max-h-[478px] ">
      <span className="text-[24px] font-bold mt-5">
        Students Progress Tracking
      </span>

      <div className="col-span-12 rounded-lg border border-stroke bg-white px-5 pt-7.5 pb-5 mt-5 sm:px-7.5 xl:col-span-8 hidden md:block">
        <Card extra="!p-[20px] text-center">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              <span className="block h-[32px] w-[32px]  rounded-lg bg-[#FF7252]"></span>
              <div className="w-full">
                <p className="font-semibold text-black">Female</p>
              </div>
            </div>
            <div className="flex min-w-47.5">
              <span className="block h-[32px] w-[32px]  rounded-lg bg-[#4221B0]"></span>
              <div className="w-full">
                <p className="font-semibold text-black">Male</p>
              </div>
            </div>
          </div>
          <LineChart
            chartOptions={StudentProgressTrackingOptions}
            chartData={StudentProgressTrackingData}
          />
        </Card>
      </div>
    </div>
  );
}

export default chart;
