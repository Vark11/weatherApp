import { ReactElement } from "react";
import { WeatherIcon } from "./WeatherIconAndWindDirection/WeatherIcon";
import { WindDirection } from "./WeatherIconAndWindDirection/WindDirection";
import { useEffect } from "react";
import CSS from "csstype";
import { useNavigate } from "react-router-dom";

interface weatherDay {
  temp: number;
  day: string;
  date: string;
  windSpeed: string;
  windDirection: string;
  weatherCode: number;
  index: number;
  loclatlong: [string, number, number];
}

const styledDayBlockFirst: CSS.Properties = {
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
};
const styledDayBlockLast: CSS.Properties = {
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
};
const styledTodayBlock: CSS.Properties = {
  backgroundColor: "#475055",
};
const styled3Block: CSS.Properties = {
  borderRadius: "20px",
};

export default function DayBlock(weather: weatherDay): ReactElement {
  const navigator = useNavigate();

  useEffect(() => changeBackgroundDayBlock(weather), [weather]);

  function handleDayBlockClick() {
    navigator(
      `/day/latitude=${weather.loclatlong[1]}&longitude=${weather.loclatlong[2]}&date=${weather.date}&location=${weather.loclatlong[0]}`
    );
  }

  return (
    <div
      className="day-block"
      style={
        weather.index !== 3
          ? weather.index !== 1
            ? weather.index === -1
              ? styledDayBlockLast
              : weather.index === 0
              ? styledDayBlockFirst
              : styledTodayBlock
            : undefined
          : styled3Block
      }
      id={"dayBlock" + weather.date}
      onClick={handleDayBlockClick}
    >
      <div className="current-day">{weather.day}</div>
      <div className="current-date">{weather.date}</div>
      <div className="current-temperature">
        <div className="current-temperature-value">{weather.temp}</div>
        <div className="celcius">°c</div>
      </div>
      <div className="weather-picture">
        <WeatherIcon weatherCode={weather.weatherCode} size={80} />
      </div>
      <div className="wind">
        <div className="wind-direction">
          <WindDirection direction={weather.windDirection} />
        </div>
        <div className="wind-speed">{weather.windSpeed}km/h</div>
      </div>
      <a href="http://localhost:3000/" className="more-info-ref">
        More info
      </a>
    </div>
  );
}

function changeBackgroundDayBlock(weather: weatherDay): void {
  const dayBlock = document.getElementById("dayBlock" + weather.date);
  if (dayBlock) {
    dayBlock.addEventListener("mouseover", () => {
      dayBlock.style.backgroundColor = "#293135";
    });
    dayBlock.addEventListener("mouseout", () => {
      if (
        dayBlock.id ===
          "dayBlock" +
            (new Date().getMonth() + 1) +
            "." +
            new Date().getDate() &&
        weather.index !== 3
      ) {
        dayBlock.style.backgroundColor = "#475055";
      } else if (
        dayBlock.id ===
          "dayBlock" +
            (new Date().getMonth() + 1) +
            ".0" +
            new Date().getDate() &&
        weather.index !== 3
      ) {
        dayBlock.style.backgroundColor = "#475055";
      } else {
        dayBlock.style.backgroundColor = "";
      }
    });
  }
}
