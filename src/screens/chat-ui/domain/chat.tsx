import {ReactNode} from 'react';
import {Photo2, Photo3, Photo5} from '../../../assets/icons';

export type chat = {
  name: string;
  photo: ReactNode;
  time: string;
  description: string;
  isOnline?: boolean;
  isTickShow?: boolean;
  isRead?: boolean;
  isMessage?: boolean;
  message?: string;
  isGroup?: boolean;
};

export const chatList: chat[] = [
  {
    name: 'Olivia Grant',
    photo: <Photo3 width={54} height={54} />,
    time: '12:30',
    description: 'Olivia is typing...',
    isMessage: true,
    message: '3',
    isOnline: true,
  },
  {
    name: 'Product Design',
    photo: <Photo2 />,
    time: '12:34',
    description: 'What is meeting schedule ?',
    isMessage: true,
    message: '2',
    isGroup: true,
  },
  {
    name: 'John Alfaro',
    photo: <Photo2 />,
    time: '12:30',
    description: 'Nice work , i love it',
    isTickShow: true,
    isRead: true,
  },
  {
    name: 'Travis Colwell',
    photo: <Photo5 />,
    time: '11:30',
    description: `Unfortunaly i won't be there`,
    isTickShow: true,
  },
  {
    name: 'Darcy Hooper',
    photo: <Photo3 />,
    time: 'Yesterday',
    description: `Hi, how are you doing today?`,
  },
  {
    name: 'Olivia Grant',
    photo: <Photo3 width={54} height={54} />,
    time: '12:30',
    description: 'Olivia is typing...',
    isMessage: true,
    message: '3',
    isOnline: true,
  },
  {
    name: 'Product Design',
    photo: <Photo2 />,
    time: '12:34',
    description: 'What is meeting schedule ?',
    isMessage: true,
    message: '2',
    isGroup: true,
  },
  {
    name: 'John Alfaro',
    photo: <Photo2 />,
    time: '12:30',
    description: 'Nice work , i love it',
    isTickShow: true,
    isRead: true,
  },
];
