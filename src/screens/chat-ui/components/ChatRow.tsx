import {memo, ReactNode} from 'react';
import {Vstack} from '../../../components';
import {StatusBar, StyleSheet} from 'react-native';

type Props = {
  header?: ReactNode;
  searchBar?: ReactNode;
  stories?: ReactNode;
  line?: ReactNode;
  chatList?: ReactNode;
};

const ChatRow = ({header, searchBar, stories, line, chatList}: Props) => {
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <Vstack style={styles.container} space={24}>
        {header}
        {searchBar}
        {stories}
        {line}
        {chatList}
      </Vstack>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: '100%',
  },
});
export default memo(ChatRow);
