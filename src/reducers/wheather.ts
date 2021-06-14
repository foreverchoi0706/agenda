import axios from "axios";
//interface
import { WeatherInfo } from "../types/Agenda";

//로그인
export const GET_INFO = "GET_INFO";


const API_KEY = "b1ba56378836cbc4530aa5c6991311dc";

const getWheatherInfoURL = (latitude: number, longitude: number): string =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

const initialState: WeatherInfo = {
    main: {
        temp: 0
    }
}

const wheather = (state: WeatherInfo = initialState, action: any) => {
    switch (action.type) {
        case GET_INFO:
            return state;
        default:
            return state;
    }
}

export default wheather;