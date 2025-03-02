import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText, Hstack, Vstack} from '../../../components';
import {ArrowRightIcon, SpainFlagIcon} from '../../../assets/icons';
import {AppColors} from '../../../config/colors';

const TeamHeader = () => {
  return (
    <Hstack style={styles.container}>
      <Hstack style={styles.innerContainer} space={16}>
        <SpainFlagIcon />
        <Vstack>
          <AppText fontWeight={600} style={styles.title}>
            {'La Liga'}
          </AppText>
          <AppText style={styles.country}>{'Spain'}</AppText>
        </Vstack>
      </Hstack>
      <TouchableOpacity>
        <ArrowRightIcon />
      </TouchableOpacity>
    </Hstack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  country: {
    color: AppColors.gray_aa,
    fontSize: 12,
  },
});

export default TeamHeader;
