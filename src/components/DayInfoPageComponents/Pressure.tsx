import { ReactElement } from "react";

interface PressureProps {
  pressureValue: number;
  precipitationProbability: number;
}

export function Pressure({
  pressureValue,
  precipitationProbability,
}: PressureProps): ReactElement {
  return (
    <div className="pressure-div">
      <PressureValue pressureValue={pressureValue} />
      <PrecipitationProbability
        precipitationProbability={precipitationProbability}
      />
    </div>
  );
}

function PressureValue({
  pressureValue,
}: {
  pressureValue: number;
}): ReactElement {
  return (
    <div className="pressure-value">
      <PressureIcon />
      <div className="pressure-value-value">
        Pressure: 
        <div style={{paddingLeft: "40px"}}>
          {pressureValue}hPa
        </div>
      </div>
    </div>
  );
}

function PrecipitationProbability({
  precipitationProbability,
}: {
  precipitationProbability: number;
}): ReactElement {
  return (
    <div className="precipitation-probability">
      <PrecipitationIcon />
      <div className="precipitation-probability-value">
        Precipitation:
        <div style={{paddingLeft: "20px"}}>
          {precipitationProbability}%
        </div>
      </div>
    </div>
  );
}

function PressureIcon(): ReactElement {
  return (
    <svg
      fill="#ffffff"
      width="55px"
      height="55px"
      viewBox="-6.4 -6.4 76.80 76.80"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="#ffffff"
    >
      <path d="M40.9,27.2l-7.6,12.9C32.9,40.1,32.5,40,32,40c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5c0-1.6-0.8-3-1.9-3.9l7.3-12.4 c2,2.3,3.3,5.2,3.5,8.4c0,0.5,0.5,0.9,1,0.9h3.4c0.5,0,0.8-0.3,1-0.7c0.5-1.7,0.7-3.5,0.7-5.3c0-11-9-20-20-20s-20,9-20,20 c0,1.8,0.2,3.6,0.7,5.3c0.1,0.4,0.5,0.7,1,0.7H17c0.5,0,1-0.4,1-0.9C18.5,29.7,24.6,24,32,24C35.4,24,38.5,25.2,40.9,27.2z M32,48 c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S33.7,48,32,48z M25.8,23.3l-2.9-6.7c0,0,0-0.1-0.1-0.1c2.4-1.4,5.2-2.3,8.1-2.5v8 C29.2,22.2,27.4,22.6,25.8,23.3z M33,22v-8c3,0.2,5.7,1,8.1,2.5c0,0,0,0.1-0.1,0.1l-2.9,6.7C36.6,22.6,34.8,22.2,33,22z M49.6,36 h-1.7c-0.3-2.3-1.1-4.4-2.2-6.3l3.6-2.7c0.5,1.6,0.7,3.2,0.7,5C50,33.4,49.8,34.7,49.6,36z M48.6,25.1c-0.1,0-0.2,0.1-0.2,0.1 l-3.9,2.9c-0.3-0.4-0.7-0.8-1.1-1.2l1.4-2.4c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4l-1.2,2c-0.6-0.5-1.3-0.9-1.9-1.3 l2.8-6.5C45.4,19.6,47.4,22.1,48.6,25.1z M16.1,36h-1.7c-0.3-1.3-0.4-2.6-0.4-4c0-1.7,0.3-3.4,0.7-5l3.6,2.7 C17.2,31.6,16.4,33.7,16.1,36z M19.5,28.1l-3.9-2.9c-0.1-0.1-0.1-0.1-0.2-0.1c1.2-3,3.3-5.5,5.8-7.5l2.8,6.5 C22.2,25.2,20.7,26.5,19.5,28.1z" />
      <path d="M56,51h-6.3c5.1-4.7,8.3-11.5,8.3-19C58,17.7,46.3,6,32,6c-1.1,0-2.2,0.1-3.3,0.2C27.9,4.3,26.1,3,24,3h-1 c-2.2,0-4,1.8-4,4c0,0.8,0.3,1.5,0.8,2c-1.1,0.6-2.1,1.2-3.1,2H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h10.3C9.2,17.7,6,24.5,6,32 c0,14.3,11.7,26,26,26c5.7,0,11-1.9,15.3-5H56c1.7,0,3,1.3,3,3s-1.3,3-3,3h-1c-1.1,0-2-0.9-2-2c0-0.6,0.4-1,1-1c0.6,0,1-0.4,1-1 s-0.4-1-1-1c-1.7,0-3,1.3-3,3c0,2.2,1.8,4,4,4h1c2.8,0,5-2.2,5-5S58.8,51,56,51z M22,8c-0.6,0-1-0.4-1-1c0-1.1,0.9-2,2-2h1 c1.1,0,2.1,0.6,2.6,1.6C25,6.9,23.5,7.4,22,8C22,8,22,8,22,8z M26.9,8.5C26.7,9.9,25.5,11,24,11h-3.6C22.4,9.9,24.6,9,26.9,8.5z M32,56C18.8,56,8,45.2,8,32c0-7.7,3.7-14.6,9.4-19H24c2.7,0,4.9-2.1,5-4.8C30,8.1,31,8,32,8c13.2,0,24,10.8,24,24 c0,7.7-3.7,14.6-9.4,19H28c-0.6,0-1,0.4-1,1s0.4,1,1,1h15.6C40.2,54.9,36.2,56,32,56z" />
    </svg>
  );
}

function PrecipitationIcon(): ReactElement {
  return (
    <svg
      fill="#ffffff"
      width="45px"
      height="45px"
      viewBox="0 0 64 64"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="#ffffff"
      stroke-width="1.088"
    >
      <path d="M49.7,35.9C47.3,21.2,29.5,4,28.7,3.3c-0.4-0.4-1-0.4-1.4,0C26.4,4.1,6,23.7,6,39c0,12.1,9.9,22,22,22 c3.4,0,6.7-0.8,9.7-2.3c2.1,1.4,4.6,2.3,7.3,2.3c7.2,0,13-5.8,13-13C58,42.5,54.6,37.8,49.7,35.9z M28,59C17,59,8,50,8,39 C8,26.1,24.4,9,28,5.4C31.3,8.7,45,23,47.6,35.3C46.7,35.1,45.9,35,45,35c-7.2,0-13,5.8-13,13c0,3.7,1.5,7,4,9.3 C33.5,58.4,30.8,59,28,59z M45,59c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S51.1,59,45,59z" />
      <path d="M28,54c-8.3,0-15-6.7-15-15c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,9.4,7.6,17,17,17c0.6,0,1-0.4,1-1S28.6,54,28,54z" />
      <path d="M48.4,40.1c-0.5-0.2-1.1,0-1.3,0.5l-6,14c-0.2,0.5,0,1.1,0.5,1.3C41.7,56,41.9,56,42,56c0.4,0,0.8-0.2,0.9-0.6l6-14 C49.1,40.9,48.9,40.3,48.4,40.1z" />
      <path d="M44,44c0-1.7-1.3-3-3-3s-3,1.3-3,3s1.3,3,3,3S44,45.7,44,44z M40,44c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S40,44.6,40,44z " />
      <path d="M49,49c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S50.7,49,49,49z M49,53c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S49.6,53,49,53z " />
    </svg>
  );
}
