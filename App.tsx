import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ChatScreen, InstagramHomeScreen, ScoreboardScreen} from './src/screens';
import {AppColors} from './src/config/colors';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.blue_18,
      }}>
      <View>
        <StatusBar
          barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={AppColors.blue_18}
        />
        <ScoreboardScreen />
      </View>
    </SafeAreaView>
  );
}

export default App;
