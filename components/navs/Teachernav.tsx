'use client';
import {
  Add,
  HambergerMenu,
  Notification,
  Message2,
  SearchNormal1,
  ArrowUp
} from 'iconsax-react';
import Link from 'next/link';
import { useSearch } from '../../context/SearchContext';
import { useStateCtx } from '../../context/stateContext';
import useDisclosure from '../../hooks/useDisclosure';
import cn from '../../utils/twcx';
import TeacherMobileSidebar from '../sidebars/TeacherMobileSidebar';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@ui/Input';
import Button from '@ui/Button';
import Notifications from '../dropDowns/notification';
import UploadModal from '../modals/UploadModal';

const TeacherNavbar = () => {
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const { teacherShowMobileMenu, setteacherShowMobileMenu, user } =
    useStateCtx();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const toggleSearch = () => {
    setIsSearchVisible(prev => !prev);
  };

  const { searchValue, setSearchValue } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleNotificationsToggle = () => {
    setNotificationMenu(!notificationMenu);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const targetNode = event.target as Node | null;

      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(targetNode)
      ) {
        setNotificationMenu(false);
      }
    }

    if (notificationMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationMenu]);

  return (
    <header
      className={cn(
        'lg:px-9 px-3 border-b h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 backdrop-blur-lg w-full',
        {
          'md:overflow-hidden': teacherShowMobileMenu
        }
      )}
    >
      <div
        className={cn('flex items-center gap-x-4', {
          'w-full ': teacherShowMobileMenu
        })}
      >
        <button
          tabIndex={0}
          aria-haspopup
          aria-expanded={teacherShowMobileMenu}
          type="button"
          className={cn(
            'md:hidden rounded-full focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
            {
              'rotate-45 absolute right-1 top-1 z-[9999] text-white':
                teacherShowMobileMenu
            }
          )}
          onClick={() => setteacherShowMobileMenu(!teacherShowMobileMenu)}
        >
          {teacherShowMobileMenu ? (
            <Add size={60} />
          ) : (
            <HambergerMenu size={32} />
          )}
        </button>
        <div className=" justify-between space-x-8 w-full items-center hidden md:flex px-10">
          <Input
            type="text"
            placeholder="Search..."
            className="h-[60px] w-[450px]"
            value={searchValue}
            onChange={handleInputChange}
          />
          {user && (
            <div className="flex items-center  gap-x-7 px-9  [&>button]:font-medium [&>button]:text-header">
              <div
                className="w-fit flex h-fit relative cursor-pointer"
                ref={messagesRef}
              >
                <Link className="relative" href="">
                  <Message2 size={24} variant="Bold" />
                </Link>
                <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-red-600 rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
                  {unreadNotifications}
                </span>
              </div>

              <div
                className="w-fit flex h-fit relative cursor-pointer"
                ref={notificationsRef}
              >
                <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-red-600 rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
                  {unreadNotifications}
                </span>

                <button
                  className="relative"
                  onClick={handleNotificationsToggle}
                >
                  <Notification size={24} />
                </button>
              </div>
              <button
                type="button"
                className="w-8 h-8 border border-primary-light rounded-full"
              >
                <Image src={user.image!} alt="user" width={32} height={32} />
              </button>
            </div>
          )}

          <div className="flex gap-3 pl-9">
            <Button
              leftIcon={<ArrowUp />}
              className="bg-white rounded-md text-primary"
              intent={'secondary'}
              onClick={onOpen}
            >
              Upload
            </Button>
            <Button
              leftIcon={<Add />}
              className="rounded-md"
              intent={'primary'}
              href="/curriculum"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
      {user && (
        <div className="flex items-center  md:hidden gap-x-3 xl:gap-x-5  [&>button]:font-medium [&>button]:text-header">
          <div className="flex items-center gap-2">
            {isSearchVisible && (
              <div>
                <Input
                  type="text"
                  placeholder="Search..."
                  className="h-[40px]"
                  value={searchValue}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <button type="button" onClick={toggleSearch}>
              <SearchNormal1 size={24} />
            </button>
          </div>
          <div className="flex items-center">
            <div
              className="w-fit flex h-fit relative cursor-pointer"
              ref={messagesRef}
            >
              <Link className="relative" href="">
                <Message2 size={24} variant="Bold" />
              </Link>
              <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-red-600 rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
                {unreadNotifications}
              </span>
            </div>
          </div>
          <div
            className="w-fit flex h-fit relative cursor-pointer"
            ref={notificationsRef}
          >
            <span className="text-[#fff] text-[8px] font-bold  leading-3 tracking-tight w-3 h-3 px-1 absolute bg-red-600 rounded-[80px] flex-col justify-center items-center gap-2.5 inline-flex top-[-4px] left-[-2px]">
              {unreadNotifications}
            </span>

            <button className="relative" onClick={handleNotificationsToggle}>
              <Notification size={24} />
            </button>
          </div>
          <button
            type="button"
            className="w-8 h-8 border border-primary-light rounded-full"
          >
            <Image src={user.image!} alt="user" width={32} height={32} />
          </button>
        </div>
      )}
      <TeacherMobileSidebar />
      {notificationMenu && (
        <div
          className="absolute bg-white-100 top-full w-fit md:2/4 lg:w-1/4  md:right-[50px] lg:right-[400px]"
          ref={notificationsRef}
        >
          <Notifications
            notificationsRef={notificationsRef}
            unreadNotifications={setUnreadNotifications}
          />
        </div>
      )}
      <UploadModal isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default TeacherNavbar;
