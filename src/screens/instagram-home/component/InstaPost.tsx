import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';

type Props = {
  onPageChange: (value: number) => void;
};

const InstaPost: React.FC<Props> = ({onPageChange}) => {
  return (
    <PagerView
      initialPage={0}
      style={styles.container}
      onPageSelected={e => onPageChange(e.nativeEvent.position)}>
      <View key={'1'}>
        <Image
          source={require('../../../assets/images/Post_1.png')}
          style={styles.image}
        />
      </View>
      <View key={'2'}>
        <Image
          source={require('../../../assets/images/Post_1.png')}
          style={styles.image}
        />
      </View>
      <View key={'3'}>
        <Image
          source={require('../../../assets/images/Post_1.png')}
          style={styles.image}
        />
      </View>
    </PagerView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 375,
  },
  image: {
    width: '100%',
    height: 375,
  },
});
export default InstaPost;
