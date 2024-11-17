import {
  ReactElement,
  ChangeEvent,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface LatAndLongProps {
  latOrLong: string;
  disabled: boolean;
  lat: string | undefined;
  long: string | undefined;
  reference: React.RefObject<HTMLInputElement> | undefined;
}

export function LatAndLong(latAndLongProps: LatAndLongProps): ReactElement {
  const [showError, setShowError] = useState(false);
  const [width] = useWindowSize();

  function checkError() {
    checkLatAndLongValues(latAndLongProps, setShowError);
  }

  return (
    <div className={width > 1050 ? "lat-and-long" : "add-location-phone-resolution-lat-and-long"}>
      <label className={width > 1050 ? "lat-and-long-label" : "add-location-phone-resolution-lat-and-long-label"}>{latAndLongProps.latOrLong}</label>
      {latAndLongProps.disabled ? (
        <InputLatAndLongDisabled
          latOrLong={
            latAndLongProps.lat ? latAndLongProps.lat : latAndLongProps.long
          }
        />
      ) : (
        <InputLatAndLong
          reference={latAndLongProps.reference}
          checkError={checkError}
        />
      )}
      {showError ? (
        <div className={width > 1050 ? "lat-long-error" : "add-location-phone-resolution-lat-and-long-error"}>
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

function InputLatAndLong({
  reference,
  checkError,
}: {
  reference: React.RefObject<HTMLInputElement> | undefined;
  checkError: () => void;
}) {
  const [width] = useWindowSize();

  function handleLatAndLongInputChange(e: ChangeEvent<HTMLInputElement>) {
    checkError();
    reference!.current!.value = e.target.value;
  }

  return (
    <input
      ref={reference}
      type="number"
      step="0.001"
      maxLength={9}
      className={width > 1050 ? "lat-and-long-input" : "add-location-phone-resolution-lat-and-long-input"}
      disabled={false}
      onChange={handleLatAndLongInputChange}
      placeholder="..."
    ></input>
  );
}

function InputLatAndLongDisabled({
  latOrLong,
}: {
  latOrLong: string | undefined;
}) {
  return (
    <input
      type="number"
      step="0.001"
      maxLength={9}
      className="lat-and-long-input"
      disabled={true}
      value={latOrLong}
      placeholder="..."
    ></input>
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
