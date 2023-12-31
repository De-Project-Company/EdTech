/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStateCtx } from '../../context/stateContext';
import { LogoutCurve } from 'iconsax-react';
import { SIDEBAR_teachers_LINKS } from '../../libs/constants';
import cn from '../../utils/twcx';
import { useRouter } from 'next/navigation';

const AdminMobileSidebar = () => {
  const { teacherShowMobileMenu, setteacherShowMobileMenu } = useStateCtx();
  const router = useRouter();

  const [activeLink, setActiveLink] = useState('');

  const pathname = usePathname();
  // remove the / from the pathname
  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, '$1');

    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          'md:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-[99] transition-all duration-300 overflow-hidden',
          teacherShowMobileMenu
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none '
        )}
        onClick={() => setteacherShowMobileMenu(false)}
      />
      <section
        className={cn(
          'py-6 md:hidden  min-[400px]:pl-4 pl-2 flex flex-col w-full max-w-[230px] min-[400px]:max-w-[270px]  items-start bg-white fixed left-0 top-0 z-[999] h-screen transition-all opacity-0 sidebar-scroll overflow-x-hidden group select-none ',
          teacherShowMobileMenu
            ? 'translate-x-0 duration-700 opacity-100'
            : '-translate-x-full duration-300 pointer-events-none invisible'
        )}
      >
        <Link
          href="/"
          className="w-full  h-[53px]"
          onClick={() => setteacherShowMobileMenu(false)}
        >
          <Image src="/sidebars/logo.svg" alt="Logo" width={155} height={53} />
        </Link>
        <ul className="flex flex-col gap-y-3 min-[400px]:gap-y-4 py-8 mt-6">
          {SIDEBAR_teachers_LINKS.map(link => (
            <Link
              href={`/${link.link}`}
              aria-current={activeLink === link.link ? 'page' : undefined}
              key={link.id}
              onKeyUp={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveLink(link.link);
                  setteacherShowMobileMenu(false);
                  return;
                }
              }}
              tabIndex={0}
              aria-label={link.label}
              className={cn(
                'flex items-center gap-x-3 py-2 px-3 h-[42px] text-[#3a3a3a] font-medium text-sm transition-colors duration-300 cursor-pointer ',
                activeLink === link.link
                  ? 'bg-primary-light text-white rounded outline-none'
                  : 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
              )}
              onClick={() => {
                setActiveLink(link.link);
                setteacherShowMobileMenu(false);
              }}
            >
              <link.icon
                size={18}
                aria-hidden
                variant={activeLink === link.link ? 'Bold' : 'Outline'}
              />

              <span className="w-[175px">{link.label}</span>
            </Link>
          ))}

          {/* LogOut */}
          <Link
            href="/"
            role="button"
            tabIndex={0}
            aria-label="logout"
            onKeyUp={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                router.push('/');
                return;
              }
            }}
            className={cn(
              'flex w-full items-center gap-x-3 py-2 px-3 h-[52px] text-[#e80000] font-medium text-base transition-colors duration-300 cursor-pointer hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
            )}
          >
            <LogoutCurve size={18} aria-hidden />
            <span>LogOut</span>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default AdminMobileSidebar;
