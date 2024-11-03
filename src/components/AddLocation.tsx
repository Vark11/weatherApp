import { ReactElement } from "react";
import { LatAndLong } from "./LatAndLong";
import { Location } from "./Location";

export function AddLocation(): ReactElement {

  return (
    <div className="add-locations">
      <h2 className="title-settings">Add location</h2> 
      <LatAndLong latOrLong="Latitude" disabled={false} lat={undefined} long={undefined}/>
      <LatAndLong latOrLong="Longitude" disabled={false} lat={undefined} long={undefined}/>
      <Location location="" disabled={false}/>
    </div>
  );
}