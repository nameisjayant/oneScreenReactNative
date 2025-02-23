import {FlatList, View} from 'react-native';
import {chatList} from '../domain/chat';
import ChattingRow from './ChattingRow';

const ChatList = () => {
  return (
    <FlatList
      data={chatList}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <ChattingRow data={item} />}
      style={{
        paddingHorizontal: 24,
      }}
      ItemSeparatorComponent={() => <View style={{height: 28}} />}
    />
  );
};

export default ChatList