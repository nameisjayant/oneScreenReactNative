import {memo, ReactNode} from 'react';
import {Vstack} from '../../../components';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../../config/colors';

type Props = {
  search?: ReactNode;
  selectSport?: ReactNode;
  list?: ReactNode;
};

const ScoreboardRow: React.FC<Props> = ({search, selectSport, list}) => {
  return (
    <Vstack style={styles.container} space={32}>
      {search}
      {selectSport}
      {list}
    </Vstack>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blue_18,
    height: '100%',
  },
});

export default memo(ScoreboardRow);
