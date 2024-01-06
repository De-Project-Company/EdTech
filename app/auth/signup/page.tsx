import React from 'react';
import Image from 'next/image';

const signup = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/auth/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-[1200px] h-[600px] bg-white relative z-10 flex items-center justify-center rounded-xl overflow-hidden">
        <div className="w-1/2 h-full flex items-center justify-center">
          <p className="text-4xl text-black">Left Section</p>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <p className="text-4xl text-black">Right Section</p>
        </div>
      </div>
    </div>
  );
};

export default signup;
