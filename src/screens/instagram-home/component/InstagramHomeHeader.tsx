import {StyleSheet} from 'react-native';
import {Hstack} from '../../../components';
import {
  CameraIcon,
  IGTVIcon,
  InstagramIcon,
  MessengerIcon,
} from '../../../assets/icons';
import {AppColors} from '../../../config/colors';

const InstagramHomeHeader = () => {
  return (
    <Hstack style={styles.container}>
      <CameraIcon />
      <InstagramIcon />
      <Hstack style={{alignItems: 'center'}} space={16}>
        <IGTVIcon />
        <MessengerIcon />
      </Hstack>
    </Hstack>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    alignItems: 'center',
    backgroundColor: AppColors.black_12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});

export default InstagramHomeHeader;
