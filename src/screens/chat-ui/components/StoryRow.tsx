import {StyleSheet, View} from 'react-native';
import {AppText, Vstack} from '../../../components';
import {AppColors} from '../../../config/colors';
import {memo} from 'react';
import {story} from '../domain/story';

type Props = {
  data: story;
};

const StoryRow = ({data}: Props) => {
  return (
    <Vstack style={styles.container} space={5}>
      <View style={styles.image}>{data.photo}</View>
      <AppText style={styles.name}>{data?.name}</AppText>
    </Vstack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: AppColors.blue_19,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 13,
    color: AppColors.voilet_a4,
  },
});

export default memo(StoryRow);
