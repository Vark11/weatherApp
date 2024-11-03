import { ReactElement } from "react";

interface LatAndLongProps {
  latOrLong: string;
  disabled: boolean;
  lat: string | undefined;
  long: string | undefined;
}
export function LatAndLong(LatAndLongProps: LatAndLongProps): ReactElement {

  return (
    <div className="lat-and-long">
      <label className="lat-and-long-label">{LatAndLongProps.latOrLong}</label>
      <input className="lat-and-long-input" disabled={LatAndLongProps.disabled} defaultValue={LatAndLongProps.long || LatAndLongProps.lat ? LatAndLongProps.lat ? LatAndLongProps.lat : LatAndLongProps.long : ""} placeholder='...'></input>
    </div>

  )
}