import {ScrollView, View} from 'react-native';
import {Hstack} from '../../../components';
import {InstaStoriesList} from '../domain/InstaStories';
import InstaStoryRow from './InstaStoryRow';

const InstaStoryListComponent = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Hstack style={{paddingHorizontal: 16, paddingTop: 10}} space={10}>
          {InstaStoriesList.map((item, index) => (
            <InstaStoryRow data={item} key={index} />
          ))}
        </Hstack>
      </ScrollView>
    </View>
  );
};

export default InstaStoryListComponent;
