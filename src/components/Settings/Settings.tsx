import { ReactElement, useState } from "react";
import { CurrentLocation } from "./Locations/CurrentLocationFolder/CurrentLocation";
import { AddLocation } from "./Locations/AddLocationFolder/AddLocation";
import { Search } from "./Search/Search";

export function Settings(): ReactElement {
  const [cookieRefreshed, setCookieRefreshed] = useState<string>(document.cookie);

  return (
    <div className="settings">
        <Search cookieRefreshed={cookieRefreshed} setCookieRefreshed={setCookieRefreshed}/>
        <CurrentLocation />
        <AddLocation setCookieRefreshed={setCookieRefreshed}/>
    </div>
  );
}
