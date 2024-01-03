'use client';
import { Add, HambergerMenu, Notification, SearchNormal1 } from 'iconsax-react';
import { useStateCtx } from '../../context/stateContext';
import { decryptString } from '../../utils';
import cn from '../../utils/twcx';
import { handleMouseEnter } from '../../utils/text-effect';
import { useSearchParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import StudentMobileSidebar from '../sidebars/student/mobile';

const StuedntNavbar = () => {
  const { currentPath, modShowMobileMenu, setModShowMobileMenu, user } =
    useStateCtx();
  const firstName = user.name?.split(' ')[0];
  const searchParams = useSearchParams();
  const projectTitle = searchParams.get('project_title');
  const clientName = searchParams.get('client_name');
  const decrptedTitle = decryptString(projectTitle ?? '');
  const decrptedName = decryptString(clientName ?? '');
  const settingTab = searchParams.get('setting_tab');

  const titleLen = 27;

  return (
    <header
      className={cn(
        'lg:px-9 px-3 border-b border-gray-200 h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 backdrop-blur-lg w-full',
        {
          'md:overflow-hidden': modShowMobileMenu
        }
      )}
    >
      <div
        className={cn('flex items-center gap-x-4', {
          'w-full ': modShowMobileMenu
        })}
      >
        <button
          tabIndex={0}
          aria-haspopup
          aria-expanded={modShowMobileMenu}
          type="button"
          className={cn(
            'md:hidden rounded-full focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
            {
              'rotate-45 absolute right-1 top-1 z-[9999] text-white':
                modShowMobileMenu
            }
          )}
          onClick={() => setModShowMobileMenu(!modShowMobileMenu)}
        >
          {modShowMobileMenu ? <Add size={60} /> : <HambergerMenu size={32} />}
        </button>
        {currentPath === 'dashboard' ? (
          <div className="flex gap-x-2 sm:gap-x-4 items-center">
            <h2 className="hidden md:inline sm:text-3xl capitalize font-medium text-header  ">
              Welcome back! {firstName ?? 'User'}
            </h2>
            <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl md:hidden capitalize font-medium text-header  ">
              {currentPath}
            </h2>
          </div>
        ) : (
          <div className="flex gap-x-2 sm:gap-x-4 items-center">
            <h2
              onMouseEnter={handleMouseEnter}
              className="max-[370px]:text-base max-[500px]:text-lg text-xl sm:text-3xl capitalize font-medium text-header  "
              data-value={
                decrptedTitle
                  ? currentPath.replace('projects', 'project')
                  : decrptedName
                    ? currentPath.replace('clients', 'client profile')
                    : currentPath
              }
            >
              {decrptedTitle
                ? currentPath.replace('projects', 'project')
                : decrptedName
                  ? currentPath.replace('clients', 'client profile')
                  : currentPath}
            </h2>
            {decrptedTitle && (
              <div className="sm:flex items-center gap-x-2 hidden">
                <span className="text-2xl sm:text-4xl text-gray-700">•</span>
                <h3 className="max-[500px]:text-sm  sm:text-xl md:text-3xl capitalize min-[390px]:font-medium text-gray-700  ">
                  {decrptedTitle.length > titleLen
                    ? `${decrptedTitle.slice(0, titleLen)}...`
                    : decrptedTitle}
                </h3>
              </div>
            )}
            {decrptedName && (
              <div className="sm:flex items-center gap-x-2 hidden">
                <span className="text-3xl sm:text-4xl text-gray-700">•</span>
                <h3 className="max-[370px]:text-sm max-[500px]:text-base text-xl sm:text-3xl capitalize font-medium text-gray-700  ">
                  {decrptedName}
                </h3>
              </div>
            )}
            {settingTab && (
              <>
                <span className="text-3xl sm:text-4xl text-gray-700 sm:hidden">
                  <ChevronRight />
                </span>
                <span className="text-3xl sm:text-4xl text-gray-700 max-sm:hidden">
                  •
                </span>
                <h3 className="max-[370px]:text-sm max-[500px]:text-base text-xl sm:text-3xl capitalize font-medium text-gray-700  ">
                  {settingTab.replace(/-/g, ' ')}
                </h3>
              </>
            )}
          </div>
        )}
      </div>
      {user && (
        <div className="flex items-center  md:hidden gap-x-3 xl:gap-x-5  [&>button]:font-medium [&>button]:text-header">
          <button type="button">
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
      <StudentMobileSidebar />
    </header>
  );
};

export default StuedntNavbar;
