import axios from 'axios';

const API_KEY = 'ac2178ed8090891137a0382d69e70739';
const ROOT_URL = `https://openweathermap.org/api/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
