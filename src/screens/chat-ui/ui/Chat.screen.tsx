import {useState} from 'react';
import {
  ChatHeader,
  ChatLine,
  ChatRow,
  ChatSearchField,
  ChattingRow,
  StoryRow,
} from '../components';
import {FlatList, View} from 'react-native';
import {storyListData} from '../domain/story';
import {chatList} from '../domain/chat';

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
          ListHeaderComponent={<View style={{width: 24}} />}
          ListFooterComponent={<View style={{width: 24}} />}
        />
      }
      line={<ChatLine />}
      chatList={
        <FlatList
          data={chatList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ChattingRow data={item} />}
          style={{
            paddingHorizontal: 24,
          }}
          ItemSeparatorComponent={() => <View style={{height: 28}} />}
        />
      }
    />
  );
};
export default ChatScreen;
