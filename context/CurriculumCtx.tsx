'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface RegistrationData {
  courseTitle: string;
  courseOverview: string;
  learningObjective: string;
  level: string;
  date: string;
  ageLimit: number;
  description: string;
}

interface CurriculumCreationProps {
  registrationData: RegistrationData;
  setRegistrationData: React.Dispatch<React.SetStateAction<RegistrationData>>;
  create: () => void;
}

interface CurriculumCreationProviderProps {
  children: ReactNode;
}

const CurriculumCreationctx = createContext<
  CurriculumCreationProps | undefined
>(undefined);

export const CurriculumCreationProvider: React.FC<
  CurriculumCreationProviderProps
> = ({ children }) => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    courseTitle: '',
    courseOverview: '',
    level: '',
    date: '',
    ageLimit: 0,
    learningObjective: '',
    description: ''
  });

  // console.log('data', registrationData);

  const create = () => {
    //logic for creation
    // console.log('Registration data:', registrationData);
    toast.success('Registration successful!');

    // Reset the form data after registration
    setRegistrationData({
      courseTitle: '',
      courseOverview: '',
      learningObjective: '',
      level: '',
      date: '',
      ageLimit: 0,
      description: ''
    });
  };

  return (
    <CurriculumCreationctx.Provider
      value={{ registrationData, setRegistrationData, create }}
    >
      {children}
    </CurriculumCreationctx.Provider>
  );
};

export const useCurriculumCreationctx = () => {
  const context = useContext(CurriculumCreationctx);
  if (!context) {
    throw new Error(
      'useCurriculumCreation must be used within a CurriculumCreationProvider'
    );
  }
  return context;
};
