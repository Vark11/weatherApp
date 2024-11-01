import { ReactElement } from "react";
import { WeatherIcon } from "./WeatherIcon";

interface weatherDay {
  
}

export default function DayBlock(weather: object): ReactElement {
    return (
      <div className='day-block'>
        <div className="current-day">Today</div>
        <div className="current-date">10.01</div>
        <div className="current-temperature">
          <div className="current-temperature-value">3</div>
          <div className="celcius">°c</div>
        </div>
        {/* <div className="max-min-temperature">19°/7°</div> */}
        <div className="weather-picture">
          <WeatherIcon fill1="#FCB641" fill2="#FDC567"/>
        </div>
        <div className="wind">
          <div className="wind-direction">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.476 17.0801L16.3964 2.70252C16.0517 1.90651 15.4483 1.22277 14.6652 0.740735C13.8821 0.258704 12.9558 0.000823975 12.0075 0.000823975C11.0591 0.000823975 10.1328 0.258704 9.3497 0.740735C8.56663 1.22277 7.96325 1.90651 7.61848 2.70252L0.525531 17.0813C-0.0198731 18.1239 -0.145358 19.305 0.170627 20.4219C0.486612 21.5388 1.22435 22.5218 2.25714 23.2019C3.02992 23.7137 3.96211 23.993 4.92116 24C6.09871 23.9857 7.22585 23.5672 8.07269 22.8299L10.6488 20.6768C11.0089 20.3583 11.4935 20.1798 11.9981 20.1798C12.5028 20.1798 12.9873 20.3583 13.3475 20.6768L15.9236 22.8299C16.6824 23.5094 17.6868 23.9208 18.754 23.989C19.8211 24.0573 20.88 23.778 21.7378 23.2019C22.7718 22.5224 23.5109 21.5396 23.8281 20.4225C24.1454 19.3053 24.0209 18.1235 23.476 17.0801Z" fill="white"/>
            </svg>
          </div>
          <div className="wind-speed">12,7km/h</div>
        </div>
        <button className="more-info-button">More info</button>
      </div>
    )
}