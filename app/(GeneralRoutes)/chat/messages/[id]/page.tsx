import React from 'react';
import { Message } from 'iconsax-react';
import ChatHeader from '@modules/chat/ChatHeader';
// import Girl from '../../../../../public/messages/girl.svg';

function page() {
  return (
    <div className="flex flex-col text-[#8D8D8D]  items-center justify-center h-screen">
      <Message size="200" />
      <div className="">Select chat and view conversations!</div>
    </div>
  );
}

export default page;
