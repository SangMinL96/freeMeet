import React, {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid, Platform, SafeAreaView} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import WebView from 'react-native-webview';
import styled from 'styled-components';

function KakaoMap() {
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
    await webViewRef.current.postMessage(`lat=${location.latitude}`);
  };
  return (
    <Container>
      {location && (
        <WebView
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          javaScriptEnabledAndroid
          startInLoadingState={true}
          onLoad={() => setTimeout(() => onTest(), 300)}
          ref={webViewRef}
          // source={{uri: 'https://free-meet-web.vercel.app/map'}}
          source={{uri: 'http://192.168.112.169:3010/map'}}
          onMessage={event => {
            console.log('?????? ?????????(React) : ' + event.nativeEvent.data);
          }}
        />
      )}
    </Container>
  );
}

export default React.memo(KakaoMap);

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
