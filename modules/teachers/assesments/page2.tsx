'use client';

import React from 'react';
import { Input } from '@ui/Input';
import Image from 'next/image';
import { useCreationCtx } from '../../../context/CreationCtx';

const Page2: React.FC = () => {
  const { AssessmentsCreationData, setAssessmentsCreationData } =
    useCreationCtx();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAssessmentsCreationData((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-[681px] h-[677px]">
        <div className="flex flex-col items-center justify-center h-[327px]">
          <Image src="/teacher/grade.svg" alt="logo" width={100} height={100} />
          <h2 className="text-[38px] font-semibold leading-[36px]">
            Assessment Creation
          </h2>
        </div>
        <div className="flex-col flex">
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Criterion Name
            </label>
            <Input
              type="text"
              name="courseTitle"
              value={AssessmentsCreationData.CriterionName}
              placeHolder="Criterion Name"
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Description/Guidlines
            </label>
            <textarea
              name="courseOverview"
              value={AssessmentsCreationData.GradingGuidline}
              onChange={handleChange}
              placeholder="Description/Guidlines"
              className="outline-none focus:border-primary border-2 p-2 rounded-lg h-[200px] resize-none"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Point Value
            </label>
            <Input
              name="Point Value"
              value={AssessmentsCreationData.PointValue}
              onChange={handleChange}
              placeholder="Learning objective"
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Scoring Scale
            </label>
            <Input
              name="Scoring Scale"
              value={AssessmentsCreationData.ScoringScale}
              onChange={handleChange}
              placeholder="Learning objective"
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Rubic Link/ Attachment
            </label>
            <textarea
              name="learningObjective"
              value={AssessmentsCreationData.Publiclink}
              onChange={handleChange}
              placeholder="Rubic Link/ Attachment "
              className="outline-none focus:border-primary border-2 p-2 rounded-lg h-[200px] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
