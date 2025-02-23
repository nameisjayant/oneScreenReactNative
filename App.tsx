import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ChatScreen, InstagramHomeScreen} from './src/screens';
import {AppColors} from './src/config/colors';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.black_12,
      }}>
      <View>
        <StatusBar
          barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <InstagramHomeScreen />
      </View>
    </SafeAreaView>
  );
}

export default App;
