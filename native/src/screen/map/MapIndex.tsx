import {useMyLocation} from 'hooks/useMyLocation';
import React, {useRef} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import styled from 'styled-components';

function MapIndex() {
  const webViewRef = useRef<any>(null);
  const {location} = useMyLocation();
  const onTest = async () => {
    await webViewRef.current.postMessage(
      `lat=${37.4904251}::lng=${127.1247216}`,
    );
  };
  return (
    <Container>
      {location && (
        <WebView
          originWhitelist={['*']}
          javaScriptEnabled
          javaScriptEnabledAndroid
          mixedContentMode="always"
          startInLoadingState={true}
          onLoadEnd={() => setTimeout(() => onTest(), 300)}
          ref={webViewRef}
          source={{uri: 'https://free-meet-web.vercel.app/map'}}
          // source={{uri: 'http://192.168.112.169:3010/map'}}
          onMessage={event => {
            console.log('받은 데이터(React) : ' + event.nativeEvent.data);
          }}
        />
      )}
    </Container>
  );
}

export default React.memo(MapIndex);

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
