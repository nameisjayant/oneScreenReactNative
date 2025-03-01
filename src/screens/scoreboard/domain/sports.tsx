import {ReactNode} from 'react';
import {
  BaseBallIcon,
  BasketBallIcon,
  CricketBallIcon,
  RubgyIcon,
  SoccerIcon,
} from '../../../assets/icons';

export type Sports = {
  id: number;
  name: string;
  icon: ReactNode;
};

export const sportList: Sports[] = [
  {
    id: 1,
    name: 'Soccer',
    icon: <SoccerIcon />,
  },
  {
    id: 2,
    name: 'Baseket Ball',
    icon: <BasketBallIcon />,
  },
  {
    id: 3,
    name: 'Rubgy',
    icon: <RubgyIcon />,
  },
  {
    id: 4,
    name: 'Baseball',
    icon: <BaseBallIcon />,
  },
  {
    id: 5,
    name: 'Cricket',
    icon: <CricketBallIcon />,
  },
];
