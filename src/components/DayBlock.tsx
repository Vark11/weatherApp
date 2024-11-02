import { ReactElement } from "react";
import { WeatherIcon } from "./WeatherIcon";
import { WindDirection } from "./WindDirection";

interface weatherDay {
  temp: number;
  day: string;
  date: string;
  windSpeed: string;
  windDirection: string;
  weatherCode: number;
}

export default function DayBlock(weather: weatherDay): ReactElement {
  return (
    <div className="day-block">
      <div className="current-day">{weather.day}</div>
      <div className="current-date">{weather.date}</div>
      <div className="current-temperature">
        <div className="current-temperature-value">{weather.temp}</div>
        <div className="celcius">°c</div>
      </div>
      {/* <div className="max-min-temperature">19°/7°</div> */}
      <div className="weather-picture">
        <WeatherIcon weatherCode={weather.weatherCode} />
      </div>
      <div className="wind">
        <div className="wind-direction">
          <WindDirection direction={weather.windDirection} />
        </div>
        <div className="wind-speed">{weather.windSpeed}km/h</div>
      </div>
      <button className="more-info-button">More info</button>
    </div>
  );
}
