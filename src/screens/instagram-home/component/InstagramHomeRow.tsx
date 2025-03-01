import {memo, ReactNode} from 'react';
import {Vstack} from '../../../components';
import {FlatList, StatusBar, View} from 'react-native';
import {AppColors} from '../../../config/colors';

type InstagramHomeProps = {
  header?: ReactNode;
  stories?: ReactNode;
  line?: ReactNode;
  posts: React.ReactElement;
};

const InstagramHomeRow = ({
  header,
  stories,
  posts,
  line,
}: InstagramHomeProps) => {
  return (
    <>
      <StatusBar backgroundColor={AppColors.black_12} />
      <Vstack
        style={{
          height: '100%',
          backgroundColor: 'black',
        }}>
        {header}
        <FlatList
          data={Array.from({length: 10})}
          ListHeaderComponent={
            <>
              {stories}
              {line}
            </>
          }
          renderItem={({item}) => posts}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 24}} />}
        />
      </Vstack>
    </>
  );
};

export default memo(InstagramHomeRow);
