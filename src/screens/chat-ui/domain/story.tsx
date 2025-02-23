import {ReactNode} from 'react';
import {
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
} from '../../../assets/icons';

export type story = {
  photo: ReactNode;
  name: string;
};

export const storyListData: story[] = [
  {
    photo: <Photo2 />,
    name: 'John',
  },
  {
    photo: <Photo3 />,
    name: 'Emily',
  },
  {
    photo: <Photo4 />,
    name: 'Ashley',
  },
  {
    photo: <Photo5 />,
    name: 'Travis',
  },
  {
    photo: <Photo6 />,
    name: 'Paul',
  },
  {
    photo: <Photo1 />,
    name: 'David',
  },
  {
    photo: <Photo6 />,
    name: 'Paul',
  },
  {
    photo: <Photo1 />,
    name: 'David',
  },
];
