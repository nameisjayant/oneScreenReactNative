import {memo, ReactNode} from 'react';
import {Vstack} from '../../../components';

type Props = {
  header?: ReactNode;
  searchBar?: ReactNode;
  stories?: ReactNode;
  line?: ReactNode;
  chatList?: ReactNode;
};

const ChatRow = ({header, searchBar, stories, line, chatList}: Props) => {
  return (
    <Vstack style={{flex: 1, paddingHorizontal: 24, paddingTop: 10}} space={24}>
      {header}
      {searchBar}
      {stories}
      {line}
      {chatList}
    </Vstack>
  );
};
export default memo(ChatRow);
