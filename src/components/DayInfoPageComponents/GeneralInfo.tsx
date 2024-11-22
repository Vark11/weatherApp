import { ReactElement, useEffect, useState } from "react";
import { WeatherIcon } from "../MainPageComponents/DayBlocksContainer/DayBlock/WeatherIconAndWindDirection/WeatherIcon";

const DAYSOFWEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHSNAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface GeneralInfoProps {
  locationName: string;
  latitude: string;
  longitude: string;
  date: string;
  weatherCode: number;
}

export function GeneralInfo(props: GeneralInfoProps): ReactElement {
  const [dayDate, setDayDate] = useState<Date>(new Date());

  useEffect(() => {
    setDayDate(new Date(dayDate.setDate(Number(props.date.split(".")[1]))));
    setDayDate(
      new Date(dayDate.setMonth(Number(props.date.split(".")[0]) - 1))
    );
  }, [props]);

  return (
    <div className="general-info">
      <div className="location-name">{props.locationName}</div>
      <div className="latitude-and-longitude">
        <div className="latitude">Latitude: {props.latitude}</div>
        <div className="longitude">Longitude: {props.longitude}</div>
      </div>
      <div className="full-date">
        {DAYSOFWEEK[dayDate.getDay()]}, {dayDate.getDate()}{" "}
        {MONTHSNAMES[dayDate.getMonth()]} {dayDate.getFullYear()}
      </div>
      <div className="weather-icon-and-text">
        <div className="weather-icon">
          <WeatherIcon weatherCode={props.weatherCode} size={80} />
        </div>
        <div className="weather-text">{weatherCodeText(props.weatherCode)}</div>
      </div>
    </div>
  );
}

function weatherCodeText(weatherCode: number): string {
  switch (weatherCode) {
    case 0:
      return "clear sky";
    case 1:
      return "mainly clear";
    case 2:
      return "partly cloudy";
    case 3:
      return "overcast cloudy";
    case 45:
      return "fog";
    case 48:
      return "depositing rime fog";
    case 51:
      return "light drizzle";
    case 53:
      return "moderate drizzle";
    case 55:
      return "dense intensity drizzle";
    case 56:
      return "light freezing drizzle";
    case 57:
      return "dense intensity freezing drizzle";
    case 61:
      return "slaight rain";
    case 63:
      return "moderate rain";
    case 65:
      return "heavy intencity rain";
    case 66:
      return "light freezing rain";
    case 67:
      return "heavy intencity freezing rain";
    case 71:
      return "slight snow fall";
    case 73:
      return "moderate snow fall";
    case 75:
      return "heavy intencity snow fall";
    case 77:
      return "snow grains";
    case 80:
      return "rain showers";
    case 81:
      return "moderate rain showers";
    case 82:
      return "violent rain showers";
    case 85:
      return "slight snow showers";
    case 86:
      return "heavy snow showers";
    case 95:
      return "thunderstorn";
    case 96:
      return "thunderstorm with hail";
    case 99:
      return "thunderstorm with hail";
    default:
      return "no info";
  }
}
