import { useEffect } from "react";
import "../styles/main.scss";
import { getWeatherDataOpenMeteo } from "../weatherData/getWeatherFromServerOpenMeteo";
import { useState } from "react";
import { ReactElement } from "react";
import { DayBlocksContainer } from "../components/DayBlocksContainer/DayBlocksContainer";
import { Settings } from "../components/Settings/Settings";
import {
  makeTemp,
  makeDates,
  makeWindDirection,
  makeWindSpeed,
  makeWeatherData,
} from "../weatherData/makeWeatherData";

interface weatherData {
  daily: {
    temperature2mMax: number[];
    temperature2mMin: number[];
    windSpeed10mMax: number[];
    windDirection10mDominant: number[];
    weatherCode: number[];
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
};

function Main(): ReactElement {
  const [latitude, setLatitude] = useState<number>(55.751244);
  const [longitude, setLongitued] = useState<number>(37.618423);
  const [locationName, setLocationName] = useState<string>("Moscow");
  const [weatherData, setWeatherData] =
    useState<weatherData>(initialWeatherData);
  const [madeTemp, setMadeTemp] = useState<number[]>([]);
  const [madeWindSpeed, setMadeWindSpeed] = useState<string[]>([]);
  const [madeDates, setMadeDates] = useState<string[]>([]);
  const [madeWindDirection, setMadeWindDirection] = useState<string[]>([]);
  const [madeWeatherCode, setMadeWeatherCode] = useState<number[]>([]);
  const [currentDateObj, setCurrentDateObj] = useState(new Date());
  const [daysOnScreenCount, setDaysOnScreenCount] = useState(5);

  useEffect(() => {
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
  }

  return (
    <div className="page">
      <main className="main">
        {/* <button className="load-button" onClick={() => getWeatherData(latitude, longitude)}>
          LOADWEATHER
        </button> */}
        <div className="center-div">
          <Settings
            latitude={latitude}
            longitude={longitude}
            locationName={locationName}
            setLatitude={setLatitude}
            setLongitude={setLongitued}
            setLocationName={setLocationName}
          />
          <DayBlocksContainer
            days={daysOnScreenCount}
            temp={madeTemp}
            dates={madeDates}
            windSpeed={madeWindSpeed}
            windDirection={madeWindDirection}
            weatherCode={madeWeatherCode}
          />
        </div>
      </main>
    </div>
  );
}

export default Main;
