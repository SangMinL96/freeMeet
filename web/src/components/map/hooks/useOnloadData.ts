import { parseText } from "@utils/util";
import { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

type PropsType = {
  setMyLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
};

export const useOnloadData = ({ setMyLocation }: PropsType) => {
  useEffect(() => {
    // RN에서 웹으로 데이터를 전송했을때 message이벤트가 실행됩니다.
    const 받은내위치셋팅 = (item) => {
      const lat = parseText(item.data, "lat");
      const lng = parseText(item.data, "lng");
      setMyLocation({ lat, lng });
    };
    if (isIOS) {
      window.addEventListener("message", (e: any) => {
        받은내위치셋팅(e);
      });
    }
    if (isAndroid) {
      document.addEventListener("message", (e: any) => {
        받은내위치셋팅(e);
      });
    }
  }, []);
};
