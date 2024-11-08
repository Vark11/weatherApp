import {
  ReactElement,
  ChangeEvent,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface LatAndLongProps {
  latOrLong: string;
  disabled: boolean;
  lat: string | undefined;
  long: string | undefined;
  reference: React.RefObject<HTMLInputElement> | undefined;
}

export function LatAndLong(latAndLongProps: LatAndLongProps): ReactElement {
  const [showError, setShowError] = useState(false);

  function handleLatAndLongInputChange(e: ChangeEvent<HTMLInputElement>) {
    checkLatAndLongValues(latAndLongProps, setShowError);
    latAndLongProps.reference!.current!.value = e.target.value;
  }

  return (
    <div className="lat-and-long">
      <label className="lat-and-long-label">{latAndLongProps.latOrLong}</label>
      <input
        ref={latAndLongProps.reference}
        type="number"
        step="0.001"
        maxLength={9}
        className="lat-and-long-input"
        disabled={latAndLongProps.disabled}
        value={
          latAndLongProps.long || latAndLongProps.lat
            ? latAndLongProps.lat
              ? latAndLongProps.lat
              : latAndLongProps.long
            : ""
        }
        onChange={handleLatAndLongInputChange}
        placeholder="..."
      ></input>
      {showError ? (
        <div className="lat-long-error">
          {latAndLongProps.latOrLong === "Latitude"
            ? "must be between -90 and 90"
            : "must be between -180 and 180"}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

function checkLatAndLongValues(
  latAndLongProps: LatAndLongProps,
  setShowError: Dispatch<SetStateAction<boolean>>
): void {
  if (latAndLongProps.reference!.current!.value !== undefined) {
    if (
      Number(latAndLongProps.reference!.current!.value) > 90 ||
      Number(latAndLongProps.reference!.current!.value) < -90
    ) {
      if (
        !(
          Number(latAndLongProps.reference!.current!.value) < 180 &&
          Number(latAndLongProps.reference!.current!.value) > -180 &&
          latAndLongProps.latOrLong === "Longitude"
        )
      ) {
        setShowError(true);
        latAndLongProps.reference!.current!.style.border =
          "1px solid rgb(234, 134, 143)";
        if (latAndLongProps.reference!.current! === document.activeElement) {
          latAndLongProps.reference!.current!.style.outline =
            "1px solid rgb(234, 134, 143)";
        } else {
          latAndLongProps.reference!.current!.style.outline = "";
        }
      } else {
        setShowError(false);
        latAndLongProps.reference!.current!.style.border = "";
        latAndLongProps.reference!.current!.style.outline = "";
      }
    } else {
      setShowError(false);
      latAndLongProps.reference!.current!.style.border = "";
      latAndLongProps.reference!.current!.style.outline = "";
    }
  }
}
