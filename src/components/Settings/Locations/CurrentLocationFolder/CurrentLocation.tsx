import { ReactElement} from "react";
import { LatAndLong } from "../LatAndLong";
import { Location } from "../Location";

interface CurrentLocationProps {
  location: string;
  latitude: number;
  longitude: number;
}

export function CurrentLocation({
  location,
  latitude,
  longitude,
}: CurrentLocationProps): ReactElement {
  return (
    <div className="current-locations">
      <div className="current-locations-h2-div">
        <h2 className="title-settings">Current location</h2>
      </div>
      <LatAndLong
        latOrLong="Latitude"
        disabled={true}
        lat={latitude.toString()}
        long={undefined}
        reference={undefined}
      />
      <LatAndLong
        latOrLong="Longitude"
        disabled={true}
        lat={undefined}
        long={longitude.toString()}
        reference={undefined}
      />
      <Location location={location} disabled={true} reference={null} />
    </div>
  );
}
