import {
  InstagramHomeHeader,
  InstagramHomeRow,
  InstaLine,
  InstaStoryListComponent,
  PostRow,
} from '../component';

const InstagramHomeScreen = () => {
  return (
    <InstagramHomeRow
      header={<InstagramHomeHeader />}
      stories={<InstaStoryListComponent />}
      line={<InstaLine/>}
      posts={<PostRow />}
    />
  );
};

export default InstagramHomeScreen;
