import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faCloud,
  faBolt,
  faSnowflake,
  faCloudRain,
  faSmog,
  faQuestion,
  faThermometerHalf,
  faSpinner,
  faEye,
  faTint,
  faSmile,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";
//interface
import { WeatherInfo } from "../types/Agenda";
//reducers
import { RootState } from "../reducers/root";
import { GET_EVENT_LIST } from "../reducers/event";
import { Event } from "react-big-calendar";

const API_KEY = "b1ba56378836cbc4530aa5c6991311dc";

/** @interface props **/
interface WidgetProps {
  toggled: boolean;
  latitude: number;
  longitude: number;
  kakao: any;
  core: any;
}

const ONE_DAY = 86400000;

const getWheaterIcon = (wheater: string): IconProp => {
  switch (wheater) {
    case "Clear":
      return faSun;
    case "Clouds":
      return faCloud;
    case "Thunderstorm":
      return faBolt;
    case "Snow":
      return faSnowflake;
    case "Mist":
      return faSmog;
    case "Dust":
      return faSmog;
    case "Haze":
      return faSmog;
    case "Rain":
      return faCloudRain;
    default:
      return faQuestion;
  }
};

const getWheatherInfoURL = (latitude: number, longitude: number): string =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

const Widget = ({ toggled, latitude, longitude, kakao, core }: WidgetProps) => {
  const { nickName } = useSelector((root: RootState) => root.user);

  const { list } = useSelector((root: RootState) => root.event);

  const dispatch = useDispatch();

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  const [todo, setTodo] = useState<Array<Event>>([]);

  useEffect(() => {
    dispatch({ type: GET_EVENT_LIST });
    //날씨정보가져오기
    if (latitude && longitude) {
      axios
        .get(getWheatherInfoURL(latitude, longitude))
        .then((value: AxiosResponse<any>) => {
          setWeatherInfo(value.data);
        })
        .catch((reason: any) => console.error(reason));
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (list?.length) {
      setTodo(
        list.filter(
          (event) =>
            new Date(event.end!.toString()).getTime() >=
            new Date().getTime() - ONE_DAY
        )
      );
    }
  }, [list]);

  return (
    <section
      id={toggled ? "appear" : "disappear"}
      className="bottom-3 grid grid-cols-3 gap-1 absolute top-auto z-50 w-80 text-gray-500 sm:top-3 sm:bottom-auto"
    >
      <div className="col-start-1 col-end-4 font-bold bg-white rounded-md flex justify-between items-center p-1">
        <div>
          <FontAwesomeIcon
            icon={getWheaterIcon(weatherInfo?.weather[0].main)}
            style={{ width: "1rem" }}
          />
          &nbsp;
          <strong className="text-xs">{weatherInfo?.name}</strong>
        </div>

        <strong className="text-xs">안녕하세요 {nickName}님!</strong>
      </div>
      {weatherInfo ? (
        <ul className="bg-white rounded-md flex flex-col justify-around">
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon
              style={{ width: "1rem" }}
              icon={faThermometerHalf}
            />
            <strong className="text-xs">{weatherInfo.main.temp}°C</strong>
          </li>
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon style={{ width: "1rem" }} icon={faEye} />
            <strong className="text-xs">{weatherInfo.visibility}m</strong>
          </li>
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon style={{ width: "1rem" }} icon={faTint} />
            <strong className="text-xs">{weatherInfo.main.humidity}g/m3</strong>
          </li>
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon style={{ width: "1rem" }} icon={faSmile} />
            <strong className="text-xs">{weatherInfo.main.feels_like}di</strong>
          </li>
        </ul>
      ) : (
        <ul className="bg-white rounded-md flex justify-center items-center">
          <li>
            <FontAwesomeIcon icon={faSpinner} spin />
          </li>
        </ul>
      )}
      <ul className="event_list bg-white rounded-md overflow-y-auto h-40 col-start-2 col-end-4 flex flex-col gap-1">
        {todo.length ? (
          todo.map((event, index) => (
            <li
              className="m-1 bg-gray-200 text-xs cursor-pointer"
              key={index}
              onClick={() => {
                const position = new kakao.maps.LatLng(
                  event.resource.position.Ma,
                  event.resource.position.La
                );
                return core.panTo(position);
              }}
            >
              {event.title}
            </li>
          ))
        ) : (
          <>
            <li className="flex justify-center">
              <strong className="text-xs">
                이런...예정된 이벤트가 없어요!
              </strong>&nbsp;
              <FontAwesomeIcon icon={faSkull} />
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Widget;
