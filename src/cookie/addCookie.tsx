import { Dispatch, SetStateAction } from "react";

interface AddCookieProps {
  lat: React.RefObject<HTMLInputElement> | null;
  long: React.RefObject<HTMLInputElement> | null;
  location: React.RefObject<HTMLInputElement> | null;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}

export function addCookie(props: AddCookieProps) {
  document.cookie = props.location!.current!.value + "=" + props.lat!.current!.value + "<>" + props.long!.current!.value + "; max-age=604800";
  props.setCookieRefreshed(document.cookie);
}