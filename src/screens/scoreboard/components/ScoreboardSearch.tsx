import {StyleSheet, TextInput} from 'react-native';
import {Hstack} from '../../../components';
import {AppColors} from '../../../config/colors';
import {SearchIcon} from '../../../assets/icons';
import {useState} from 'react';

const ScoreboardSearch = () => {
  const [search, setSearch] = useState('');
  return (
    <Hstack space={10} style={styles.container}>
      <SearchIcon color={AppColors.gray_65} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder={'Search your competitions ...'}
        placeholderTextColor={AppColors.gray_65}
      />
    </Hstack>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: AppColors.gray_22,
    borderRadius: 16,
    alignItems: 'center',
    paddingStart: 16,
    marginHorizontal: 16,
    marginTop: 24,
  },
});

export default ScoreboardSearch;
