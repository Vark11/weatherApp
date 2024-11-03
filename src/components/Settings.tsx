import { ReactElement } from "react";
import { CurrentLocation } from "./CurrentLocation";
import { AddLocation } from "./AddLocation";
import { Search } from "./Search";

export function Settings(): ReactElement {
  return (
    <div className="settings">
      <Search />
      <CurrentLocation />
      <AddLocation />
      
    </div>
  );
}
