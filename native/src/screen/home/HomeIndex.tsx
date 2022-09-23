import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import theme from 'style/theme';
import styled from 'styled-components';
import Geolocation from 'react-native-geolocation-service';

function HomeIndex() {
  const [location, setLocation] = useState();
  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await Geolocation.requestAuthorization('always');
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            console.log(pos);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    }
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            console.log(pos);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Container>
      <Text>adsf</Text>
    </Container>
  );
}

export default React.memo(HomeIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
