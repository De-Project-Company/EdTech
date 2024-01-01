'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { SIDEBAR_teachers_LINKS } from '../../libs/constants';
import cn from '../../utils/twcx';
import { ExportCircle } from 'iconsax-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SidebarTeacher = () => {
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  // remove the / from the pathname
  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, '$1');

    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <section className="bg-sidebar text-white z-[50] w-[0px] md:w-[96px] min-[1140px]:w-[270px] hover:w-[270px] hover:p-4 transition-all duration-300 py-4 min-[1140px]:p-4 hidden md:flex flex-col gap-y-4 items-center justify-between min-[1140px]:items-start fixed h-screen left-0 top-0 overflow-y-auto border-r border-gray-200 sidebar-scroll overflow-x-hidden group select-none">
      <Link
        href="/teachers-dashboard"
        className=" max-[1140px]:w-full group-hover:w-full h-[53px]"
      >
        <Image src="/sidebars/logo.svg" alt="Logo" width={212} height={40} />
      </Link>
      <ul className="flex flex-col gap-y-4 pt-8">
        {SIDEBAR_teachers_LINKS.map(link => (
          <Link
            href={`/${link.link}`}
            aria-current={activeLink === link.link ? 'page' : undefined}
            key={link.id}
            onKeyUp={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveLink(link.link);
                return;
              }
            }}
            tabIndex={0}
            aria-label={link.label}
            className={cn(
              'flex items-center gap-x-3 py-2 h-[52px] text-sidebartext font-medium text-base transition-colors duration-300 cursor-pointer ',
              activeLink === link.link
                ? ' text-white rounded outline-none border-l-[8px] px-2'
                : 'hover:bg-primary-light hover:text-white focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
            )}
            onClick={() => setActiveLink(link.link)}
          >
            <link.icon
              size={30}
              aria-hidden
              //   variant={activeLink === link.link ? 'Bold' : 'Outline'}
              variant={'Bold'}
            />

            <span className=" max-[1139px]:hidden group-hover:block w-[185px]">
              {link.label}
            </span>
          </Link>
        ))}

        <span className="bg-[#8e8e8e] w-full max-w-[245px] h-[1px] " />
      </ul>
      <div className="flex flex-col w-full gap-y-6 xl:gap-y-8 pt-4 items-center">
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
            'flex group-hover:w-full min-[1140px]:w-full min-[1140px]:justify-start items-center gap-x-3 py-2  h-[52px] text-white font-medium text-base transition-colors duration-300 cursor-pointer hover:bg-primary-light focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
          )}
        >
          <ExportCircle size={24} aria-hidden variant={'Bold'} />
          <span className=" max-[1139px]:hidden group-hover:block">LogOut</span>
        </Link>
      </div>
    </section>
  );
};

export default SidebarTeacher;
