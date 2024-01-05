'use client';
import React, { useState, useEffect } from 'react';

interface GreetingsProps {
  name: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 18) {
      setGreeting(`Good Evening, ${name}`);
    } else if (currentHour >= 12) {
      setGreeting(`Good Afternoon, ${name}`);
    } else {
      setGreeting(`Good Morning, ${name}`);
    }
  }, [name]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[38px] font-bold leading-[120%]">{greeting}</h2>
      <span className="text-[16px] text-[#8C8C8C]">
        Lorem ipsum dolor sit amet consectetur. Molestie tristique
      </span>
    </div>
  );
};

export default Greetings;