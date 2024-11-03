import { ReactElement } from "react";
import { LatAndLong } from "./LatAndLong";
import { Location } from "./Location";

export function CurrentLocation(): ReactElement {

  return (
    <div className="current-locations">
      <h2 className="title-settings">Current location</h2> 
      <LatAndLong latOrLong="Latitude" disabled={true} lat={'13.51'} long={undefined}/>
      <LatAndLong latOrLong="Longitude" disabled={true} lat={undefined} long={'51.51'}/>
      <Location location="Moscow" disabled={true}/>
    </div>
  );
}
