import { ReactElement } from "react";
import DayBlock from "./DayBlock";

interface dayBlockArguments {
  days: number;
  temp: number[];
  dates: string[];
  windSpeed: string[];
  windDirection: string[];
  weatherCode: number[];
}

const DAYSOFWEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function DayBlocksContainer({
  days,
  temp,
  dates,
  windSpeed,
  windDirection,
  weatherCode,
}: dayBlockArguments): ReactElement {
  const dayBlocksArray: ReactElement[] = [];

  for (let i = 0; i < days; i++) {
    dayBlocksArray.push(
      <DayBlock
        temp={temp[i]}
        day={DAYSOFWEEK[new Date().getDay() + 1]}
        date={dates[i]}
        windSpeed={windSpeed[i]}
        windDirection={windDirection[i]}
        weatherCode={weatherCode[i]}
      />
    );
  }

  return <div className="weather-containers">{dayBlocksArray}</div>;
}
