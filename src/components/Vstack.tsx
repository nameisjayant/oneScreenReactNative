import {memo, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  space?: number;
};

const Vstack = ({children, style, space = 0}: Props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style, {gap: space}])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default memo(Vstack)