import {memo, ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {AppFonts, FontOptions} from '../config/font';

type AppTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  fontFamily?: string;
  fontWeight?: FontOptions;
};

const AppText = ({
  children,
  style,
  fontWeight = 400,
  fontFamily = AppFonts.inter[fontWeight],
  ...others
}: AppTextProps & TextProps) => {
  return (
    <Text style={[styles.text, {fontFamily: fontFamily}, style]} {...others}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
  },
});

export default memo(AppText);
