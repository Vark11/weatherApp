import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/dayInfoPage.scss";
import { GeneralInfo } from "../components/DayInfoPageComponents/GeneralInfo";
import { getOneDayWeatherDataOpenMeteo } from "../weatherData/getWeatherFromServerOpenMeteo";
import { WindDirectionCompas } from "../components/DayInfoPageComponents/WindDirection";
import { makeWeatherDataFromOneDay } from "../weatherData/makeWeatherData";
import { Pressure } from "../components/DayInfoPageComponents/Pressure";
import { TemperatureInfo } from "../components/DayInfoPageComponents/TemperatureInfo";
import { Sun } from "../components/DayInfoPageComponents/Sun";
import { ChartTemperature } from "../components/DayInfoPageComponents/ChartTemperature";
import { useWindowSize } from "../hooks/useWindowSize";
import { LoadErrorElement } from "../components/LoadErrorComponent";

const WEATHERDATAINITIAL = {
  daily: {
    temperature2mMax: [],
    temperature2mMin: [],
    windSpeed10mMax: [],
    windDirection10mDominant: [],
    weatherCode: [],
    precipitationProbabilityMax: [],
  },
  current: {
    temperature2m: 0,
  },

  hourly: {
    temperature2m: [],
    surfacePressure: [],
  },
};

interface weatherDataType {
  daily: {
    temperature2mMax: number[];
    temperature2mMin: number[];
    windSpeed10mMax: number[];
    windDirection10mDominant: number[];
    weatherCode: number[];
    precipitationProbabilityMax: number[];
  };
  current: {
    temperature2m: number;
  };

  hourly: {
    temperature2m: number[];
    surfacePressure: number[];
  };
}

export default function DayInfoPage(): ReactElement {
  const { params } = useParams();
  const [locationName, setLocationName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [date, setDate] = useState("");
  const [temp24Hours, setTemp24Hours] = useState<number[]>([]);
  const [dataLoaded, setDataLaoded] = useState(false);
  const [weatherData, setWeatherData] =
    useState<weatherDataType>(WEATHERDATAINITIAL);
  const [width] = useWindowSize();
  const [errorLoadData, setErrorLoadData] = useState(false);

  useEffect(() => {
    const madeParams = makeParams(params!);
    setLocationName(madeParams[0]);
    setLatitude(madeParams[1]);
    setLongitude(madeParams[2]);
    setDate(madeParams[3]);
  }, [params]);

  useEffect(() => {
    getWeather(latitude, longitude, date);
  }, [latitude, longitude, date]);

  async function getWeather(latitude: string, longitude: string, date: string) {
    if (latitude !== "" && longitude !== "" && date != "") {
      const weather = await getOneDayWeatherDataOpenMeteo(
        latitude,
        longitude,
        date
      );
      if (weather instanceof Object) {
        setWeatherData(makeWeatherDataFromOneDay(weather));
        setErrorLoadData(false);
      } else {
        setErrorLoadData(true);
      }
      

      const madeTemp = () => {
        const madeT: number[] = [];
        weather.hourly.temperature2m.forEach(elem => madeT.push(Number(elem.toFixed(0))))
        return madeT;
      }

      setTemp24Hours(madeTemp);
      setTimeout(() => {
        setDataLaoded(true);
      }, 0);
    }
  }

  return (
    <div className="back-div">
      <main style={{ color: "white" }} className="main">
        <div className="day-info">
          {dataLoaded && !errorLoadData ? (
            <GeneralInfo
              locationName={locationName}
              latitude={latitude}
              longitude={longitude}
              date={date}
              weatherCode={weatherData.daily.weatherCode[0]}
            />
          ) : null}
          <div className="sun-and-temp-positioning-div">
            {dataLoaded && width >= 1160 && !errorLoadData ? <Sun /> : null}
            {dataLoaded ? (
              <TemperatureInfo
                minTemp={weatherData.daily.temperature2mMin[0]}
                maxTemp={weatherData.daily.temperature2mMax[0]}
              />
            ) : null}
            {dataLoaded && width < 1160 && !errorLoadData ? <Sun /> : null}
          </div>
          <div className="wind-and-pressure-positioning-div">
            {dataLoaded && !errorLoadData ? (
              <WindDirectionCompas
                windDirection={weatherData.daily.windDirection10mDominant[0]}
                windSpeed={weatherData.daily.windSpeed10mMax[0]}
              />
            ) : null}
            {dataLoaded && !errorLoadData ? (
              <Pressure
                pressureValue={Number(
                  weatherData.hourly.surfacePressure[0].toFixed(0)
                )}
                precipitationProbability={
                  weatherData.daily.precipitationProbabilityMax[0]
                }
              />
            ) : null}
          </div>
        </div>
        {dataLoaded && width >= 1160 && !errorLoadData ? <ChartTemperature data={temp24Hours}/> : null}
        {errorLoadData ? <LoadErrorElement /> : null}
      </main>
    </div>
  );
}

function makeParams(params: string): string[] {
  if (params) {
    const paramsSplitted = params.split("&");
    const locationName = paramsSplitted[3].split("location=")[1];
    const latitude = paramsSplitted[0].split("latitude=")[1];
    const longitude = paramsSplitted[1].split("longitude=")[1];
    const date = paramsSplitted[2].split("date=")[1];

    return [locationName, latitude, longitude, date];
  }

  throw new Error("invalid data");
}
