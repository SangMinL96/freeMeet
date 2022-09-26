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
  const [text, setText] = useState("");

  useEffect(() => {
    // if (myLocation) {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450705, 126.570677), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      map,
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    var marker = new kakao.maps.Marker({
      map,
      // 지도 중심좌표에 마커를 생성합니다
      position: new kakao.maps.LatLng(33.450936, 126.569477),
    });
    var marker = new kakao.maps.Marker({
      map,
      // 지도 중심좌표에 마커를 생성합니다
      position: new kakao.maps.LatLng(33.450879, 126.56994),
    });

    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      setClickLocation(latlng);
    });
    // }
  }, [myLocation]);

  useEffect(() => {
    // RN에서 웹으로 데이터를 전송했을때 message이벤트가 실행됩니다.
    window.addEventListener("message", (e: any) => {
      const { lat, long } = e.data;
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
