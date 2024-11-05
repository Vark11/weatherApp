import { ReactElement, SetStateAction, Dispatch} from "react";
import { addCookie } from "../../../../../cookie/addCookie";

interface AddLocationButtonProps {
  lat: React.RefObject<HTMLInputElement> | null;
  long: React.RefObject<HTMLInputElement> | null;
  location: React.RefObject<HTMLInputElement> | null;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}

export function AddLocationButton(props: AddLocationButtonProps): ReactElement {

  function handleAddLocationButtonClick() {
    if (props.lat!.current!.value !== '' && props.long!.current!.value !== '' && props.location!.current!.value !== '') {
      addCookie(props);
    }
    props.lat!.current!.value = '';
    props.long!.current!.value = '';
    props.location!.current!.value = '';
    
  }

  return (
    <div className="add-location-button-div">
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
      <button
        className="add-location-button"
        onClick={handleAddLocationButtonClick}
      >
        Add
      </button>
    </div>
  );
}
