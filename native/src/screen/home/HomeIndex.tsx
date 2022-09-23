import React, {useEffect, useRef, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import theme from 'style/theme';
import styled from 'styled-components';
import Geolocation from 'react-native-geolocation-service';

function HomeIndex() {
  const webViewRef = useRef<any>(null);
  const [location, setLocation] = useState<any>(null);
  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await Geolocation.requestAuthorization('always');
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
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
            setLocation(pos.coords);
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

  const onTest = async () => {
    await webViewRef.current.postMessage(JSON.stringify(location));
  };
  return (
    <Container>
      {location && (
        <WebView
          onLoad={() => setTimeout(() => onTest(), 300)}
          ref={webViewRef}
          javaScriptEnabled={true}
          source={{uri: 'http://localhost:3010/map'}}
          onMessage={event => {
            console.log('받은 데이터(React) : ' + event.nativeEvent.data);
          }}
        />
      )}
    </Container>
  );
}

export default React.memo(HomeIndex);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
