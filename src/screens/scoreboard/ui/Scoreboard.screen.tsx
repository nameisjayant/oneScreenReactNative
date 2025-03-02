import {FlatList, View} from 'react-native';
import {
  ScoreboardRow,
  ScoreboardSearch,
  SportList,
  TeamScoreboardRow,
} from '../components';

const ScoreBoardScreen = () => {
  return (
    <ScoreboardRow
      search={<ScoreboardSearch />}
      selectSport={<SportList />}
      list={
        <FlatList
          data={Array.from({length: 10})}
          renderItem={({item}) => <TeamScoreboardRow />}
          ItemSeparatorComponent={() => <View style={{height: 24}} />}
        />
      }
    />
  );
};
export default ScoreBoardScreen;
