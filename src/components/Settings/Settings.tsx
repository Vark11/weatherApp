import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { CurrentLocation } from "./Locations/CurrentLocationFolder/CurrentLocation";
import { AddLocation } from "./Locations/AddLocationFolder/AddLocation";
import { Search } from "./Search/Search";

interface SettingsProps {
  latitude: number;
  longitude: number;
  locationName: string;
  setLatitude: Dispatch<SetStateAction<number>>;
  setLongitude: Dispatch<SetStateAction<number>>;
  setLocationName: Dispatch<SetStateAction<string>>;
}

export function Settings(props: SettingsProps): ReactElement {
  const [cookieRefreshed, setCookieRefreshed] = useState<string>(
    document.cookie
  );

  return (
    <div className="settings">
      <Search
        cookieRefreshed={cookieRefreshed}
        setCookieRefreshed={setCookieRefreshed}
        setLatitude={props.setLatitude}
        setLocationName={props.setLocationName}
        setLongitude={props.setLongitude}
      />
      <CurrentLocation
        location={props.locationName}
        latitude={props.latitude}
        longitude={props.longitude}
      />
      <AddLocation setCookieRefreshed={setCookieRefreshed} />
    </div>
  );
}
