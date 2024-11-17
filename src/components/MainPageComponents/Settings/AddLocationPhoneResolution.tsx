import { ReactElement, SetStateAction, useRef, Dispatch } from "react";
import { AddLocationButton } from "../Settings/Locations/AddLocationFolder/addLocationButtonFolder/AddLocationButton";
import { LatAndLong } from "../Settings/Locations/LatAndLong";

export function AddLocationPhoneResolution({
  setCookieRefreshed,
}: {
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}): ReactElement {
  const lat = useRef(null);
  const long = useRef(null);
  const location = useRef(null);

  return (
    <div className="add-location-phone-resolution">
      <div className="add-location-phone-resolution-title">ADD LOCATION</div>
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
      <div className="add-location-phone-resolution-location">
        <label className="add-location-phone-resolution-location-label">
          Location
        </label>
        <input
          className="add-location-phone-resolution-location-input"
          type="text"
          placeholder="..."
          ref={location}
        ></input>
      </div>
      <AddLocationButton
        lat={lat}
        long={long}
        location={location}
        setCookieRefreshed={setCookieRefreshed}
      />
    </div>
  );
}
