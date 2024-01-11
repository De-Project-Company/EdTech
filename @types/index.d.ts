import { ComponentType, Element } from 'react';

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: string | number;
}

export type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};
export type UseInView = <T extends Element>(ref: RefObject<T>) => boolean;

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  className?: string;
  title?: string;
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}

// Password interface
export interface PasswordPopoverProps {
  password: string;
  children: React.ReactNode;
}

export interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

export interface ProgressBarProps {
  color: string;
  value: number;
}

export type SidebarteachersProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};

// state context

export type User = {
  name: string;
  email: string;
  image: string;
};

export interface StateContextProps {
  currentPath: string;
  // Mobile sidebar props
  teacherShowMobileMenu: boolean;
  setteacherShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  modShowMobileMenu: boolean;
  setModShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  // Miscellaneous
  swipeIndicator: boolean;
  setSwipeIndicator: React.Dispatch<React.SetStateAction<boolean>>;

  user: User;
}

export interface Notification {
  id: number;
  text: string;
  read: boolean;
  date: string;
}

export interface NotificationsProps {
  unreadNotifications: (count: number) => void;
  notificationsRef: React.RefObject<HTMLDivElement>;
}

export interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export interface Event {
  id: number;
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
}

export type StudentProps = {
  id?: number;
  name: string;
  grades: number;
  email: string;
  status: 'Active' | 'Inactive' | 'Probation';
};

export type ChatSidebarProps = {
  id?: number;
  name: string;
  path: string;
  icon: Icon;
};

interface MessageCardProps {
  id?: number;
  imageUrl: string;
  name: string;
  content: string;
  hasMessage?: boolean;
}
