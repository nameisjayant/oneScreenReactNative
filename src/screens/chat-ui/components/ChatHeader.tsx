import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText, Hstack} from '../../../components';
import {NotificationIcon, Photo1} from '../../../assets/icons';
import {AppColors} from '../../../config/colors';

const ChatHeader = () => {
  return (
    <Hstack style={styles.container}>
      <Hstack space={16} style={{alignItems: 'center', flex: 1}}>
        <Photo1 />
        <Hstack>
          <AppText fontWeight={500} style={styles.hello}>
            {'Hello'}
          </AppText>
          <AppText fontWeight={700} style={styles.hello}>
            {' David 👋'}
          </AppText>
        </Hstack>
      </Hstack>
      <TouchableOpacity>
        <NotificationIcon />
        <View style={styles.circle} />
      </TouchableOpacity>
    </Hstack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  hello: {
    fontSize: 16,
    color: AppColors.black_1A,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: AppColors.red_eb,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default ChatHeader;
