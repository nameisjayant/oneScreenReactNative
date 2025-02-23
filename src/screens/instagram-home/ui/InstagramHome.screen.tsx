import {
  InstagramHomeHeader,
  InstagramHomeRow,
  InstaStoryListComponent,
} from '../component';

const InstagramHomeScreen = () => {
  return (
    <InstagramHomeRow
      header={<InstagramHomeHeader />}
      stories={<InstaStoryListComponent />}
    />
  );
};

export default InstagramHomeScreen;
