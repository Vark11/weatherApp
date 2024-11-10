import { ReactElement } from "react";
import { WeatherIcon } from "../DayBlocksContainer/DayBlock/WeatherIconAndWindDirection/WeatherIcon";

interface weatherDay {
  temp: number;
  day: string;
  date: string;
  windSpeed: string;
  windDirection: string;
  weatherCode: number;
  index: number;
  minTemp: number;
  maxTemp: number;
  minTemp5Days: number;
  maxTemp5Days: number;
}

interface TemperatureScaleProps {
  minTemp5Days: number;
  maxTemp5Days: number;
  minTemp: number;
  maxTemp: number;
}

export default function DayBlocksPhoneResolution(
  weather: weatherDay
): ReactElement {
  return (
    <div className="day-block-phone" id={"dayBlock" + weather.date}>
      <div className="day-and-picture-phone-div">
        <div className="current-day-phone">{weather.day}</div>
        <div className="weather-picture-phone">
          <WeatherIcon weatherCode={weather.weatherCode} size={20} />
        </div>
      </div>

      <div className="min-max-temperature-phone">
        <div className="min-temperature-phone">{weather.minTemp}°</div>
        <TemperatureScale
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          minTemp5Days={weather.minTemp5Days}
          maxTemp5Days={weather.maxTemp5Days}
        />
        <div className="max-temperature-phone">{weather.maxTemp}°</div>
      </div>
    </div>
  );
}

function TemperatureScale({
  minTemp5Days,
  maxTemp5Days,
  minTemp,
  maxTemp,
}: TemperatureScaleProps): ReactElement {
  return (
    <div className="temperature-scale">
      <div
        className="temperature-scale-day-temperature-highlight"
        style={{
          width: `${
            Math.round(
              Number(
                (
                  ((maxTemp - minTemp) / (maxTemp5Days - minTemp5Days)) *
                  10
                ).toFixed(0)
              )
            ) * 10
          }%`,
          left: `${
            Math.round(
              Number(
                (
                  ((minTemp - minTemp5Days) / (maxTemp5Days - minTemp5Days)) *
                  10
                ).toFixed(0)
              )
            ) * 10
          }%`,
        }}
      ></div>
    </div>
  );
}
