import {
  type Icon,
  Medal,
  Receipt2,
  Keyboard,
  Note1,
  Briefcase,
  Message,
  Award,
  Candle,
  Book,
  Rank,
  HomeHashtag,
  Notepad,
  ArchiveBook
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

// Student sidebar

export const SIDEBAR_STUDENT_LINKS: SidebarteachersProps[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: HomeHashtag,
    link: 'dashboard'
  },
  {
    id: 2,
    label: 'Course',
    icon: Book,
    link: 'courses'
  },
  {
    id: 3,
    label: 'Learning Plan',
    icon: Notepad,
    link: 'plan'
  },
  {
    id: 4,
    label: 'Exam & Result',
    icon: Award,
    link: 'results'
  },
  {
    id: 5,
    label: 'Resources',
    icon: Briefcase,
    link: 'resources'
  },
  {
    id: 6,
    label: 'Chats',
    icon: Message,
    link: 'messages'
  },
  {
    id: 7,
    label: 'Settings',
    icon: Candle,
    link: 'settings'
  }
];

export const TYPESidebarLinks = SIDEBAR_teachers_LINKS.map(link => link.link);
export const TYPESidebarLinksMod = SIDEBAR_STUDENT_LINKS.map(link => link.link);

// CardData.tsx

export const card1 = {
  icon: ArchiveBook,
  header: 'Course A',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  subtext: 'Subtext goes here.',
  buttonText: 'Click me'
};

export const card2 = {
  icon: ArchiveBook,
  header: 'Angular Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  subtext: 'Subtext goes here.',
  buttonText: 'Click me'
};

export const card3 = {
  icon: ArchiveBook,
  header: 'Vue.js Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  buttonText: 'Click me'
};

export const card4 = {
  icon: ArchiveBook,
  header: 'HTML5 Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  buttonText: 'Click me'
};

export const card5 = {
  icon: ArchiveBook,
  header: 'CSS3 Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',

  buttonText: 'Click me'
};

export const card6 = {
  icon: ArchiveBook,
  header: 'JavaScript Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',

  buttonText: 'Click me'
};
