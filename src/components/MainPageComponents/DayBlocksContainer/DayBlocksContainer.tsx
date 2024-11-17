import { ReactElement } from "react";
import DayBlock from "./DayBlock/DayBlock";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface dayBlockProps {
  days: number;
  temp: number[];
  dates: string[];
  windSpeed: string[];
  windDirection: string[];
  weatherCode: number[];
  loclatlong: [string, number, number];
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
  loclatlong,
}: dayBlockProps): ReactElement {
  const dayBlocksArray: ReactElement[] = [];
  const [width] = useWindowSize();
  let daysCount: number;
  let i: number;
  if (width > 1050 && width <= 1550) {
    i = 1;
    daysCount = 4;
  } else {
    i = 0;
    daysCount = 5;
  }
  for (i; i < daysCount; i++) {
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
        loclatlong={loclatlong}
        index={
          width > 1050 && width <= 1550
            ? 3
            : i === 0 || i === days - 1
            ? i === 0
              ? 0
              : -1
            : i === 1
            ? 2
            : 1
        }
      />
    );
  }

  return <div className="weather-containers">{dayBlocksArray}</div>;
}
