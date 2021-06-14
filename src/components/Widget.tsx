import React, { useEffect, useState } from "react";
import axios from "axios";
//db
import localforage from "../db/localforage";
//interface
import { WeatherInfo } from "../types/Agenda";

const API_KEY = "b1ba56378836cbc4530aa5c6991311dc";

//props interface
interface WidgetProps {
  latitude: number;
  longitude: number;
}

const getWheatherInfoURL = (latitude: number, longitude: number): string =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

const Widget = ({ latitude, longitude }: WidgetProps) => {
  const [name, setName] = useState<String | unknown>("");

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    //계정명가져오기
    localforage.getItem("NAME").then((value) => {
      setName((): String | unknown => value);
    });
    //날씨정보가져오기
    if (latitude && longitude) {
      axios
        .get(getWheatherInfoURL(latitude, longitude))
        .then((value) => {
          setWeatherInfo(value.data);
        })
        .catch((reason) => console.error(reason));
    }
  }, [latitude, longitude]);

  return (
    <section className="grid grid-cols-2 gap-1 absolute z-50 top-3 right-3 w-72">
      <div className="col-start-1 col-end-3 font-bold bg-white rounded-sm text-center">
        안녕하세요 {name}님!
      </div>
      <div className="bg-white rounded-sm h-48 overflow-hidden">
        {weatherInfo ? (
          <div>{JSON.stringify(weatherInfo.main.temp)}</div>
        ) : (
          <div>LOADING...</div>
        )}
      </div>
      <div className="bg-white rounded-sm h-48 overflow-hidden"></div>
    </section>
  );
};

export default Widget;
