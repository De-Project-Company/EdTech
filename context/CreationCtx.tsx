'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
import Assessments from '../app/(Teachers)/teachers-assessments/page';

interface CurriculumCreationData {
  courseTitle: string;
  courseOverview: string;
  learningObjective: string;
  level: string;
  date: string;
  ageLimit: number;
  description: string;
}

interface AssessmentsCreationData {
  Tittle: string;
  Assessmenttype: string;
  description: string;
  dueDate: string;
  maxpoint: number;
  CriterionName: string;
  GradingGuidline: string;
  PointValue: string;
  ScoringScale: string;
  Publiclink: string;
}

interface CreationProps {
  CurriculumCreationData: CurriculumCreationData;
  setCurriculumCreationData: React.Dispatch<
    React.SetStateAction<CurriculumCreationData>
  >;
  CreateCurriculum: () => void;
  AssessmentsCreationData: AssessmentsCreationData;
  setAssessmentsCreationData: React.Dispatch<
    React.SetStateAction<AssessmentsCreationData>
  >;
  CreateAssessments: () => void;
}

interface CreationProvider {
  children: ReactNode;
}

const CreationCtx = createContext<CreationProps | undefined>(undefined);

export const CreationProvider: React.FC<CreationProvider> = ({ children }) => {
  const [AssessmentsCreationData, setAssessmentsCreationData] =
    useState<AssessmentsCreationData>({
      Tittle: '',
      Assessmenttype: '',
      description: '',
      dueDate: '',
      maxpoint: 0,
      CriterionName: '',
      GradingGuidline: '',
      PointValue: '',
      ScoringScale: '',
      Publiclink: ''
    });

  const CreateAssessments = () => {
    //logic for creation
    // console.log('Creation data:', CurriculumCreationData);
    toast.success('Creation successful!');

    // Reset the form data after Creation
    setCurriculumCreationData({
      courseTitle: '',
      courseOverview: '',
      learningObjective: '',
      level: '',
      date: '',
      ageLimit: 0,
      description: ''
    });
  };

  const [CurriculumCreationData, setCurriculumCreationData] =
    useState<CurriculumCreationData>({
      courseTitle: '',
      courseOverview: '',
      level: '',
      date: '',
      ageLimit: 0,
      learningObjective: '',
      description: ''
    });

  // console.log('data', CurriculumCreationData);

  const CreateCurriculum = () => {
    //logic for creation
    // console.log('Creation data:', CurriculumCreationData);
    toast.success('Creation successful!');

    // Reset the form data after Creation
    setCurriculumCreationData({
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
    <CreationCtx.Provider
      value={{
        CurriculumCreationData,
        setCurriculumCreationData,
        CreateCurriculum,
        AssessmentsCreationData,
        setAssessmentsCreationData,
        CreateAssessments
      }}
    >
      {children}
    </CreationCtx.Provider>
  );
};

export const useCreationCtx = () => {
  const context = useContext(CreationCtx);
  if (!context) {
    throw new Error('useCreation must be used within a CreationProvider');
  }
  return context;
};
