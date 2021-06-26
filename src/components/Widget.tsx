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
} from "@fortawesome/free-solid-svg-icons";
//interface
import { WeatherInfo } from "../types/Agenda";
//reducers
import { RootState } from "../reducers/root";
import { GET_EVENT_LIST } from "../reducers/event";

const API_KEY = "b1ba56378836cbc4530aa5c6991311dc";

/** @interface props **/
interface WidgetProps {
  latitude: number;
  longitude: number;
  panTo: any;
}

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

const Widget = ({ latitude, longitude, panTo }: WidgetProps) => {
  const { nickName } = useSelector((root: RootState) => root.user);

  const { list } = useSelector((root: RootState) => root.event);

  const dispatch = useDispatch();

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

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

  return (
    <section className="hidden sm:grid grid-cols-3 gap-1 absolute z-50 top-3 right-3 w-96 text-gray-500">
      <div className="col-start-1 col-end-4 font-bold bg-white rounded-sm flex justify-between items-center p-1">
        <div>
          <FontAwesomeIcon
            icon={getWheaterIcon(weatherInfo?.weather[0].main)}
            style={{ width: "1rem" }}
          />
          &nbsp;
          {weatherInfo?.name}
        </div>

        <strong className="text-sm">안녕하세요 {nickName}님!</strong>
      </div>
      {weatherInfo ? (
        <ul className="bg-white rounded-sm flex flex-col justify-around">
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon
              style={{ width: "1rem" }}
              icon={faThermometerHalf}
            />
            {weatherInfo.main.temp}°C
          </li>
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon style={{ width: "1rem" }} icon={faEye} />
            {weatherInfo.visibility}m
          </li>
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon style={{ width: "1rem" }} icon={faTint} />
            {weatherInfo.main.humidity}g/m3
          </li>
          <li className="flex justify-between items-center m-1">
            <FontAwesomeIcon style={{ width: "1rem" }} icon={faSmile} />
            {weatherInfo.main.feels_like}di
          </li>
        </ul>
      ) : (
        <ul className="bg-white rounded-md flex justify-center items-center">
          <li>
            <FontAwesomeIcon icon={faSpinner} spin />
          </li>
        </ul>
      )}
      <ul className="event_list bg-white rounded-sm overflow-y-auto h-40 col-start-2 col-end-4 flex flex-col gap-1">
        {list!.length ?
          list
            ?.filter(
              (event) =>
                new Date(event.end!.toString()).getTime() >=
                new Date().getTime() - 86400000
            )
            .map((event, index) => (
              <li
                className="m-1 bg-gray-200 cursor-pointer"
                key={index}
                onClick={() => panTo(event?.resource?.position)}
              >
                {event.title}
              </li>
            )) : null}
      </ul>
    </section>
  );
};

export default Widget;
