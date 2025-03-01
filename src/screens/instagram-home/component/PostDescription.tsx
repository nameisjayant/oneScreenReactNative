import {StyleSheet, Text} from 'react-native';
import {Photo3} from '../../../assets/icons';
import {AppText, Hstack, Vstack} from '../../../components';
import {AppColors} from '../../../config/colors';

const PostDescription = () => {
  return (
    <Vstack space={8} style={styles.container}>
      <Hstack style={{alignItems: 'center'}} space={10}>
        <Photo3 width={17} height={17} />
        <Text>
          <AppText style={styles.text}>{'Liked by '}</AppText>
          <AppText fontWeight={600} style={styles.text}>
            {'craig_love '}
          </AppText>
          <AppText style={styles.text}>{'and '}</AppText>
          <AppText fontWeight={600} style={styles.text}>
            {'44,687 '}
          </AppText>
          <AppText style={styles.text}>{'others'}</AppText>
        </Text>
      </Hstack>
      <Text>
        <AppText fontWeight={600} style={styles.text}>
          {'joshu_l '}
        </AppText>
        <AppText style={styles.text}>
          {'The game in japan was amazing and i want to share some photos'}
        </AppText>
      </Text>
    </Vstack>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 13,
    color: AppColors.white_f9,
  },
});

export default PostDescription;
