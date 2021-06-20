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
  const { themeColor } = useSelector((root) => root.user);

  const dispatch = useDispatch();

  //지도
  const [map, setMap] = useState({
    level: 3, //지도레벨
    position: null, //현위치
    core: null, //지도코어
    ps: null, //지도검색
  });

  //상호작용
  const [interaction, setIneraction] = useState({
    keyword: "", //검색키워드
    isSearched: false, //검색여부
    data: null, //검색결과리스트
    position: null, //선택된검색결과
  });

  useEffect(() => {
    if (!map.core) {
      //카카오맵이로딩되지않았다면맵로딩함
      window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
    } else {
      //현위치마커
      setMaker(map.position);
      //검색마커
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
        position,
        core: new kakao.maps.Map(container, {
          center: position,
          level: map.level,
        }),
        ps: new kakao.maps.services.Places(),
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
    if (interaction.keyword) {
      //검색키워드가있다면검색
      map.ps.keywordSearch(interaction.keyword, (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
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
    setMaker(position, placeName, addressName);
    setIneraction((interaction) => ({
      ...interaction,
      isSearched: false,
      position,
    }));
  };

  //마커찍기
  const setMaker = (position, placeName = "현위치", addressName = "현위치") => {
    const marker = new kakao.maps.Marker({
      position,
    });
    marker.setMap(map.core);
    //마커에 이벤트 추가
    window.kakao.maps.event.addListener(marker, "click", () => {
      dispatch({
        type: CLICK_ADD,
        payload: { placeName, addressName, position },
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
          <button className={`bg-${themeColor} agenda-btn`} type="submit">
            검색
          </button>
        </form>
        {interaction.isSearched && (
          <ul className="bg-white">
            {interaction.data.map((place) => (
              <li
                className={`hover:bg-gray-200 hover:text-white border-b-2 p-1 cursor-pointer`}
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

      <Widget
        latitude={map.position?.getLat()}
        longitude={map.position?.getLng()}
      />

      <section className="absolute z-50 top-1/3 right-3 bg-white flex flex-col rounded-sm">
        <FontAwesomeIcon
          className={`text-${themeColor} m-2 cursor-pointer`}
          icon={faMapMarkerAlt}
          onClick={initMap}
        />
        <FontAwesomeIcon
          className={`text-${themeColor} m-2 cursor-pointer`}
          icon={faPlus}
          onClick={zoomIn}
        />
        <FontAwesomeIcon
          className={`text-${themeColor} m-2 cursor-pointer`}
          icon={faMinus}
          onClick={zoomOut}
        />
      </section>
    </article>
  );
};

export default Map;
