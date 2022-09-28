import {useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid, Platform, SafeAreaView, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import WebView from 'react-native-webview';
import styled from 'styled-components';

function HomeIndex() {
  const {params} = useRoute() as any;
  return (
    <Container>
      <Text>{params?.category || ''}</Text>
    </Container>
  );
}

export default React.memo(HomeIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
