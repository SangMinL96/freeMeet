import { jsonParse } from "@utils/util";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function MapIndex() {
  const [myLocation, setMyLocation] = useState<{ La: number; Ma: number }>(
    null
  );
  const [clickLocation, setClickLocation] = useState<{
    La: number;
    Ma: number;
  }>(null);

  useEffect(() => {
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 15,
    });

    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map,
    });
  }, [myLocation]);

  useEffect(() => {
    // RN에서 웹으로 데이터를 전송했을때 message이벤트가 실행됩니다.
    document.addEventListener("message", (e: any) => {
      const lat = e.data?.match(/lat=([0-9]*)/)[1];
      alert(lat);
      const { long } = e.data;
      setMyLocation({ Ma: lat, La: long });
    });
  }, []);
  return (
    <Container>
      <button
        onClick={() =>
          ReactNativeWebView.postMessage(JSON.stringify(clickLocation))
        }
      >
        포스트
      </button>
      <div id="map" style={{ width: "100%", height: `calc(100vh - 268px)` }} />
    </Container>
  );
}

export default React.memo(MapIndex);

const Container = styled.section`
  width: 100%;
`;
