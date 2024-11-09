import { ReactElement, useState} from 'react';

interface CurrentWeatherPhoneProps {
  locationName: string;
  temperature: number;
}

export function CurrentWeatherPhone(props: CurrentWeatherPhoneProps): ReactElement {

  return (
    <div className='current-weather-phone'>
      <div className='current-weather-phone-title'>Current location</div>
      <div className='current-weather-phone-location'>{props.locationName}</div>
      <div className='current-weather-phone-temperature'>{props.temperature.toFixed(0)}</div>
    </div>
  );
}