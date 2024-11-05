import { ReactElement } from "react";
import DayBlock from "./DayBlock/DayBlock";

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
        key={i}
        temp={temp[i]}
        day={
          i <= 1
            ? i === 1
              ? "Today"
              : "Yesterday"
            : DAYSOFWEEK[new Date().getDay() + i - 1]
        }
        date={dates[i]}
        windSpeed={windSpeed[i]}
        windDirection={windDirection[i]}
        weatherCode={weatherCode[i]}
        index={i === 0 || i === days - 1 ? (i === 0 ? 0 : -1) : i === 1 ? 2 : 1}
      />
    );
  }

  return <div className="weather-containers">{dayBlocksArray}</div>;
}
