import {memo} from 'react';
import {AppText, Hstack, Vstack} from '../../../components';
import {chat} from '../domain/chat';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../../config/colors';
import {DoubleTickIcon, Photo1, Photo2, Photo3} from '../../../assets/icons';

const ChattingRow = ({data}: {data: chat}) => {
  return (
    <Hstack style={styles.container} space={10}>
      <Hstack space={10} style={{alignItems: 'center', flex: 1}}>
        {!data?.isGroup ? (
          <View>
            {data.photo}
            {data?.isOnline && (
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle} />
              </View>
            )}
          </View>
        ) : (
          <Vstack style={{width: 54, height: 54}} space={4}>
            <Hstack space={5}>
              <Photo2 width={25} height={25} />
              <Photo3 width={25} height={25} />
            </Hstack>
            <Hstack space={5}>
              <Photo2 width={25} height={25} />
              <View style={styles.moreCircle}>
                <AppText fontWeight={500} style={styles.more}>
                  {'+3'}
                </AppText>
              </View>
            </Hstack>
          </Vstack>
        )}
        <Vstack space={8}>
          <AppText fontWeight={600} style={styles.title}>
            {data?.name}
          </AppText>
          <AppText style={styles.desc}>{data?.description}</AppText>
        </Vstack>
      </Hstack>
      <Vstack style={{alignItems: 'center'}} space={5}>
        <AppText fontWeight={500} style={styles.time}>
          {data?.time}
        </AppText>
        {data?.isMessage && (
          <View style={styles.messageCircle}>
            <AppText fontWeight={500} style={styles.message}>
              {data?.message}
            </AppText>
          </View>
        )}
        {data?.isTickShow && (
          <DoubleTickIcon
            color={data?.isRead ? AppColors.blue_30 : AppColors.voilet_a4}
          />
        )}
      </Vstack>
    </Hstack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  outerCircle: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
  innerCircle: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.green_5A,
    borderRadius: 50,
    position: 'absolute',
    right: 1,
    bottom: 1,
  },
  title: {
    fontSize: 15,
    color: AppColors.black_1A,
  },
  desc: {
    fontSize: 13,
    color: AppColors.voilet_a4,
  },
  time: {
    fontSize: 11,
    color: AppColors.voilet_a4,
  },
  messageCircle: {
    width: 24,
    height: 24,
    backgroundColor: AppColors.blue_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  message: {
    fontSize: 12,
    color: 'white',
  },
  more: {
    fontSize: 11,
    color: 'white',
  },
  moreCircle: {
    width: 25,
    height: 25,
    backgroundColor: AppColors.blue_30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(ChattingRow);
