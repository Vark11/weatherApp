import { ReactElement } from "react";

interface TemperatureInfoProps {
  minTemp: number;
  maxTemp: number;
}

export function TemperatureInfo(props: TemperatureInfoProps): ReactElement {
  return (
    <div className="temperature-info">
      <div className="temperature-info-title">Temperature</div>
      <div className="min-max-temp">
        <div className="min-temp">
          <div className="min-temp-text">min.:</div>
          <div className="min-temp-temp">
            <div className="min-temp-value">{Number(props.minTemp.toFixed(0))}</div>
            <div className="min-temp-celcius">°</div>
          </div>
        </div>
        <div className="max-temp">
          <div className="max-temp-text">max.:</div>
          <div className="max-temp-temp">
            <div className="max-temp-value">{Number(props.maxTemp.toFixed(0))}</div>
            <div className="max-temp-celcius">°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
