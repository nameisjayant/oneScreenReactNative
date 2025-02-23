import LinearGradient from 'react-native-linear-gradient';
import {AppColors} from '../../../config/colors';
import {StyleSheet, View} from 'react-native';
import {AppText, Vstack} from '../../../components';
import {instaStory} from '../domain/InstaStories';
import {memo} from 'react';

const InstaStoryRow = ({data}: {data: instaStory}) => {
  return (
    <Vstack
      style={{
        alignItems: 'center',
      }}
      space={8}>
      <LinearGradient
        colors={[AppColors.yellow_fb, AppColors.red_db, AppColors.pink_a6]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.circle}>
        <View style={styles.image}>{data.icon}</View>
      </LinearGradient>
      <AppText style={styles.name}>{data.name}</AppText>
      {data.isLive && (
        <LinearGradient
          colors={['#C90083', '#D22463', '#D32463', '#E10038']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.liveContainer}>
          <AppText fontWeight={500} style={styles.live}>
            {'LIVE'}
          </AppText>
        </LinearGradient>
      )}
    </Vstack>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 62,
    height: 62,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 50,
    overflow: 'hidden',
  },
  name: {
    fontSize: 12,
    color: 'white',
  },
  liveContainer: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 22,
    bottom: 15,
  },
  live: {
    fontSize: 8,
    color: 'white',
  },
});

export default memo(InstaStoryRow);
