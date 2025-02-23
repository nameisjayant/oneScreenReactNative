import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ChatLine = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#7E80B4', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.line}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 0.5,
    borderRadius: 2,
  },
});

export default ChatLine;
