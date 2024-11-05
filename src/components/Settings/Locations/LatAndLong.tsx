import { ReactElement, ChangeEvent } from "react";

interface LatAndLongProps {
  latOrLong: string;
  disabled: boolean;
  lat: string | undefined;
  long: string | undefined;
  reference: React.RefObject<HTMLInputElement> | undefined;
}
export function LatAndLong(LatAndLongProps: LatAndLongProps): ReactElement {

  function handleLatAndLongInputChange(e: ChangeEvent<HTMLInputElement>) {
    if (LatAndLongProps.reference!.current!.value !== undefined) {
      LatAndLongProps.reference!.current!.value = e.target.value;
    }
    
  }

  return (
    <div className="lat-and-long">
      <label className="lat-and-long-label">{LatAndLongProps.latOrLong}</label>
      <input ref={LatAndLongProps.reference} className="lat-and-long-input" disabled={LatAndLongProps.disabled} defaultValue={LatAndLongProps.long || LatAndLongProps.lat ? LatAndLongProps.lat ? LatAndLongProps.lat : LatAndLongProps.long : ""} onChange={handleLatAndLongInputChange} placeholder='...'></input>
    </div>

  )
}