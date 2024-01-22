import React from 'react';
import { Send, InfoCircle } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  name: string;
}

const ChatHeader: React.FC<CardProps> = ({ imageUrl, name }) => {
  return (
    <div className="flex p-4 items-center justify-between max-w-[800px] bg-white">
      <div className="flex">
        <Image
          src={imageUrl}
          alt="Card Image"
          className="w-full h-auto"
          width={61}
          height={61}
        />
        <span>{name}</span>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <Link className="bg-blue-500 text-white px-4 py-2" href={``}>
          <InfoCircle />
        </Link>
      </div>
    </div>
  );
};

export default ChatHeader;
