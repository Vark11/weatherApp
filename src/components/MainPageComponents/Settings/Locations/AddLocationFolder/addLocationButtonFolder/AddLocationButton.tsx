import { ReactElement, SetStateAction, Dispatch, useState } from "react";
import { addCookie } from "../../../../../cookie/addCookie";
import { useWindowSize } from "../../../../../hooks/useWindowSize";

interface AddLocationButtonProps {
  lat: React.RefObject<HTMLInputElement> | null;
  long: React.RefObject<HTMLInputElement> | null;
  location: React.RefObject<HTMLInputElement> | null;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}

export function AddLocationButton(props: AddLocationButtonProps): ReactElement {
  const [locationAdded, setLocationAdded] = useState(false);
  const [message, setMessage] = useState("");
  const [width] = useWindowSize();

  function handleAddLocationDivClick() {
    checkFields(props, setLocationAdded, setMessage);
  }

  return (
    <div className={width > 1050 ? "add-location-button-div-positioning" : "add-location-phone-resolution-button-positioning-div"}>
      <div
        className={width > 1050 ? "add-location-button-div" : "add-location-phone-resolution-button-div"}
        onClick={handleAddLocationDivClick}
      >
        <span>
          <svg
            fill="rgb(139, 162, 173)"
            height="20"
            icon-name="add-outline"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
          </svg>
        </span>
        <button className={width > 1050 ? "add-location-button" : "add-location-phone-resolution-button-button"}>Add</button>
      </div>
      {locationAdded ? (
        <div
          className="add-location-button-successfully-added"
          style={
            message === "Location added successfully!"
              ? { backgroundColor: "green" }
              : {}
          }
        >
          {message}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export function checkFields(
  props: AddLocationButtonProps,
  setLocationAdded: Dispatch<SetStateAction<boolean>>,
  setMessage: Dispatch<SetStateAction<string>>
): void {
  if (
    props.lat!.current!.value !== "" &&
    props.long!.current!.value !== "" &&
    props.location!.current!.value !== ""
  ) {
    if (
      props.lat!.current!.style.border === "1px solid rgb(234, 134, 143)" ||
      props.long!.current!.style.border === "1px solid rgb(234, 134, 143)" ||
      props.location!.current!.style.border === "1px solid rgb(234, 134, 143)"
    ) {
      setTimeout(() => setLocationAdded(false), 1500);
      setLocationAdded(true);
      setMessage("Some inputs are invalid");
    } else {
      if (props.location!.current!.value.split(" ")[0] === "") {
        setTimeout(() => setLocationAdded(false), 1500);
        setLocationAdded(true);
        setMessage("Location name is invalid");
      } else {
        const answer = addCookie(props);
        if (answer === "success") {
          setTimeout(() => setLocationAdded(false), 1500);
          setLocationAdded(true);
          setMessage("Location added successfully!");
          props.lat!.current!.value = "";
          props.long!.current!.value = "";
          props.location!.current!.value = "";
        } else if (answer === "cookie exists") {
          setTimeout(() => setLocationAdded(false), 1500);
          setLocationAdded(true);
          setMessage("Location with this name is already exists");
        } else {
          setTimeout(() => setLocationAdded(false), 1500);
          setLocationAdded(true);
          setMessage("Something went wrong...");
        }
      }
    }
  } else {
    setTimeout(() => setLocationAdded(false), 1500);
    setLocationAdded(true);
    setMessage("There should be no empty fields!");
  }
}
