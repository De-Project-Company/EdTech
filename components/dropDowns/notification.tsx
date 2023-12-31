import React, { useState, useEffect } from 'react';
import { NotificationsProps, Notification } from '../../@types';

import { DirectboxNotif } from 'iconsax-react';

const Notifications: React.FC<NotificationsProps> = ({
  notificationsRef,
  unreadNotifications
}) => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const timeAgo = (dateString: string): string => {
    const now: Date = new Date();
    const date = new Date(dateString);
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) return `${days} days ago`;
    if (days === 1) return '1 day ago';
    if (hours > 1) return `${hours} hours ago`;
    if (hours === 1) return '1 hour ago';
    if (minutes > 1) return `${minutes} minutes ago`;
    if (minutes === 1) return '1 minute ago';
    if (seconds > 1) return `${seconds} seconds ago`;
    return 'just now';
  };
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      text: 'Urgent notice for teachers: Faculty meeting rescheduled, please check your schedule unread',
      read: false,
      date: '2023-11-10T08:30:00Z'
    },
    {
      id: 2,
      text: 'Reminder for teachers: Submit your lesson plans for the upcoming week unread',
      read: false,
      date: '2023-11-09T15:45:00Z'
    },
    {
      id: 3,
      text: 'Important announcement for teachers: New professional development workshop added to the calendar',
      read: false,
      date: '2023-11-08T12:20:00Z'
    },
    {
      id: 4,
      text: 'Notification for teachers: Student progress reports are now available for review',
      read: true,
      date: '2023-11-07T09:55:00Z'
    },
    {
      id: 5,
      text: 'Emergency notice for teachers: School closure due to inclement weather',
      read: false,
      date: '2023-11-06T17:10:00Z'
    },
    {
      id: 6,
      text: 'Reminder for teachers: Parent-Teacher conferences next week, make your schedule arrangements',
      read: true,
      date: '2023-11-05T14:30:00Z'
    },
    {
      id: 7,
      text: 'Attention teachers: New teaching resources available in the online portal',
      read: true,
      date: '2023-11-04T11:45:00Z'
    },
    {
      id: 8,
      text: 'Update for teachers: Changes in the academic calendar for the current semester',
      read: true,
      date: '2023-11-03T09:20:00Z'
    },
    {
      id: 9,
      text: 'Reminder for teachers: Staff meeting tomorrow, please come prepared with updates',
      read: false,
      date: '2023-11-02T07:35:00Z'
    },
    {
      id: 10,
      text: 'Important notice for teachers: New grading policy in effect starting this week',
      read: true,
      date: '2023-11-01T05:10:00Z'
    },
    {
      id: 11,
      text: 'Notification for teachers: Congratulations on achieving outstanding results in the recent assessment',
      read: true,
      date: '2023-10-31T03:25:00Z'
    },
    {
      id: 12,
      text: 'Reminder for teachers: Library book return deadline approaching, encourage students to return books',
      read: false,
      date: '2023-10-30T01:15:00Z'
    },
    {
      id: 13,
      text: 'Urgent notice for teachers: System maintenance scheduled for this weekend, plan accordingly',
      read: true,
      date: '2023-10-29T20:45:00Z'
    },
    {
      id: 14,
      text: 'Important announcement for teachers: New extracurricular activities available for students, sign up now',
      read: false,
      date: '2023-10-28T18:30:00Z'
    },
    {
      id: 15,
      text: 'Notification for teachers: Special training session on effective online teaching methods next week',
      read: false,
      date: '2023-10-27T16:20:00Z'
    }
  ]);

  useEffect(() => {
    const unreadCount = notifications.filter(
      notification => !notification.read
    ).length;
    unreadNotifications(unreadCount);
  }, [notifications, unreadNotifications]);

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications => {
      const updatedNotifications = prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      return updatedNotifications;
    });
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`bg-[#fff] flex flex-col  w-fit h-[60vh] z-[20000] border-[#d8d8d8] rounded-lg shadow-xl ${
        loading ? '' : ''
      }`}
      ref={notificationsRef}
    >
      <div className="py-2 bg-white-100 px-4 sticky top-0 flex flex-col justify-between">
        <h1 className="font-[600]">Notifications</h1>
      </div>
      <div className="overflow-y-scroll grow">
        <ul className="flex flex-col w-full flex-wrap">
          {filteredNotifications.map(notification => (
            <li
              key={notification.id}
              className={`h-fit py-4 flex px-4 flex-col border-b overflow-hidden last-of-type:border-0 last-of-type:rounded-b-lg  ${
                notification.read ? '' : 'bg-[#F4FBF6]'
              }`}
            >
              <div className="flex w-full gap-4 m-auto items-center justify-center align-middle">
                <div className="m-auto bg-primary w-fit p-2 rounded-full">
                  <DirectboxNotif size="30" color="#FFF" />
                </div>
                <div className="flex m-auto items-center gap-2 justify-center w-full flex-col">
                  <p className={`font-[400]  text-sm text-[#5B5F5E] `}>
                    {notification.text}
                  </p>
                  <p
                    className={` text-gray-600 w-full float-left text-sm text-left justify-start items-start align-baseline1`}
                  >
                    {timeAgo(notification.date)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
