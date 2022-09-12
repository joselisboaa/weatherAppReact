import axios from "axios"
import { apiKey } from "./api"

export const weatherDataFetching = (city: string) => {
  const weatherData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  
  console.log(weatherData);
}