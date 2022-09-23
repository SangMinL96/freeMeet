import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import theme from './style/theme';
import {ThemeProvider} from 'styled-components';
import StackIndex from './stack/StackIndex';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        <StackIndex />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
