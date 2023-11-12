import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import {Routes} from './src/routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
