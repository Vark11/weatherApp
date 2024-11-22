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
  return (
    <div className="location-div">
      <label className="location-label">Location name</label>
      {disabled ? (
        <InputLocationDisabled location={location} />
      ) : (
        <InputLocation reference={reference!} />
      )}
    </div>
  );
}

function InputLocationDisabled({ location }: { location: string }) {
  return (
    <input
      type="text"
      maxLength={10}
      className="location-input"
      disabled={true}
      value={location}
      placeholder="..."
    ></input>
  );
}

function InputLocation({
  reference,
}: {
  reference: React.RefObject<HTMLInputElement>;
}) {
  function handleLocationInputChange(e: ChangeEvent<HTMLInputElement>) {
    reference!.current!.value = e.target.value;
    // checkLocationValue(reference, setLocationError);
  }

  return (
    <input
      type="text"
      maxLength={10}
      ref={reference}
      className="location-input"
      disabled={false}
      placeholder="..."
      onChange={handleLocationInputChange}
    ></input>
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
