import React, { useEffect, useState } from "react";

// 카카오맵스크립트
const KAKAO_SCRIPT =
  "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce&libraries=services";

const Map = () => {
  //지도
  const [map, setMap] = useState({
    isLoaded: false,
    level: 3,
    core: null,
    ps: null,
  });

  //상호작용
  const [interaction, setIneraction] = useState({
    keyword: "",
  });

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e);
      if (e.key === "Enter") searchPlace();
    });
    window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
  }, []);

  //스크립트추가
  const addKakaoMapScript = () => {
    const script = document.createElement("script");
    script.onload = () => kakao.maps.load(initMap);
    script.src = KAKAO_SCRIPT;
    document.head.appendChild(script);
  };

  //맵초기화
  const initMap = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const container = document.getElementById("map");
      setMap({
        ...map,
        core: new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 3,
        }),
        ps: new kakao.maps.services.Places(),
      });
    });
  };

  //장소입력
  const inputPlace = (e) => {
    setIneraction({
      ...inputPlace,
      keyword: e.target.value,
    });
    console.log(map);
  };

  //장소검색
  const searchPlace = () => {
    map.ps.keywordSearch(interaction.keyword, (data, status, pagination) => {
      console.log(data);
      console.log(status);
      console.log(pagination.nextPage());
    });
  };

  //줌인
  const zoomIn = () => map.core.setLevel((map.level -= 1));

  //줌아웃
  const zoomOut = () => map.core.setLevel((map.level += 1));

  return (
    <article>
      <div className="h-screen" id="map" />
      <section className="flex absolute z-50 top-3 left-16">
        <input
          className="rounded-sm"
          type="text"
          placeholder="장소검색"
          onChange={inputPlace}
        />
        <button className="agenda-btn" onClick={searchPlace}>
          검색
        </button>
      </section>
      <section className="absolute z-50 top-1/2 right-3 bg-white flex flex-col rounded-sm">
        <button className="text-xl m-5" onClick={zoomIn}>
          +
        </button>
        <button className="text-xl m-5" onClick={zoomOut}>
          -
        </button>
      </section>
    </article>
  );
};

export default Map;
