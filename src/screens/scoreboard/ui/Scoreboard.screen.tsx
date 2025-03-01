import {
  ScoreboardRow,
  ScoreboardSearch,
  SportList,
  SportRow,
} from '../components';

const ScoreBoardScreen = () => {
  return (
    <ScoreboardRow search={<ScoreboardSearch />} selectSport={<SportList />} />
  );
};
export default ScoreBoardScreen;
