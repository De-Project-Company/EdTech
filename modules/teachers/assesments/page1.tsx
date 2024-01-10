'use client';

import React from 'react';
import { Input } from '@ui/Input';
import Image from 'next/image';
import { useCreationCtx } from '../../../context/CreationCtx';

const Page1: React.FC = () => {
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
              Title:
            </label>
            <Input
              type="text"
              name="courseTitle"
              value={AssessmentsCreationData.Tittle}
              placeHolder="course tittle"
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Assessment type
            </label>
            <Input
              type="text"
              name="courseOverview"
              value={AssessmentsCreationData.Assessmenttype}
              onChange={handleChange}
              placeHolder="course overview"
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Description
            </label>
            <textarea
              name="learningObjective"
              value={AssessmentsCreationData.description}
              onChange={handleChange}
              placeholder="Learning objective"
              className="outline-none focus:border-primary border-2 p-2 rounded-lg h-[200px] resize-none"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Due Date:
            </label>
            <Input
              type="text"
              name="courseOverview"
              value={AssessmentsCreationData.dueDate}
              onChange={handleChange}
              placeHolder="course overview"
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Maximum Points
            </label>
            <Input
              type="text"
              name="courseOverview"
              value={AssessmentsCreationData.maxpoint}
              onChange={handleChange}
              placeHolder="course overview"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
