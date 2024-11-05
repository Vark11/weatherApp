import { ReactElement, ChangeEvent } from "react";

interface LocationT {
  location: string;
  disabled: boolean;
  reference: React.RefObject<HTMLInputElement> | null;
}

export function Location({
  location,
  disabled,
  reference,
}: LocationT): ReactElement {
  function handleLocationInputChange(e: ChangeEvent<HTMLInputElement>) {
    reference!.current!.value = e.target.value;
  }

  return (
    <div className="location-div">
      <label className="location-label">Location name</label>
      <input
        ref={reference}
        className="location-input"
        disabled={disabled}
        defaultValue={location}
        placeholder="..."
        onChange={handleLocationInputChange}
      ></input>
    </div>
  );
}
