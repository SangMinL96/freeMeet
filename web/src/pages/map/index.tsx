import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

const MapIndex = dynamic(() => import("../../components/map/MapIndex"), {
  ssr: false,
});
function MapPage() {
  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f6e6c247918cfb068a61063e16dc6aa6"
      ></script>
      <MapIndex />
    </>
  );
}

export default MapPage;
