import React from 'react';
import '../styles/main.scss';
import { getWeatherDataTimeLine } from '../weatherData/getWeatherFromServerTimeLine';
import { getWeatherDataOpenMeteo } from '../weatherData/getWeatherFromServerOpenMeteo';
import DayBlock from '../components/DayBlock';
import Header from '../components/Header'
import { ReactElement } from "react";

// const weather1 = showWeather();
const weather2 = getWeatherDataOpenMeteo();

function Main(): ReactElement {

  return (
    <div className='page'>
      {/* <Header/> */}
      <main className='main'>
        <div className='weather-containers'>
          <DayBlock/>
          <DayBlock/>
          <DayBlock/>
          <DayBlock/>
          <DayBlock/>
        </div>
      </main>
    </div>
      
    
  );
}

async function showWeather () {
  const weather = await getWeatherDataTimeLine();

  return weather;
}


export default Main;
