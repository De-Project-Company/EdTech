import React from 'react';
import Card from '@components/cards/messageCard';
import { MessageData } from '../../../libs/constants';

function page() {
  return (
    <div className="flex flex-col justify-between items-center gap-y-2 p-4">
      {MessageData.map(link => (
        <Card
          id={link.id}
          key={link.id}
          imageUrl={link.imageUrl}
          name={link.name}
          content={link.content}
          hasMessage={link.hasMessage}
        />
      ))}
    </div>
  );
}

export default page;
