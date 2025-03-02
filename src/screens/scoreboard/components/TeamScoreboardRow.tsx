import {Vstack} from '../../../components';
import TeamHeader from './TeamHeader';
import TeamScoreboard from './TeamScoreboard';

const TeamScoreboardRow = () => {
  return (
    <Vstack space={24} style={{paddingHorizontal: 24}}>
      <TeamHeader />
      <TeamScoreboard />
    </Vstack>
  );
};

export default TeamScoreboardRow;
