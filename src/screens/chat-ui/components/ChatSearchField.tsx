import {StyleSheet, TextInput} from 'react-native';
import {Hstack} from '../../../components';
import {SearchIcon} from '../../../assets/icons';
import {AppColors} from '../../../config/colors';
import {memo} from 'react';

type Props = {
  value: string;
  onValueChange: (value: string) => void;
};

const ChatSearchField = ({value, onValueChange}: Props) => {
  return (
    <Hstack style={styles.container} space={8}>
      <SearchIcon />
      <TextInput
        value={value}
        onChangeText={onValueChange}
        placeholder={'Search'}
        placeholderTextColor={AppColors.voilet_a4}
        style={styles.input}
      />
    </Hstack>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingStart: 24,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: AppColors.gray_f8,
    marginHorizontal: 24,
  },
  input: {
    fontSize: 13,
    color: AppColors.black_1A,
    flex: 1,
  },
});
export default memo(ChatSearchField);
