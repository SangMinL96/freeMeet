import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

const MapIndex = dynamic(() => import("../../components/map/MapIndex"), {
  ssr: false,
});
function MapPage() {
  return (
    <>
      {/* <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jt4thwo3nc"
      ></script> */}
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jt4thwo3nc&submodules=geocoder"
      ></script>
      <MapIndex />
    </>
  );
}

export default MapPage;
