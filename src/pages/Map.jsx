import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
//components
import Widget from "../components/Widget";
//reducers
import { CLICK_ADD } from "../reducers/user";

// 카카오맵스크립트
const KAKAO_SCRIPT =
  "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce&libraries=services";

const Map = () => {
  const { name } = useSelector((root) => root.user);

  const dispatch = useDispatch();

  //지도
  const [map, setMap] = useState({
    level: 3, //지도레벨
    latitude: null, //지도위도
    longitude: null, //지도경도
    core: null, //지도코어
    ps: null, //지도검색
  });

  //상호작용
  const [interaction, setIneraction] = useState({
    keyword: "",
    isSearched: false,
    data: null,
    position: null,
  });

  useEffect(() => {
    if (!map.core) {
      //카카오맵이로딩되지않았다면맵로딩함
      window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
    } else {
      //로딩되었다면마커찍음
      if (interaction.position) {
        setMaker(interaction.position);
      }
    }
  }, [map]);

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
    navigator.geolocation.getCurrentPosition(async (result) => {
      const { latitude, longitude } = result.coords;
      const position = new kakao.maps.LatLng(latitude, longitude);
      setMap((map) => ({
        latitude,
        longitude,
        core: new kakao.maps.Map(container, {
          center: position,
          level: map.level,
        }),
        ps: new kakao.maps.services.Places(),
      }));
      setMaker(position);
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
    if (interaction.keyword) {
      //검색키워드가있다면검색
      map.ps.keywordSearch(interaction.keyword, (data, status, pagination) => {
        if (status === "OK") {
          setIneraction({
            ...interaction,
            isSearched: true,
            data,
          });
        }
      });
    }
  };

  //줌인
  const zoomIn = () => map.core.setLevel(() => (map.level -= 1));

  //줌아웃
  const zoomOut = () => map.core.setLevel(() => (map.level += 1));

  //지도이동
  const panTo = (x, y, placeName, addressName) => {
    const position = new kakao.maps.LatLng(y, x);
    map.core.panTo(position);
    console.log(position.La);
    setMaker(position);

    setIneraction((interaction) => ({
      ...interaction,
      isSearched: false,
      position,
    }));
  };

  //마커찍기
  const setMaker = (position) => {
    const marker = new kakao.maps.Marker({
      position,
    });
    marker.setMap(map.core);
    window.kakao.maps.event.addListener(marker, "click", () => {
      dispatch({
        type: CLICK_ADD,
        payload: {},
      });
    });
  };

  return (
    <article>
      <div className="h-screen" id="map" />
      <section className="absolute z-50 top-3 left-3 sm:left-16">
        <form className="flex" onSubmit={searchPlace} onClick={searchPlace}>
          <input
            className="focus:outline-none rounded-sm"
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
                className="hover:bg-blue-500 hover:text-white border-b-2 p-1 cursor-pointer"
                key={place.id}
                onClick={() =>
                  panTo(place.x, place.y, place.place_name, place.address_name)
                }
              >
                {place.place_name.length > 13
                  ? place.place_name.substring(0, 13) + "..."
                  : place.place_name}
              </li>
            ))}
          </ul>
        )}
      </section>

      <Widget latitude={map.latitude} longitude={map.longitude} />

      <section className="absolute z-50 top-1/3 right-3 bg-white flex flex-col rounded-sm">
        <FontAwesomeIcon
          className="m-2 cursor-pointer text-blue-500"
          icon={faMapMarkerAlt}
          onClick={initMap}
        />
        <FontAwesomeIcon
          className="m-2 cursor-pointer text-blue-500"
          icon={faPlus}
          onClick={zoomIn}
        />
        <FontAwesomeIcon
          className="m-2 cursor-pointer text-blue-500"
          icon={faMinus}
          onClick={zoomOut}
        />
      </section>
    </article>
  );
};

export default Map;
