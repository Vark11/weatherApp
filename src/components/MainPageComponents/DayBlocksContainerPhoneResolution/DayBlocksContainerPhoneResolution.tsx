import { ReactElement } from "react";
import DayBlocksPhoneResolution from "./DayBlockPhoneResolution";

interface dayBlockArguments {
  days: number;
  temp: number[];
  dates: string[];
  windSpeed: string[];
  windDirection: string[];
  weatherCode: number[];
  minTemp: number[];
  maxTemp: number[];
  loclatlong: [string, number, number];
}

const DAYSOFWEEK = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export function DayBlocksContainerPhoneResolution({
  days,
  temp,
  dates,
  windSpeed,
  windDirection,
  weatherCode,
  minTemp,
  maxTemp,
  loclatlong,
}: dayBlockArguments): ReactElement {
  const dayBlocksArray: ReactElement[] = [];

  for (let i = 0; i < days; i++) {
    dayBlocksArray.push(
      <DayBlocksPhoneResolution
        key={i}
        temp={temp[i]}
        day={
          i <= 1
            ? i === 1
              ? "Today"
              : DAYSOFWEEK[new Date().getDay() + i - 1]
            : DAYSOFWEEK[new Date().getDay() + i - 1]
        }
        date={dates[i]}
        windSpeed={windSpeed[i]}
        windDirection={windDirection[i]}
        weatherCode={weatherCode[i]}
        index={i === 0 || i === days - 1 ? (i === 0 ? 0 : -1) : i === 1 ? 2 : 1}
        minTemp={Number(minTemp[i].toFixed(0))}
        maxTemp={Number(maxTemp[i].toFixed(0))}
        minTemp5Days={Number(Math.min(...minTemp).toFixed(0))}
        maxTemp5Days={Number(Math.max(...maxTemp).toFixed(0))}
        loclatlong={loclatlong}
      />
    );
  }

  return <div className="weather-containers-phone">
    <div className="weather-containers-phone-title">FORECAST 5 DAYS</div>
    {dayBlocksArray}
    </div>;
}
