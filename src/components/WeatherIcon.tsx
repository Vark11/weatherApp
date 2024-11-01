import { ReactElement } from "react";

interface fillColor {
  fill1: string,
  fill2: string,
}

export function WeatherIcon(props: fillColor): ReactElement {
  return (
    <svg height="80px" width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 483.512 483.512" xmlSpace="preserve">
      <polygon fill={props.fill1} points="483.512,241.752 428.928,291.688 450.944,362.328 378.6,377.952 362.328,450.152 
        291.824,427.664 241.752,482.144 191.688,427.664 121.184,450.152 104.912,377.952 32.56,362.328 54.584,291.688 0,241.752 
        54.584,191.824 32.568,121.184 104.912,105.552 121.184,33.36 191.688,55.848 241.752,1.368 291.824,55.848 362.328,33.36 
        378.6,105.56 450.944,121.184 428.928,191.824 "/>
      <circle fill={props.fill2} cx="241.752" cy="244.504" r="138.736"/>
    </svg>
  )
}
