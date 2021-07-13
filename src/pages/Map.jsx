import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
//components
import Widget from "../components/Widget";
//reducers
import { CLICK_ADD, SET_RESOURCE } from "../reducers/user";

// 카카오맵스크립트
const KAKAO_SCRIPT =
  "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7c0a4bba1131d1334ee3dc75b1cc374f&libraries=services";

const Map = () => {
  const { themeColor } = useSelector((root) => root.user);

  const { list } = useSelector((root) => root.event);

  const dispatch = useDispatch();

  //지도
  const [map, setMap] = useState({
    level: 5, //지도레벨
    position: null, //현위치
    core: null, //지도코어
    places: null, //장소검색
    geocoder: null, //좌표검색
  });

  //검색위치
  const [interaction, setIneraction] = useState({
    keyword: "", //검색키워드
    isSearched: false, //검색여부
    data: null, //검색결과리스트
    position: null, //선택된검색결과
    bounds: null, //범위설정
  });

  useEffect(() => {
    if (!map.core) {
      //카카오맵이로딩되지않았다면맵로딩함
      window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
      return;
    }
    //현위치마커
    map.geocoder.coord2Address(
      map.position.getLng(),
      map.position.getLat(),
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          setMaker(map.position, "현위치", data[0].address.address_name);
          dispatch({
            type: SET_RESOURCE,
            payload: {
              position: map.position,
              placeName: "현위치",
              addressName: data[0].address.address_name,
            },
          });
        }
      }
    );
    map.bounds.extend(map.position);
    //이벤트마커
    list.forEach((event) => {
      if (
        new Date(event.end.toString()).getTime() >=
        new Date().getTime() - 86400000
      ) {
        const position = new kakao.maps.LatLng(
          event.resource.position.Ma,
          event.resource.position.La
        );
        setEventMaker(position, event.resource.placeName, event.resource.tags);
        map.bounds.extend(position);
      }
    });
    map.core.setBounds(map.bounds);
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
    navigator.geolocation.getCurrentPosition((result) => {
      const container = document.getElementById("map");
      const { latitude, longitude } = result.coords;
      const position = new kakao.maps.LatLng(latitude, longitude);
      setMap((map) => ({
        position,
        core: new kakao.maps.Map(container, {
          center: position,
          level: map.level,
        }),
        places: new kakao.maps.services.Places(),
        geocoder: new kakao.maps.services.Geocoder(),
        bounds: new kakao.maps.LatLngBounds(),
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
      map.places.keywordSearch(interaction.keyword, (data, status) => {
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

  //현위치마커,검색마커찍기
  const setMaker = (position, placeName, addressName) => {
    const marker = new kakao.maps.Marker({
      position,
    });
    marker.setMap(map.core);
    //마커에 클릭 이벤트 추가
    window.kakao.maps.event.addListener(marker, "click", () => {
      dispatch({
        type: CLICK_ADD,
        payload: { placeName, addressName, position },
      });
    });
  };

  //이벤트마커찍기
  const setEventMaker = (position, placeName, tags) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지
    const imageSize = new kakao.maps.Size(32, 34.5); // 마커크기
    const imageOption = { offset: new kakao.maps.Point(13.5, 34.5) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    const marker = new kakao.maps.Marker({
      position,
      image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    });
    marker.setMap(map.core);
    const infowindow = new kakao.maps.InfoWindow({
      position,
      content: `
        <div class="w-36 flex flex-col justify-around">
          <h2 class="font-bold text-center">${placeName}</h2>
          <span class="mx-2 p-1 text-sm text-center">#${
            tags.length ? tags.map((tag) => tag) : "태그없음"
          }</span>
        </div>`,
      removable: document.body.clientWidth <= 1024 ? true : false,
    });
    //마커에인포윈도우이벤트추가
    window.kakao.maps.event.addListener(marker, "mouseover", () => {
      infowindow.open(map.core, marker);
    });
    window.kakao.maps.event.addListener(marker, "mouseout", () => {
      infowindow.close();
    });
    window.kakao.maps.event.addListener(marker, "click", () => {
      infowindow.open(map.core, marker);
    });
  };

  return (
    <article>
      <div className="h-screen" id="map" />
      <section className="w-5/6 absolute z-50 top-3 left-12 sm:w-auto sm:left-16">
        <form className="flex" onSubmit={searchPlace} onClick={searchPlace}>
          <input
            className="w-full focus:outline-none rounded-md rounded-r-none"
            type="text"
            placeholder=" 장소검색"
            onChange={inputPlace}
          />
          <button className={`bg-${themeColor} agenda-btn`} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        {interaction.isSearched && (
          <ul className="bg-white">
            {interaction.data.map((place) => (
              <li
                className={`hover:bg-gray-200 hover:text-white px-3 border-gray-100 border-2 text-sm cursor-pointer`}
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
        kakao={window.kakao}
        core={map.core}
      />
      <section
        className="absolute z-50 top-1/3 right-3 bg-white flex flex-col rounded-md"
        onClick={() => map.core.panTo(map.position)}
      >
        <FontAwesomeIcon
          className={`text-${themeColor} m-2 cursor-pointer`}
          icon={faMapMarkerAlt}
        />
      </section>
    </article>
  );
};

export default Map;
