import { useEffect, useState, ReactElement } from "react";
import "../styles/main.scss";
import { getWeatherDataOpenMeteo } from "../weatherData/getWeatherFromServerOpenMeteo";
import { AddLocationPhoneResolution } from "../components/MainPageComponents/Settings/AddLocationPhoneResolution";
import { Header } from "../components/MainPageComponents/Header";
import { DayBlocksContainer } from "../components/MainPageComponents/DayBlocksContainer/DayBlocksContainer";
import { DayBlocksContainerPhoneResolution } from "../components/MainPageComponents/DayBlocksContainerPhoneResolution/DayBlocksContainerPhoneResolution";
import { Settings } from "../components/MainPageComponents/Settings/Settings";
import {
  makeTemp,
  makeDates,
  makeWindDirection,
  makeWindSpeed,
  makeWeatherData,
} from "../weatherData/makeWeatherData";
import { useWindowSize } from "../hooks/useWindowSize";
import { CurrentWeatherPhone } from "../components/MainPageComponents/CurrentWeatherPhone";
import { LoadErrorElement } from "../components/LoadErrorComponent";

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
  };
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
  const [latitude, setLatitude] = useState<number>(initialLatitude());
  const [longitude, setLongitued] = useState<number>(initialLongitude());
  const [locationName, setLocationName] = useState<string>(
    ("; " + document.cookie)
      .split(`; currentLocation=`)
      .pop()!
      .split(";")[0] !== ""
      ? ("; " + document.cookie)
          .split(`; currentLocation=`)
          .pop()!
          .split(";")[0]
          .split("<>")[0]
      : "Moscow"
  );
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
  const [width] = useWindowSize();
  const [cookieRefreshed, setCookieRefreshed] = useState<string>(
    document.cookie
  );
  const [errorLoadData, setErrorLoadData] = useState(false);

  useEffect(() => {
    setCurrentTemperature(weatherData.current.temperature2m);
    setMadeTemp(makeTemp(weatherData));
    setMadeWindSpeed(makeWindSpeed(weatherData, daysOnScreenCount));
    setMadeDates(makeDates(currentDateObj, daysOnScreenCount));
    setMadeWindDirection(makeWindDirection(weatherData));
    setMadeWeatherCode(weatherData.daily.weatherCode);
  }, [weatherData, currentDateObj, daysOnScreenCount, width]);

  useEffect(() => {
    const pastDays = 1;
    const forecastDays = 4;
    setWeatherLoadedStatus(false);
    getWeatherData(latitude, longitude, pastDays, forecastDays);
  }, [latitude, longitude, width]);

  async function getWeatherData(
    latitude: number,
    longitude: number,
    pastDays: number,
    forecastDays: number
  ) {
    const weather = await getWeatherDataOpenMeteo(
      latitude,
      longitude,
      pastDays,
      forecastDays
    );
    if (weather instanceof Object) {
      setWeatherData(makeWeatherData(weather));
      setErrorLoadData(false);
    } else {
      setErrorLoadData(true);
    }

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
          {width > 1050 && !errorLoadData ? (
            <Settings
              latitude={latitude}
              longitude={longitude}
              locationName={locationName}
              setLatitude={setLatitude}
              setLongitude={setLongitued}
              setLocationName={setLocationName}
              cookieRefreshed={cookieRefreshed}
              setCookieRefreshed={setCookieRefreshed}
            />
          ) : weatherLoadedStatus && !errorLoadData ? (
            <CurrentWeatherPhone
              locationName={locationName}
              temperature={currentTemperature}
              maxTemp={Number(weatherData.daily.temperature2mMax[1].toFixed(0))}
              minTemp={Number(weatherData.daily.temperature2mMin[1].toFixed(0))}
            />
          ) : null}
          {weatherLoadedStatus && width > 1050 && !errorLoadData ? (
            <DayBlocksContainer
              days={daysOnScreenCount}
              temp={madeTemp}
              dates={madeDates}
              windSpeed={madeWindSpeed}
              windDirection={madeWindDirection}
              weatherCode={madeWeatherCode}
              loclatlong={[locationName, latitude, longitude]}
            />
          ) : weatherLoadedStatus && !errorLoadData ? (
            <DayBlocksContainerPhoneResolution
              days={daysOnScreenCount}
              temp={madeTemp}
              dates={madeDates}
              windSpeed={madeWindSpeed}
              windDirection={madeWindDirection}
              weatherCode={madeWeatherCode}
              maxTemp={weatherData.daily.temperature2mMax}
              minTemp={weatherData.daily.temperature2mMin}
              loclatlong={[locationName, latitude, longitude]}
            />
          ) : null}
          {weatherLoadedStatus && width <= 1050 && !errorLoadData ? (
            <AddLocationPhoneResolution
              setCookieRefreshed={setCookieRefreshed}
            />
          ) : null}
          {errorLoadData ? <LoadErrorElement /> : null}
        </div>
      </main>
    </div>
  );
}

export default Main;

function initialLatitude(): number {
  return ("; " + document.cookie)
    .split(`; currentLocation=`)
    .pop()!
    .split(";")[0] !== ""
    ? Number(
        ("; " + document.cookie)
          .split(`; currentLocation=`)
          .pop()!
          .split(";")[0]
          .split("<>")[1]
      )
    : 55.751244;
}

function initialLongitude(): number {
  return ("; " + document.cookie)
    .split(`; currentLocation=`)
    .pop()!
    .split(";")[0] !== ""
    ? Number(
        ("; " + document.cookie)
          .split(`; currentLocation=`)
          .pop()!
          .split(";")[0]
          .split("<>")[2]
      )
    : 37.618423;
}
