'use client';

import React from 'react';
import { MessageCardProps } from '../../@types';
import Image from 'next/image';
import Link from 'next/link';

const Card: React.FC<MessageCardProps> = ({
  id,
  imageUrl,
  name,
  content,
  hasMessage = false
}) => {
  return (
    <Link
      href={`chat/messages/${id}`}
      className="max-w-[300px] max-h-[60px] w-[300px] h-[60px] flex items-center bg-white rounded-lg overflow-hidden shadow-md shadow-primary hover:scale-[1.01] p-2 "
    >
      <div className="min-w-[40px]">
        <Image
          src={imageUrl}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
          width={43}
          height={43}
        />
      </div>

      <div className="ml-3 w-[240px]">
        <div className="font-bold text-[15px] flex justify-between mb-1">
          <span>{name} </span>
          <div
            className={`rounded-full h-[15px] w-[15px] ${
              hasMessage ? 'bg-red-500' : 'hidden'
            }`}
          ></div>
        </div>
        <p
          className="text-gray-700 text-[13px] pr-5"
          style={{ whiteSpace: 'nowrap' }}
        >
          {content.split(' ').slice(0, 4).join(' ')} ...
        </p>
      </div>
    </Link>
  );
};

export default Card;
