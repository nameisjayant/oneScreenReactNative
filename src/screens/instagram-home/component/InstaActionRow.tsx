import {StyleSheet, View} from 'react-native';
import {Hstack} from '../../../components';
import {
  BookmarkIcon,
  CommentIcon,
  LikeIcon,
  MessengerIcon,
} from '../../../assets/icons';
import React, {memo} from 'react';
import {AppColors} from '../../../config/colors';

type Props = {
  page: number;
};

const InstaActionRow: React.FC<Props> = ({page}) => {
  return (
    <Hstack style={style.container}>
      <Hstack space={16}>
        <LikeIcon />
        <CommentIcon />
        <MessengerIcon />
      </Hstack>
      <Hstack space={5}>
        {Array.from({length: 3}, (_, index) => (
          <View
            style={[
              style.indicator,
              {
                backgroundColor:
                  page === index ? AppColors.blue_38 : AppColors.gray_54,
              },
            ]}
            key={index}
          />
        ))}
      </Hstack>
      <BookmarkIcon />
    </Hstack>
  );
};
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 50,
  },
});

export default memo(InstaActionRow);
