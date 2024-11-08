import { Dispatch, SetStateAction } from "react";

interface AddCookieProps {
  lat: React.RefObject<HTMLInputElement> | null;
  long: React.RefObject<HTMLInputElement> | null;
  location: React.RefObject<HTMLInputElement> | null;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}

export function addCookie(props: AddCookieProps) {
  if (
    document.cookie
      .split(";")
      .some((item) =>
        item
          .trim()
          .startsWith(props.location!.current!.value.toLowerCase() + "=")
      ) ||
    props.location!.current!.value.toLowerCase() === "moscow"
  ) {
    return "cookie exists";
  }
  try {
    document.cookie =
      props.location!.current!.value.split(" ").join("") +
      "=" +
      props.lat!.current!.value +
      "<>" +
      props.long!.current!.value +
      "; max-age=604800";
    props.setCookieRefreshed(document.cookie);
  } catch (err) {
    return err;
  }

  return "success";
}
