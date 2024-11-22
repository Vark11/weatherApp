import { ReactElement } from "react";

export function WindDirectionCompas({
  windDirection,
  windSpeed,
}: {
  windDirection: number;
  windSpeed: number;
}): ReactElement {
  return (
    <div className="wind-direction-div">
      <div className="wind-direction-info">
        <div className="wind-direction-title">Wind</div>
        <div className="wind-direction-direction">
          <div className="wind-direction-direction-title">Direction:</div>
          <div className="wind-direction-value">
            {makeWindDirection(Number(windDirection.toFixed(0)))}
          </div>
        </div>

        <div className="wind-direction-speed">
          <div className="wind-direction-speed-title">Speed:</div>
          <div className="wind-direction-speed-value">
            {windSpeed.toFixed(1)}km/h
          </div>
        </div>
      </div>
      <WindSircle
        style={{ transform: "rotate(-" + windDirection.toFixed(0) + "deg)" }}
      />
      <div className="wind-direction-north">N</div>
      <div className="wind-direction-west">W</div>
      <div className="wind-direction-south">S</div>
      <div className="wind-direction-east">E</div>
    </div>
  );
}

function WindSircle({ style }: { style: { transform: string } }): ReactElement {
  return (
    <div className="wind-direction-sircle-div">
      <svg
        className="wind-direction-svg-sircle-svg"
        style={style}
        width="95"
        height="95"
        viewBox="0 0 95 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="47.5"
          cy="47.5"
          r="46.5"
          fill="#333D42"
          stroke="#F0F8FF"
          stroke-width="2"
        />
        <path
          d="M79.7071 47.7071C80.0976 47.3166 80.0976 46.6834 79.7071 46.2929L73.3431 39.9289C72.9526 39.5384 72.3195 39.5384 71.9289 39.9289C71.5384 40.3195 71.5384 40.9526 71.9289 41.3431L77.5858 47L71.9289 52.6569C71.5384 53.0474 71.5384 53.6805 71.9289 54.0711C72.3195 54.4616 72.9526 54.4616 73.3431 54.0711L79.7071 47.7071ZM47 48H79V46H47V48Z"
          fill="#F0F8FF"
        />
      </svg>
    </div>
  );
}

function makeWindDirection(windDirection: number): string {
  const madeWindDirection = [];
  if (windDirection <= 22.5) {
    madeWindDirection.push("east");
  } else if (windDirection <= 67.5) {
    madeWindDirection.push("north-east");
  } else if (windDirection <= 112.5) {
    madeWindDirection.push("north");
  } else if (windDirection <= 157.5) {
    madeWindDirection.push("north-west");
  } else if (windDirection <= 202.5) {
    madeWindDirection.push("west");
  } else if (windDirection <= 247.5) {
    madeWindDirection.push("south-west");
  } else if (windDirection <= 292.5) {
    madeWindDirection.push("south");
  } else if (windDirection <= 337.5) {
    madeWindDirection.push("south-east");
  } else {
    madeWindDirection.push("east");
  }

  return madeWindDirection[0] ? madeWindDirection[0] : "";
}
