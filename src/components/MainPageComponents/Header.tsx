import { ReactElement, useState, Dispatch, SetStateAction, useEffect } from "react";
import { Search } from "./Settings/Search/Search";

interface HeaderProps {
  setLatitude: Dispatch<SetStateAction<number>>;
  setLongitude: Dispatch<SetStateAction<number>>;
  setLocationName: Dispatch<SetStateAction<string>>;
  cookieRefreshed: string;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}

export function Header(props: HeaderProps): ReactElement {

  return (
    <header className="header">
      <Search
        cookieRefreshed={props.cookieRefreshed}
        setCookieRefreshed={props.setCookieRefreshed}
        setLatitude={props.setLatitude}
        setLocationName={props.setLocationName}
        setLongitude={props.setLongitude}
      ></Search>
    </header>
  );
}
