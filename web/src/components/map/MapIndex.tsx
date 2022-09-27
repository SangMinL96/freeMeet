import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isIOS, isAndroid } from "react-device-detect";
import { parseText } from "@utils/util";
import { useOnloadData } from "./hooks/useOnloadData";

function MapIndex() {
  const [clickAddr, setClickAddr] = useState(null);
  const [myLocation, setMyLocation] = useState<{ lat: number; lng: number }>(
    null
  );
  const [clickLocation, setClickLocation] = useState<{
    lat: number;
    lng: number;
  }>(null);
  useOnloadData({ setMyLocation });
  const sampleData = [
    {
      lat: 37.4904251,
      lng: 127.1247216,
    },
    {
      lat: 37.4904251,
      lng: 127.1,
    },
  ];

  useEffect(() => {
    // if (!myLocation) return;
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        myLocation?.lat || 37.4904251,
        myLocation?.lng || 127.1247216
      ),
      zoom: 15,
    });
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        myLocation?.lat || 37.4904251,
        myLocation?.lng || 127.1247216
      ),
      map: map,
    });

    map.setCursor("pointer");

    const searchCoordinateToAddress = (latlng) => {
      naver.maps.Service.reverseGeocode(
        {
          coords: latlng,
          orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR,
          ].join(","),
        },
        function (status, response) {
          if (status === naver.maps.Service.Status.ERROR) {
            if (!latlng) {
              return alert("ReverseGeocode Error, Please check latlng");
            }
            if (latlng.toString) {
              return alert("ReverseGeocode Error, latlng:" + latlng.toString());
            }
            if (latlng.x && latlng.y) {
              return alert(
                "ReverseGeocode Error, x:" + latlng.x + ", y:" + latlng.y
              );
            }
            return alert("ReverseGeocode Error, Please check latlng");
          }

          const address = response.v2.address;

          setClickAddr(address.roadAddress || address.jibunAddress);
        }
      );
    };

    map.addListener("click", function (e) {
      searchCoordinateToAddress(e.coord);
      marker.setPosition(e.coord);
    });

    // sampleData.forEach(
    //   (item) =>
    //     new naver.maps.Marker({
    //       position: new naver.maps.LatLng(item.lat, item.lng),
    //       map: map,
    //     })
    // );
  }, [myLocation]);

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
