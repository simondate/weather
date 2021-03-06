import axios from 'axios';

const API_KEY = 'ac2178ed8090891137a0382d69e70739';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('request ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
