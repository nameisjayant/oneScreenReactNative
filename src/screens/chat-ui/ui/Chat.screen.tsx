import {useState} from 'react';
import {
  ChatHeader,
  ChatLine,
  ChatList,
  ChatRow,
  ChatSearchField,
  StoriesList,
} from '../components';

const ChatScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <ChatRow
      header={<ChatHeader />}
      searchBar={<ChatSearchField value={search} onValueChange={setSearch} />}
      stories={<StoriesList />}
      line={<ChatLine />}
      chatList={<ChatList />}
    />
  );
};
export default ChatScreen;
