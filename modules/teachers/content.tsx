'use client';

import cn from '../../utils/twcx';
import students from './student';
import React, { useState } from 'react';
import Link from 'next/link';
import { Suspense } from 'react';
import Tableskeleton from './skeleton';
import { getArrowIndicator } from '../../utils';

function Content() {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const handleStatusFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatusFilter(event.target.value === 'all' ? null : event.target.value);
  };

  const filteredStudents = statusFilter
    ? students.filter(student => student.status === statusFilter)
    : students;

  const totalStudents = students.length;

  const [isDdOpen, setIsDdOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <>
      <section
        className={cn(
          'w-full hidden lg:flex flex-col justify-center my-6 rounded-xl border border-gray-200 mt-10 2xl:mt-16 max-w-[775px] max-h-[418px]'
        )}
      >
        <div className="w-full flex items-center justify-between px-5 py-2">
          <h2 className="text-lg font-medium leading-[28.8px] text-black">
            Total students: <span>{totalStudents}</span>
          </h2>

          <div>
            <select
              className="select-container border border-transparent focus-within:border-transparent font-medium active:border-none text-[16px]"
              onChange={handleStatusFilterChange}
            >
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Probation">Probation</option>
            </select>
          </div>
        </div>
        <div className="flex flex-nowrap items-center   w-full h-[56px] border-b border-gray-200 ">
          <span className="  w-full px-1 max-w-[56px] flex items-center justify-center h-full"></span>

          <span className=" font-medium w-full max-w-[167px]  flex items-center justify-center h-full pl-2">
            Name
          </span>
          <span className=" font-medium w-full max-w-[101px] flex items-center  h-full text-center justify-center">
            Status
          </span>
          <span className=" font-medium w-full max-w-[97px] flex items-center justify-center h-full">
            Grade
          </span>
          <span className=" font-medium w-full max-w-[217px] flex items-center justify-center h-full">
            Email
          </span>
          <span className=" font-medium w-full max-w-[97px] flex items-center justify-center h-full">
            Details
          </span>
        </div>
        <div className="flex w-full h-[400px] hide-scroll overflow-y-auto flex-col">
          {filteredStudents.map((student, index) => (
            <Suspense key={student.id} fallback={<Tableskeleton />}>
              <div
                key={student.id}
                className={cn(
                  'flex flex-nowrap  items-center  w-full h-[70px]  border-b border-gray-200 py-1 transition-all duration-300'
                )}
              >
                <span
                  className="w-full max-w-[60px]  justify-center h-full flex items-center px-1 "
                  key={index}
                >
                  <span className=" flex items-center justify-center w-8 h-8 rounded-full bg-[#e1e1e1]">
                    {index + 1}
                  </span>
                </span>
                <span className="text-[16px] w-full max-w-[167px] flex items-center justify-center  h-full text-center">
                  {student.name}
                </span>
                <span className="w-full max-w-[101px] flex items-center justify-center   h-full">
                  <span
                    className={cn('px-2 py-1 rounded-xl', {
                      'bg-[#006C43] text-white': student.status === 'Active',
                      'bg-[#9E4200] text-white': student.status === 'Probation',
                      'bg-[#A50000] text-white': student.status === 'Inactive'
                    })}
                  >
                    {student.status}
                  </span>
                </span>
                <span className="text-[16px] w-full max-w-[97px] flex items-center justify-center  h-full text-center">
                  {student.grades}% {getArrowIndicator(student.grades)}
                </span>
                <span className="text-[16px] w-full max-w-[217px] flex items-center justify-center h-full pl-2">
                  {student.email}
                </span>
                <span className="text-[16px] w-full max-w-[97px] flex items-center justify-center  h-full text-center">
                  <Link
                    className="text-[16px]  "
                    href={`/student/${student.id}`}
                  >
                    Details
                  </Link>
                </span>
              </div>
            </Suspense>
          ))}
        </div>
      </section>
    </>
  );
}

export default Content;
