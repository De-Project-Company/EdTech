'use client';
import Image from 'next/image';
import { Chatnav } from '../../libs/constants';
import { useEffect, useState } from 'react';
import cn from '../../utils/twcx';
import { Message, Back } from 'iconsax-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const ChatnSidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const searchParams = useSearchParams().get('chat_tab');

  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(searchParams || 'profile');
  }, [searchParams]);
  return (
    <section className="w-[78px] transition-all duration-300 flex flex-col gap-y-4 items-center bg-[#E8E8E8]  fixed h-screen z-30 sidebar-scroll overflow-x-hidden justify-between pb-[30px] pt-[70px]">
      <div className="flex flex-col gap-y-4 items-center bg-[#E8E8E8] overflow-x-hidden select-none">
        <Link href={'/chat'} className="mb-[70px]">
          <Message size={50} color="#28146A" variant="Bold" />
        </Link>
        <ul className="flex flex-col gap-y-4 w-full">
          {Chatnav.map(link => (
            <Link
              href={`/chat${link.path}?chat_tab=${link.path.replace('/', '')}`}
              aria-current={activeLink === link.name ? 'page' : undefined}
              key={link.id}
              onKeyUp={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveLink(link.path);
                  return;
                }
              }}
              tabIndex={0}
              aria-label={link.name}
              className={cn(
                'w-full flex flex-col items-center gap-x-3 py-2 px-3 h-[80px] text-[#28146A] font-medium text-base transition-colors duration-300 cursor-pointer ',
                activeLink === link.path.replace('/', '')
                  ? 'bg-[#D8CCFE] text-[#28146A] rounded outline-none  border-l-[9px] border-[#28146A]'
                  : 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
              )}
              onClick={() => setActiveLink(link.path.replace('/', ''))}
            >
              <link.icon
                size="45"
                color={
                  activeLink === link.path.replace('/', '')
                    ? '#28146A'
                    : '#898989'
                }
                variant={
                  activeLink === link.path.replace('/', '')
                    ? 'Broken'
                    : 'Outline'
                }
              />
              {/* <span className="mx-4">{link.name}</span> */}
            </Link>
          ))}
        </ul>
      </div>
      <Link href={'/'} className="bottom-0 flex flex-col">
        <Back size={50} color="#28146A" variant="Bold" />
        <span>Home</span>
      </Link>
    </section>
  );
};

export default ChatnSidebar;
