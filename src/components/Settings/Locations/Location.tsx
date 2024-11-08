import { ReactElement, ChangeEvent, useState } from "react";

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
    // checkLocationValue(reference, setLocationError);
  }

  return (
    <div className="location-div">
      <label className="location-label">Location name</label>
      <input
        type="text"
        maxLength={10}
        ref={reference}
        className="location-input"
        disabled={disabled}
        value={location}
        placeholder="..."
        onChange={handleLocationInputChange}
        onKeyDown={(event) => {
          return (
            (event.charCode > 64 && event.charCode < 91) ||
            (event.charCode > 96 && event.charCode < 123)
          );
        }}
      ></input>
    </div>
  );
}

// WILL BE ADDED IN NEXT PATCHES IF NEEDED || RIGHT NOW USER CAN CHOOSE ANY LOCATION NAME
// const REQUIRED_LOCATION_NAME_SYMBOLS = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// function checkLocationValue(
//   reference: React.RefObject<HTMLInputElement> | null,
//   setLocationError: Dispatch<SetStateAction<boolean>>
// ): void {
//   const splittedValue = reference?.current!.value.toLowerCase().split('');
//   let checker = 0;

//   splittedValue?.forEach((elem) => {
//     if (!REQUIRED_LOCATION_NAME_SYMBOLS.includes(elem)) {
//       checker = 1;
//     }
//   })
//   if (checker === 1) {
//     reference!.current!.style.outline = '1px solid rgb(234, 134, 143)';
//     reference!.current!.style.border = '1px solid rgb(234, 134, 143)';
//     setLocationError(true);
//   } else {
//     reference!.current!.style.border = '';
//     reference!.current!.style.outline = '';
//     setLocationError(false);
//   }
// }
