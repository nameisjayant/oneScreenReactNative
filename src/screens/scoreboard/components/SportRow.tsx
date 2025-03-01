import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppColors} from '../../../config/colors';
import {AppText, Hstack} from '../../../components';
import React, {memo} from 'react';
import {Sports} from '../domain/sports';

type Props = {
  data: Sports;
  selected: boolean;
  onSelectChange: (index: number) => void;
};

const SportRow: React.FC<Props> = ({data, selected, onSelectChange}) => {
  return (
    <View>
      {selected ? (
        <LinearGradient
          colors={[AppColors.orange_f4, AppColors.orange_ed]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.selected}>
          <Hstack style={styles.selectedView} space={12}>
            {data.icon}
            <AppText fontWeight={600} style={styles.text}>
              {data.name}
            </AppText>
          </Hstack>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          style={styles.unselected}
          onPress={() => onSelectChange(data.id)}>
          {data.icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    flexDirection: 'row',
    height: 46,
    borderRadius: 50,
  },
  text: {
    color: 'white',
  },
  unselected: {
    borderRadius: 50,
    width: 46,
    height: 46,
    backgroundColor: AppColors.gray_22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedView: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default memo(SportRow);
