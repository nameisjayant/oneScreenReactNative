import {ReactNode} from 'react';
import {
  AtleticoIcon,
  BarcelonaIcon,
  RealmadridIcon,
  VillarealIcon,
} from '../../../assets/icons';

export type score = {
  name: string;
  icon: ReactNode;
  points: number[];
};

export const scoreList: score[] = [
  {
    name: 'Atlético Madrid FC',
    icon: <AtleticoIcon />,
    points: [2, 1, 6, 23, 38],
  },
  {
    name: 'Real Madrid',
    icon: <RealmadridIcon />,
    points: [4, 3, 7, 15, 37],
  },
  {
    name: 'Barcelona',
    icon: <BarcelonaIcon />,
    points: [4, 4, 9, 20, 34],
  },
  {
    name: 'Villareal',
    icon: <VillarealIcon />,
    points: [8, 2, 10, 16, 32],
  },
];

export const points: string[] = ['D', 'L', 'Ga', 'Gd', 'Pts'];
