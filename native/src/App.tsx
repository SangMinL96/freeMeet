import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import theme from './style/theme';
import {ThemeProvider} from 'styled-components';
import StackIndex from './stack/StackIndex';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        <SafeAreaView style={{width: '100%', height: '100%'}}>
          <StackIndex />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
