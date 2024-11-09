import { useEffect } from "react";
import "../styles/main.scss";
import { getWeatherDataOpenMeteo } from "../weatherData/getWeatherFromServerOpenMeteo";
import { useState } from "react";
import { ReactElement } from "react";
import { Header } from "../components/Header";
import { DayBlocksContainer } from "../components/DayBlocksContainer/DayBlocksContainer";
import { Settings } from "../components/Settings/Settings";
import {
  makeTemp,
  makeDates,
  makeWindDirection,
  makeWindSpeed,
  makeWeatherData,
} from "../weatherData/makeWeatherData";
import { useWindowSize } from "../hooks/useWindowSize";
import { CurrentWeatherPhone } from "../components/CurrentWeatherPhone";

interface weatherData {
  daily: {
    temperature2mMax: number[];
    temperature2mMin: number[];
    windSpeed10mMax: number[];
    windDirection10mDominant: number[];
    weatherCode: number[];
  };
  current: {
    temperature2m: number;
  }
}

const initialWeatherData = {
  daily: {
    temperature2mMax: [0, 0, 0, 0, 0],
    temperature2mMin: [0, 0, 0, 0, 0],
    windSpeed10mMax: [0, 0, 0, 0, 0],
    windDirection10mDominant: [0, 0, 0, 0, 0],
    weatherCode: [0, 0, 0, 0, 0],
  },
  current: {
    temperature2m: 0,
  },
};

function Main(): ReactElement {
  const [latitude, setLatitude] = useState<number>(55.751244);
  const [longitude, setLongitued] = useState<number>(37.618423);
  const [locationName, setLocationName] = useState<string>("Moscow");
  const [weatherData, setWeatherData] =
    useState<weatherData>(initialWeatherData);
  const [madeTemp, setMadeTemp] = useState<number[]>([]);
  const [currentTemperature, setCurrentTemperature] = useState(0);
  const [madeWindSpeed, setMadeWindSpeed] = useState<string[]>([]);
  const [madeDates, setMadeDates] = useState<string[]>([]);
  const [madeWindDirection, setMadeWindDirection] = useState<string[]>([]);
  const [madeWeatherCode, setMadeWeatherCode] = useState<number[]>([]);
  const [currentDateObj, setCurrentDateObj] = useState(new Date());
  const [daysOnScreenCount, setDaysOnScreenCount] = useState(5);
  const [weatherLoadedStatus, setWeatherLoadedStatus] = useState(false);
  const [width, height] = useWindowSize();
  const [cookieRefreshed, setCookieRefreshed] = useState<string>(
    document.cookie
  );

  useEffect(() => {
    setCurrentTemperature(weatherData.current.temperature2m);
    setMadeTemp(makeTemp(weatherData));
    setMadeWindSpeed(makeWindSpeed(weatherData, daysOnScreenCount));
    setMadeDates(makeDates(currentDateObj, daysOnScreenCount));
    setMadeWindDirection(makeWindDirection(weatherData, daysOnScreenCount));
    setMadeWeatherCode(weatherData.daily.weatherCode);
  }, [weatherData, currentDateObj, daysOnScreenCount]);

  useEffect(() => {
    getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  async function getWeatherData(latitude: number, longitude: number) {
    const weather = await getWeatherDataOpenMeteo(latitude, longitude);
    setWeatherData(makeWeatherData(weather));
    setTimeout(() => setWeatherLoadedStatus(true), 0);
  }

  return (
    <div className="page">
      {width <= 1050 ? (
        <Header
          setLatitude={setLatitude}
          setLongitude={setLongitued}
          setLocationName={setLocationName}
          cookieRefreshed={cookieRefreshed}
          setCookieRefreshed={setCookieRefreshed}
        />
      ) : null}
      <main className="main">
        <div className="center-div">
          {width > 1050 ? <Settings
            latitude={latitude}
            longitude={longitude}
            locationName={locationName}
            setLatitude={setLatitude}
            setLongitude={setLongitued}
            setLocationName={setLocationName}
            cookieRefreshed={cookieRefreshed}
            setCookieRefreshed={setCookieRefreshed}
          /> : <CurrentWeatherPhone locationName={locationName} temperature={currentTemperature}/>}
          {(weatherLoadedStatus && width > 1050) ? (
            <DayBlocksContainer
              days={daysOnScreenCount}
              temp={madeTemp}
              dates={madeDates}
              windSpeed={madeWindSpeed}
              windDirection={madeWindDirection}
              weatherCode={madeWeatherCode}
            />
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default Main;
