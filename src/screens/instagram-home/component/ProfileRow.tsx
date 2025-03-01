import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText, Hstack, Vstack} from '../../../components';
import {BlueTickIcon, MoreIcon, Photo1} from '../../../assets/icons';
import {AppColors} from '../../../config/colors';
import {memo} from 'react';

const ProfileRow = () => {
  return (
    <Hstack style={style.container}>
      <Hstack space={10} style={{flex: 1, alignItems: 'center'}}>
        <Photo1 width={32} height={32} />
        <Vstack>
          <Hstack style={{alignItems: 'center'}} space={5}>
            <AppText fontWeight={500} style={style.name}>
              {'Joshu_j'}
            </AppText>
            <BlueTickIcon />
          </Hstack>
          <AppText style={style.location}>{'Tokoyo , Japan'}</AppText>
        </Vstack>
      </Hstack>
      <TouchableOpacity>
        <MoreIcon />
      </TouchableOpacity>
    </Hstack>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 13,
    color: AppColors.white_f9,
  },
  location: {
    fontSize: 11,
    color: AppColors.white_f9,
  },
});
export default memo(ProfileRow);
