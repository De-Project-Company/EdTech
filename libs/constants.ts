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
    link: 'chat'
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

export const StudentProgressTrackingData = [
  {
    name: 'Female',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    color: '#FF7252'
  },
  {
    name: 'Male',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    color: '#4221B0'
  }
];

export const StudentProgressTrackingOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left'
  },

  chart: {
    type: 'line',

    toolbar: {
      show: false
    }
  },

  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },

  // tooltip: {
  //   style: {
  //     fontSize: '12px',
  //     fontFamily: undefined,
  //     backgroundColor: '#000000'
  //   },
  //   x: {
  //     format: 'dd/MM/yy HH:mm'
  //   }
  // },
  grid: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500'
      }
    },
    type: 'text',
    range: undefined,
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug'
    ]
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px'
      }
    },
    min: 0,
    max: 100
  }
};
