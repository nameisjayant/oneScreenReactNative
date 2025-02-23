import {ScrollView, View} from 'react-native';
import {Hstack} from '../../../components';
import {storyListData} from '../domain/story';
import StoryRow from './StoryRow';

const StoriesList = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Hstack style={{paddingHorizontal: 24}} space={24}>
          {storyListData.map((item, index) => (
            <StoryRow data={item} key={index} />
          ))}
        </Hstack>
      </ScrollView>
    </View>
  );
};

export default StoriesList