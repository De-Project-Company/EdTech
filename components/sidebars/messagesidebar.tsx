'use client';

import React, { useState } from 'react';
import { Input } from '@ui/Input';
import Card from '../cards/messageCard';
import { MessageData } from '../../libs/constants';

function Messageside() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCards = MessageData.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-between items-center gap-y-2 p-5 max--w-[330px]">
      <Input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="p-2 mb-4 w-full"
      />
      {searchQuery ? (
        filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              imageUrl={card.imageUrl}
              name={card.name}
              content={card.content}
              hasMessage={card.hasMessage}
            />
          ))
        ) : (
          <p>No results found.</p>
        )
      ) : (
        MessageData.map(link => (
          <Card
            id={link.id}
            key={link.id}
            imageUrl={link.imageUrl}
            name={link.name}
            content={link.content}
            hasMessage={link.hasMessage}
          />
        ))
      )}
    </div>
  );
}

export default Messageside;
