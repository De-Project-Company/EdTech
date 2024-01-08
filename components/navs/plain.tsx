'use client';

import cn from '../../utils/twcx';
import Image from 'next/image';

const PlainNav = () => {
  return (
    <header
      className={cn(
        'lg:px-9 px-3 border-b border-gray-200 h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-center fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-[#F2EFFF] backdrop-blur-lg w-full'
      )}
    >
      <Image src="/plain.svg" alt="logo" width={104} height={40} />
    </header>
  );
};

export default PlainNav;
