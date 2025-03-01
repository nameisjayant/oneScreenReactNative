import {StyleSheet} from 'react-native';
import {Vstack} from '../../../components';
import {memo, useState} from 'react';
import ProfileRow from './ProfileRow';
import InstaActionRow from './InstaActionRow';
import PostDescription from './PostDescription';
import InstaPost from './InstaPost';

const PostRow = () => {
  const [page, setPage] = useState(0);
  return (
    <Vstack style={styles.container} space={16}>
      <ProfileRow />
      <InstaPost onPageChange={setPage} />
      <InstaActionRow page={page} />
      <PostDescription />
    </Vstack>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default memo(PostRow);
