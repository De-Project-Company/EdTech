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
  ArchiveBook,
  Messages,
  Messages2,
  User,
  Book1,
  Folder2,
  Setting
} from 'iconsax-react';
import Girl from '../public/messages/girl.svg';
import Boy from '../public/messages/boy.svg';

import {
  SidebarteachersProps,
  Notification,
  ChatSidebarProps
} from '../@types';
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
  date: '12/12/24'
};

export const card2 = {
  icon: ArchiveBook,
  header: 'Angular Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  date: '12/12/24'
};

export const card3 = {
  icon: ArchiveBook,
  header: 'Vue.js Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  date: '12/12/24'
};

export const card4 = {
  icon: ArchiveBook,
  header: 'HTML5 Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  date: '12/12/24'
};

export const card5 = {
  icon: ArchiveBook,
  header: 'CSS3 Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  date: '12/12/24'
};

export const card6 = {
  icon: ArchiveBook,
  header: 'JavaScript Card',
  text: 'Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique Lorem ipsum dolor sit amet consectetur. Molestie tristique ',
  date: '12/12/24'
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

export const Chatnav: ChatSidebarProps[] = [
  {
    id: 1,
    name: 'Messages',
    path: '/messages',
    icon: Messages2
  },
  {
    id: 2,
    name: 'Friends',
    path: '/friends',
    icon: User
  },
  {
    id: 3,
    name: 'Files',
    path: '/archive',
    icon: Folder2
  }
  // {
  //   id: 4,
  //   name: 'Profile Settings',
  //   path: '/workspace',
  //   icon: Setting
  // }
];

// cardConstants.ts
export const MessageData = [
  {
    id: 1,
    imageUrl: Boy,
    name: 'Jackson Jackson',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hasMessage: true
  },
  {
    id: 2,
    imageUrl: Girl,
    name: 'Omotola',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    hasMessage: false
  },
  {
    id: 3,
    imageUrl: Boy,
    name: 'Bukky',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    hasMessage: true
  },
  {
    id: 4,
    imageUrl: Girl,
    name: 'Gift Emi',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    hasMessage: false
  },
  {
    id: 5,
    imageUrl: Boy,
    name: 'Gift Obafaiye',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hasMessage: true
  },
  {
    id: 6,
    imageUrl: Girl,
    name: 'Ojuolape',
    content:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    hasMessage: false
  },
  {
    id: 7,
    imageUrl: Boy,
    name: 'Sophia Anderson',
    content:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    hasMessage: true
  },
  {
    id: 8,
    imageUrl: Girl,
    name: 'Oliver White',
    content:
      '...sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    hasMessage: false
  },
  {
    id: 9,
    imageUrl: Boy,
    name: 'Ella Johnson',
    content:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...',
    hasMessage: true
  },
  {
    id: 10,
    imageUrl: Girl,
    name: 'Henry Brown',
    content:
      '...nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    hasMessage: false
  },
  {
    id: 11,
    imageUrl: Boy,
    name: 'Liam Johnson',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hasMessage: true
  },
  {
    id: 12,
    imageUrl: Girl,
    name: 'Ava Williams',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    hasMessage: false
  },
  {
    id: 13,
    imageUrl: Boy,
    name: 'Mia Davis',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    hasMessage: true
  },
  {
    id: 14,
    imageUrl: Girl,
    name: 'Noah Wilson',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    hasMessage: false
  },
  {
    id: 15,
    imageUrl: Boy,
    name: 'Sophie Thomas',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hasMessage: true
  },
  {
    id: 16,
    imageUrl: Girl,
    name: 'Ethan Moore',
    content:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    hasMessage: false
  },
  {
    id: 17,
    imageUrl: Boy,
    name: 'Chloe Brown',
    content:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    hasMessage: true
  },
  {
    id: 18,
    imageUrl: Girl,
    name: 'Jackson White',
    content:
      '...sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    hasMessage: false
  },
  {
    id: 19,
    imageUrl: Boy,
    name: 'Aria Johnson',
    content:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...',
    hasMessage: true
  },
  {
    id: 20,
    imageUrl: Girl,
    name: 'Lucas Brown',
    content:
      '...nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    hasMessage: false
  }
];
