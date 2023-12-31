import {
  type Icon,
  Medal,
  Receipt2,
  Keyboard,
  Note1,
  Candle,
  Rank,
  HomeHashtag
} from 'iconsax-react';

import { SidebarteachersProps, Notification } from '../@types';
import { useState } from 'react';

export const SIDEBAR_teachers_LINKS: SidebarteachersProps[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: HomeHashtag,
    link: 'teachers-dashboard'
  },

  {
    id: 2,
    label: 'Assessments',
    icon: Medal,
    link: 'teachers-assessments'
  },
  {
    id: 3,
    label: 'Classes',
    icon: Keyboard,
    link: 'teachers-classes'
  },
  {
    id: 4,
    label: 'Reports',
    icon: Rank,
    link: 'teachers-reports'
  },
  {
    id: 5,
    label: 'Student Fees',
    icon: Receipt2,
    link: 'teachers-student-fees'
  },
  {
    id: 6,
    label: 'Library',
    icon: Note1,
    link: 'teachers-library'
  },

  {
    id: 7,
    label: 'Settings',
    icon: Candle,
    link: 'teachers-settings'
  }
];
