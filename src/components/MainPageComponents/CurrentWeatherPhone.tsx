import { ReactElement } from "react";

interface CurrentWeatherPhoneProps {
  locationName: string;
  temperature: number;
  maxTemp: number;
  minTemp: number;
}

export function CurrentWeatherPhone(
  props: CurrentWeatherPhoneProps
): ReactElement {
  return (
    <div className="current-weather-phone">
      <div className="current-weather-phone-title">Current location</div>
      <div className="current-weather-phone-location">{props.locationName}</div>
      <div className="current-weather-phone-temperature">
        {Number(props.temperature.toFixed(0))}
        <div className="current-weather-phone-temperature-celsius-symbol">
          °
        </div>
      </div>
      <div className="current-weather-phone-max-min-temperature">
        Max.:{props.maxTemp}°,min.:{props.minTemp}°
      </div>
    </div>
  );
}
