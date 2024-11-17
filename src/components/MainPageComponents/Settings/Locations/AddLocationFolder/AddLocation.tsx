import { ReactElement, SetStateAction, useRef, Dispatch } from "react";
import { LatAndLong } from "../LatAndLong";
import { Location } from "../Location";
import { AddLocationButton } from "./addLocationButtonFolder/AddLocationButton";

export function AddLocation({
  setCookieRefreshed,
}: {
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}): ReactElement {
  const lat = useRef(null);
  const long = useRef(null);
  const location = useRef(null);

  return (
    <div className="add-locations">
      <div className="add-locations-h2-div">
        <h2 className="title-settings">Add location</h2>
      </div>

      <div className="lat-and-long-add-location-div">
        <LatAndLong
          latOrLong="Latitude"
          disabled={false}
          lat={undefined}
          long={undefined}
          reference={lat}
        />
        <LatAndLong
          latOrLong="Longitude"
          disabled={false}
          lat={undefined}
          long={undefined}
          reference={long}
        />
      </div>
      <Location location="" disabled={false} reference={location} />
      <AddLocationButton
        lat={lat}
        long={long}
        location={location}
        setCookieRefreshed={setCookieRefreshed}
      />
    </div>
  );
}
