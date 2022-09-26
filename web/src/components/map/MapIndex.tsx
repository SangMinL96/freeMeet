import React, { useEffect, useState } from "react";
import styled from "styled-components";

function MapIndex() {
  const [text, setText] = useState("");

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
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
    });
  }, []);
  useEffect(() => {
    // RN에서 웹으로 데이터를 전송했을때 message이벤트가 실행됩니다.
    window.addEventListener("message", (e: any) => {
      setText(e.data);
    });
  }, []);
  return (
    <Container>
      <div>왜왜왜왜ㅗ애ㅐ왜오왜ㅙ왱오오애</div>
      <div>{text}</div>
      <button onClick={() => ReactNativeWebView.postMessage("야야야포스트")}>
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
