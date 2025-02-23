import {useState} from 'react';
import {
  ChatHeader,
  ChatLine,
  ChatRow,
  ChatSearchField,
  StoryRow,
} from '../components';
import {FlatList, View} from 'react-native';
import {storyListData} from '../domain/story';

const ChatScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <ChatRow
      header={<ChatHeader />}
      searchBar={<ChatSearchField value={search} onValueChange={setSearch} />}
      stories={
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={storyListData}
          renderItem={({item}) => <StoryRow data={item} />}
          ItemSeparatorComponent={() => <View style={{width: 16}} />}
          style={{
            paddingHorizontal: 24,
          }}
        />
      }
      line={<ChatLine />}
    />
  );
};
export default ChatScreen;
