import { ReactElement } from "react";
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
  return (
    <div className="general-info">
      <div className="location-name">{props.locationName}</div>
      <div className="latitude-and-longitude">
        <div className="latitude">Latitude: {props.latitude}</div>
        <div className="longitude">Longitude: {props.longitude}</div>
      </div>
      <div className="full-date">
        {DAYSOFWEEK[new Date().getDay()]}, {props.date.split(".")[1]}{" "}
        {MONTHSNAMES[new Date().getMonth()]} {new Date().getFullYear()}
      </div>
      <div className="weather-icon-and-text">
        <div className="weather-icon">
          <WeatherIcon weatherCode={props.weatherCode} size={80}/>
        </div>
        <div className="weather-text">{weatherCodeText(props.weatherCode)}</div>
      </div>
      
    </div>
  );
}


function Sunrise(): ReactElement {

  return (
    <div className="sunrise">
      <svg width="91" height="37" viewBox="0 0 91 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 33.5126H88" stroke="#F2480F" stroke-width="5" stroke-linecap="round"/>
      <path d="M73.7719 29C73.7719 42 46 31 46 31C46 31 16 43 16 29C16 12.4315 28.1741 0 44.4665 0C60.7589 0 73.7719 12.4315 73.7719 29Z" fill="#F2480F"/>
      <path d="M45.7071 5.29289C45.3166 4.90237 44.6834 4.90237 44.2929 5.29289L37.9289 11.6569C37.5384 12.0474 37.5384 12.6805 37.9289 13.0711C38.3195 13.4616 38.9526 13.4616 39.3431 13.0711L45 7.41421L50.6569 13.0711C51.0474 13.4616 51.6805 13.4616 52.0711 13.0711C52.4616 12.6805 52.4616 12.0474 52.0711 11.6569L45.7071 5.29289ZM46 27V6H44V27H46Z" fill="black"/>
      </svg>
      <div className="sunrise-text">Sunrise: no info</div>
    </div>
  );
}

function Sunset(): ReactElement {
  return (
    <div className="sunset">
      <svg width="91" height="37" viewBox="0 0 91 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 33.5126H88" stroke="#F2480F" stroke-width="5" stroke-linecap="round"/>
      <path d="M73.7719 29C73.7719 42 46 31 46 31C46 31 16 43 16 29C16 12.4315 28.1741 0 44.4665 0C60.7589 0 73.7719 12.4315 73.7719 29Z" fill="#F2480F"/>
      <path d="M44.2929 27.7071C44.6834 28.0976 45.3166 28.0976 45.7071 27.7071L52.0711 21.3431C52.4616 20.9526 52.4616 20.3195 52.0711 19.9289C51.6805 19.5384 51.0474 19.5384 50.6569 19.9289L45 25.5858L39.3431 19.9289C38.9526 19.5384 38.3195 19.5384 37.9289 19.9289C37.5384 20.3195 37.5384 20.9526 37.9289 21.3431L44.2929 27.7071ZM44 6V27H46V6H44Z" fill="black"/>
      </svg>
      <div className="sunset-text">Sunset: no info</div>
    </div>
  );
}

function weatherCodeText(weatherCode: number): string {
  switch(weatherCode) {
    case 0: return 'clear sky';
    case 1: return 'mainly clear';
    case 2: return 'partly cloudy';
    case 3: return 'overcast cloudy';
    case 45: return 'fog';
    case 48: return 'depositing rime fog';
    case 51: return 'light drizzle';
    case 53: return 'moderate drizzle';
    case 55: return 'dense intensity drizzle';
    case 56: return 'light freezing drizzle';
    case 57: return 'dense intensity freezing drizzle';
    case 61: return 'slaight rain';
    case 63: return 'moderate rain';
    case 65: return 'heavy intencity rain';
    case 66: return 'light freezing rain';
    case 67: return 'heavy intencity freezing rain';
    case 71: return 'slight snow fall';
    case 73: return 'moderate snow fall';
    case 75: return 'heavy intencity snow fall';
    case 77: return 'snow grains';
    case 80: return 'rain showers';
    case 81: return 'moderate rain showers';
    case 82: return 'violent rain showers';
    case 85: return 'slight snow showers';
    case 86: return 'heavy snow showers';
    case 95: return 'thunderstorn';
    case 96: return 'thunderstorm with hail';
    case 99: return 'thunderstorm with hail';
    default: return 'no info';
  }
}