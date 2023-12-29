import {
  Category,
  type Icon,
  DocumentCode,
  Medal,
  MessageQuestion,
  Briefcase,
  People,
  WalletMoney,
  MessageText,
  Personalcard,
  Notification,
  AddCircle,
  Profile2User,
  ArchiveBook,
  HomeHashtag
} from 'iconsax-react';

import { SidebarAdminProps } from '../@types';

export const SIDEBAR_ADMIN_LINKS: SidebarAdminProps[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: HomeHashtag,
    link: 'teachers-dashboard'
  },

  {
    id: 3,
    label: 'Assessments',
    icon: MessageQuestion,
    link: 'admin-problem-statements'
  },
  {
    id: 4,
    label: 'Projects',
    icon: Briefcase,
    link: 'admin-projects'
  },
  {
    id: 5,
    label: 'Clients',
    icon: People,
    link: 'admin-clients'
  },
  {
    id: 6,
    label: 'Transactions',
    icon: WalletMoney,
    link: 'admin-transactions'
  },
  {
    id: 7,
    label: 'Messages',
    icon: MessageText,
    link: 'admin-messages'
  },

  {
    id: 9,
    label: 'Notifications',
    icon: Notification,

    link: 'admin-notifications'
  },
  {
    id: 10,
    label: 'Invite',
    icon: AddCircle,
    link: 'admin-invite'
  }
];
