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
    marker: null,
  });

  //상호작용
  const [interaction, setIneraction] = useState({
    keyword: "",
    isSearched: false,
    data: null,
  });

  useEffect(() => {
    window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
    console.log(map);
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
    const container = document.getElementById("map");
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      setMap((map) => ({
        ...map,
        isLoaded: true,
        core: new kakao.maps.Map(container, {
          center: markerPosition,
          level: map.level,
        }),
        ps: new kakao.maps.services.Places(),
        marker: new kakao.maps.Marker({
          position: markerPosition,
        }),
      }));
    });
  };

  //장소입력
  const inputPlace = (e) => {
    setIneraction({
      ...inputPlace,
      keyword: e.target.value,
    });
  };

  //장소검색
  const searchPlace = (e) => {
    e.preventDefault();
    map.ps.keywordSearch(interaction.keyword, (data, status, pagination) => {
      if (status === "OK") {
        setIneraction({
          ...interaction,
          isSearched: true,
          data,
        });
      }
    });
  };

  //줌인
  const zoomIn = () => map.core.setLevel((map.level -= 1));

  //줌아웃
  const zoomOut = () => map.core.setLevel((map.level += 1));

  //지도이동
  const panTo = (x, y) => {
    const moveLatLon = new kakao.maps.LatLng(x, y);
    map.core.panTo(moveLatLon);
  };

  return (
    <article>
      <div className="h-screen" id="map" />
      <section className="absolute z-50 top-3 left-16">
        <form className="flex" onSubmit={searchPlace}>
          <input
            className="rounded-sm"
            type="text"
            placeholder="장소검색"
            onChange={inputPlace}
          />
          <button className="agenda-btn" type="submit">
            검색
          </button>
        </form>
        {interaction.isSearched && (
          <ul className="bg-white">
            {interaction.data.map((place) => (
              <li
                className="hover:bg-blue-500 hover:text-white p-1 cursor-pointer"
                key={place.id}
                onClick={() => panTo(place.x, place.y)}
              >
                {place.place_name.length > 13
                  ? place.place_name.substring(0, 13) + "..."
                  : place.place_name}
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="absolute z-50 top-1/3 right-3 bg-white flex flex-col rounded-sm">
        <button className="text-xl m-2 font-bold" onClick={initMap}>
          🔽
        </button>
        <button className="text-xl m-2 font-bold" onClick={zoomIn}>
          +
        </button>
        <button className="text-xl m-2 font-bold" onClick={zoomOut}>
          -
        </button>
      </section>
    </article>
  );
};

export default Map;
