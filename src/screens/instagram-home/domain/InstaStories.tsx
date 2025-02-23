import {ReactNode} from 'react';
import {Photo1, Photo2, Photo3, Photo4, Photo5} from '../../../assets/icons';

export type instaStory = {
  name: string;
  icon: ReactNode;
  isLive?: boolean;
};

export const InstaStoriesList: instaStory[] = [
  {
    name: 'Your Story',
    icon: <Photo1 width={56} height={56} />,
  },
  {
    name: 'Karenne',
    icon: <Photo2 width={56} height={56} />,
    isLive: true,
  },
  {
    name: 'ZackJohn',
    icon: <Photo3 width={56} height={56} />,
  },
  {
    name: 'Kieron_d',
    icon: <Photo4 width={56} height={56} />,
  },
  {
    name: 'Craig_finer',
    icon: <Photo5 width={56} height={56} />,
  },
  {
    name: 'Your Story',
    icon: <Photo1 width={56} height={56} />,
  },
  {
    name: 'Karenne',
    icon: <Photo2 width={56} height={56} />,
  },
  {
    name: 'ZackJohn',
    icon: <Photo3 width={56} height={56} />,
  },
];
