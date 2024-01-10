'use client';

import React from 'react';
import { Input } from '@ui/Input';
import Image from 'next/image';
import { useCreationCtx } from '../../../context/CreationCtx';

const Page2: React.FC = () => {
  const { CurriculumCreationData, setCurriculumCreationData } =
    useCreationCtx();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurriculumCreationData(prevData => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[681px] h-[677px]">
        <div className="flex flex-col items-center justify-center h-[327px]">
          <Image src="/teacher/Book.svg" alt="logo" width={100} height={100} />
          <h2 className="text-[38px] font-semibold leading-[36px]">
            Curriculum Creation
          </h2>
        </div>
        <div className="flex-col flex">
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Course Title:
            </label>
            <Input
              type="text"
              name="courseTitle"
              value={CurriculumCreationData.courseTitle}
              placeHolder="course tittle"
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              Course Overview:
            </label>
            <Input
              type="text"
              name="courseOverview"
              value={CurriculumCreationData.courseOverview}
              onChange={handleChange}
              placeHolder="course overview"
              className="w-full"
            />
          </div>
          <div className="flex-col flex mb-4">
            <label className="text-[14px] leading-[28px] font-medium text-black">
              {' '}
              Learning Objective:
            </label>
            <textarea
              name="learningObjective"
              value={CurriculumCreationData.learningObjective}
              onChange={handleChange}
              placeholder="Learning objective"
              className="active:border-primary focus-within:border-primary border-2 p-2 rounded-lg h-[200px] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
