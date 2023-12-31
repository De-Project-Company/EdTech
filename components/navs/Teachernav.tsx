'use client';
import {
  Add,
  HambergerMenu,
  Notification,
  Message2,
  SearchNormal1,
  ArrowUp
} from 'iconsax-react';
import { useSearch } from '../../context/SearchContext';
import { useStateCtx } from '../../context/stateContext';
import cn from '../../utils/twcx';
import TeacherMobileSidebar from '../sidebars/TeacherMobileSidebar';
import Image from 'next/image';
import { useState } from 'react';
import { Input } from '@ui/Input';
import Button from '@ui/Button';

const TeacherNavbar = () => {
  const { teacherShowMobileMenu, setteacherShowMobileMenu, user } =
    useStateCtx();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(prev => !prev);
  };

  const { searchValue, setSearchValue } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
        <div className=" justify-between space-x-8 w-full items-center hidden md:flex">
          <Input
            type="text"
            placeholder="Search..."
            className="h-[60px] w-[450px]"
            value={searchValue}
            onChange={handleInputChange}
          />
          {user && (
            <div className="flex items-center  gap-x-7 px-9  [&>button]:font-medium [&>button]:text-header">
              <div className="flex items-center">
                <button className="relative">
                  <Message2 size={24} variant="Bold" />
                  {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs">
                {messageCount}
              </span> */}
                </button>
              </div>
              <button className="relative">
                {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs">
              {notificationCount}
            </span> */}
                <Notification size={24} />
              </button>
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
            >
              Upload
            </Button>
            <Button
              leftIcon={<Add />}
              className="rounded-md"
              intent={'primary'}
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
            <div className="relative">
              <Message2 size={24} variant="Bold" />
              {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs">
                {messageCount}
              </span> */}
            </div>
          </div>
          <div className="relative">
            {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs">
              {notificationCount}
            </span> */}
            <Notification size={24} />
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
    </header>
  );
};

export default TeacherNavbar;
