import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/dayInfoPage.scss";

export function DayInfoPage(): ReactElement {
  const {params} = useParams();
  const [locationName, setLocationName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState(''); 
  useEffect(() => {
    const madeParams = makeParams(params!);
    
  }, [])

  return (
    <div className='back-div'>
      <main style={{color: "white"}} className='main'>
        <div className='general-info'>
          <div className='location-name'>{}</div>
          <div className='latitude'></div>
          <div className='longitude'></div>
        </div>
      </main>
    </div>
    
  );
}

function makeParams(params: string): string[] {
  const paramsSplitted = params.split('&');
  const locationName = paramsSplitted[3].split('location=')[0];
  const latitude = paramsSplitted[0].split('latitude=')[0];
  const longitude = paramsSplitted[1].split('longitude=')[0];
  const date = paramsSplitted[2].split('date=')[0];

  return [locationName, latitude, longitude, date];
}