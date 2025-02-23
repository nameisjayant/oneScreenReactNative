import {memo, ReactNode} from 'react';
import {Vstack} from '../../../components';
import {StatusBar} from 'react-native';
import {AppColors} from '../../../config/colors';

type InstagramHomeProps = {
  header?: ReactNode;
  stories?: ReactNode;
  posts?: ReactNode;
};

const InstagramHomeRow = ({header, stories, posts}: InstagramHomeProps) => {
  return (
    <>
      <StatusBar backgroundColor={AppColors.black_12} />
      <Vstack
        style={{
          height: '100%',
          backgroundColor: 'black',
        }}>
        {header}
        {stories}
        {posts}
      </Vstack>
    </>
  );
};

export default memo(InstagramHomeRow);
