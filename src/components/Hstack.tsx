import {memo, ReactNode} from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  space?: number;
};

const Hstack = ({children, style, space = 0}: Props & ViewProps) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style, {gap: space}])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
export default memo(Hstack);
