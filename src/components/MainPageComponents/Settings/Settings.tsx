import { Dispatch, ReactElement, SetStateAction } from "react";
import { CurrentLocation } from "./Locations/CurrentLocationFolder/CurrentLocation";
import { AddLocation } from "./Locations/AddLocationFolder/AddLocation";
import { Search } from "./Search/Search";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface SettingsProps {
  latitude: number;
  longitude: number;
  locationName: string;
  setLatitude: Dispatch<SetStateAction<number>>;
  setLongitude: Dispatch<SetStateAction<number>>;
  setLocationName: Dispatch<SetStateAction<string>>;
  cookieRefreshed: string;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}

export function Settings(props: SettingsProps): ReactElement {
  const [width] = useWindowSize();

  return (
    <div className="settings">
      {width > 1050 ? (
        <Search
          cookieRefreshed={props.cookieRefreshed}
          setCookieRefreshed={props.setCookieRefreshed}
          setLatitude={props.setLatitude}
          setLocationName={props.setLocationName}
          setLongitude={props.setLongitude}
        />
      ) : null}
      <CurrentLocation
        location={props.locationName}
        latitude={props.latitude}
        longitude={props.longitude}
      />
      <AddLocation setCookieRefreshed={props.setCookieRefreshed} />
    </div>
  );
}
