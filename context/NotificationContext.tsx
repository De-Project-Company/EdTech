'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextProps {
  messageCount: number;
  notificationCount: number;
  increaseMessageCount: () => void;
  decreaseMessageCount: () => void;
  increaseNotificationCount: () => void;
  decreaseNotificationCount: () => void;
}

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children
}) => {
  const [messageCount, setMessageCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  const increaseMessageCount = () =>
    setMessageCount(prevCount => prevCount + 1);
  const decreaseMessageCount = () =>
    setMessageCount(prevCount => Math.max(0, prevCount - 1));
  const increaseNotificationCount = () =>
    setNotificationCount(prevCount => prevCount + 1);
  const decreaseNotificationCount = () =>
    setNotificationCount(prevCount => Math.max(0, prevCount - 1));

  return (
    <NotificationContext.Provider
      value={{
        messageCount,
        notificationCount,
        increaseMessageCount,
        decreaseMessageCount,
        increaseNotificationCount,
        decreaseNotificationCount
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotificationContext must be used within a NotificationProvider'
    );
  }
  return context;
};
