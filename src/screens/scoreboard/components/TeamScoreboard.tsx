import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../../config/colors';
import {AppText, Hstack, Vstack} from '../../../components';
import {points, scoreList} from '../domain/score';

const TeamScoreboard = () => {
  return (
    <View style={styles.container}>
      <Vstack space={12}>
        <Hstack space={10}>
          <AppText style={styles.team}>{'Team'}</AppText>
          <Vstack style={styles.pointContainer} space={10}>
            <Hstack style={styles.pointRow}>
              {points.map((item, index) => (
                <AppText style={styles.pointText} key={index}>
                  {item}
                </AppText>
              ))}
            </Hstack>
            <View style={styles.line} />
          </Vstack>
        </Hstack>

        <Vstack space={24}>
          {scoreList.map((item, index) => (
            <Hstack key={index} style={styles.row} space={10}>
              <Hstack style={styles.teamContainer} space={10}>
                {item.icon}
                <AppText style={styles.teamName}>{item.name}</AppText>
              </Hstack>

              <Vstack space={10} style={styles.pointContainer}>
                <Hstack style={styles.pointRow}>
                  {item.points.map((point, index) => (
                    <AppText style={styles.pointText} key={index}>
                      {point}
                    </AppText>
                  ))}
                </Hstack>
                <View style={styles.line} />
              </Vstack>
            </Hstack>
          ))}
        </Vstack>
      </Vstack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingStart: 16,
    backgroundColor: AppColors.gray_22,
    borderRadius: 16,
    width: '100%',
  },
  row: {
    width: '100%',
  },
  team: {
    fontSize: 12,
    color: 'white',
    flexShrink: 1,
    flex: 0.4,
  },
  teamContainer: {
    flex: 0.4,
  },
  teamName: {
    fontSize: 12,
    color: 'white',
    flexShrink: 1,
  },
  pointContainer: {
    flex: 0.6,
    alignItems: 'center',
  },
  pointRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingEnd: 10,
  },
  pointText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    minWidth: 20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: AppColors.blue_18,
  },
});

export default TeamScoreboard;
