import React, { useEffect, useState } from "react";
import styled from "styled-components";

function MapIndex() {
  const [text, setText] = useState("");

  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng("37.4967867", "126.9978993"),
      zoom: 14,
    };
    const map = new naver.maps.Map("map", mapOptions);
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng("37.4967867", "126.9978993"),
      map: map,
      icon: {
        content: `
            <div style="display:+ flex; position: absolute; left: 0px; top: 0px;">
              <span style="z-index: 1;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31" height="33" viewBox="0 0 31 33">
                  <defs>
                    <filter id="패스_38027" x="0" y="0" width="31" height="33" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha"/>
                      <feGaussianBlur stdDeviation="3" result="blur"/>
                      <feFlood flood-opacity="0.161"/>
                      <feComposite operator="in" in2="blur"/>
                      <feComposite in="SourceGraphic"/>
                    </filter>
                  </defs>
                  <g id="그룹_2336" data-name="그룹 2336" transform="translate(-227.5 -7189.5)">
                    <g id="map-pin" transform="translate(234 7194.5)">
                      <g transform="matrix(1, 0, 0, 1, -6.5, -5)" filter="url(#패스_38027)">
                        <path id="패스_38027-2" data-name="패스 38027" d="M15,6.727C15,11.182,9,15,9,15S3,11.182,3,6.727A5.868,5.868,0,0,1,9,1a5.868,5.868,0,0,1,6,5.727Z" transform="translate(6.5 5.5)" fill="#4866e4" stroke="#4866e4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      </g>
                    </g>
                    <circle id="타원_208" data-name="타원 208" cx="2" cy="2" r="2" transform="translate(241 7200)" fill="#fff"/>
                  </g>
                </svg>
              </span>
              <div style="display: flex; text-align: center; justify-content:center; min-width:80px; padding: 0 11px; border: 1px solid #4866E4; position: absolute; left: 14px; top: -10px; background-color: #fff; font-size: 12px; border-radius: 100px; white-space: nowrap; color:#4866E4; font-weight: 600; line-height: 23px;">
                내앱앱앱
              </div>
            </div>
            `,
        size: new naver.maps.Size(22, 35),
        anchor: new naver.maps.Point(11, 35),
      },
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
