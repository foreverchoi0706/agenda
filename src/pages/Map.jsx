import React, { useEffect, useState } from "react";

// 카카오 맵 스크립트
const KAKAO_SCRIPT =
  "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce&libraries=services";

const Map = () => {
  const [map, setMap] = useState({
    isLoaded: false,
    data: null,
  });

  useEffect(() => {
    window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
  }, []);

  const initMap = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const container = document.getElementById("map");
      setMap(
        new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 3,
        })
      );
    });
  };

  const addKakaoMapScript = () => {
    const script = document.createElement("script");
    script.onload = () => kakao.maps.load(initMap);
    script.src = KAKAO_SCRIPT;
    document.head.appendChild(script);
  };
  return (
  <article>
        <div className="h-screen" id="map" />
  </article>
  );
};

export default Map;
