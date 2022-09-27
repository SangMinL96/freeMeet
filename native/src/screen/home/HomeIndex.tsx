import React, {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid, Platform, SafeAreaView} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import WebView from 'react-native-webview';
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
