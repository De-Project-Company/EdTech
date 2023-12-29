import {
  Category,
  type Icon,
  Medal,
  Receipt2,
  Keyboard,
  People,
  Note1,
  Candle,
  Personalcard,
  Notification,
  AddCircle,
  Rank,
  HomeHashtag
} from 'iconsax-react';

import { SidebarteachersProps } from '../@types';

export const SIDEBAR_teachers_LINKS: SidebarteachersProps[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: HomeHashtag,
    link: 'teachers-dashboard'
  },

  {
    id: 3,
    label: 'Assessments',
    icon: Medal,
    link: 'teachers-assessments'
  },
  {
    id: 4,
    label: 'Classes',
    icon: Keyboard,
    link: 'teachers-classes'
  },
  {
    id: 5,
    label: 'Reports',
    icon: Rank,
    link: 'teachers-reports'
  },
  {
    id: 6,
    label: 'Student Fees',
    icon: Receipt2,
    link: 'teachers-student-fees'
  },
  {
    id: 7,
    label: 'Library',
    icon: Note1,
    link: 'teachers-library'
  },

  {
    id: 9,
    label: 'Settings',
    icon: Candle,
    link: 'teachers-settings'
  }
];
