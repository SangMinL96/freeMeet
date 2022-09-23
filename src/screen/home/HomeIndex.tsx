import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import theme from 'style/theme';
import styled from 'styled-components';

function HomeIndex() {
  return <Container></Container>;
}

export default React.memo(HomeIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
