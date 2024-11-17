import {
  ReactElement,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { useShowInputCleaner } from "../../../hooks/useShowInputCleaner";
import { ChangeEvent, FocusEvent } from "react";
import { InputCleaner } from "./InputCleaner";
import { SearchMenu } from "./SearchMenu";

interface SearchProps {
  setLatitude: Dispatch<SetStateAction<number>>;
  setLongitude: Dispatch<SetStateAction<number>>;
  setLocationName: Dispatch<SetStateAction<string>>;
  cookieRefreshed: string;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
}
export function Search({
  cookieRefreshed,
  setCookieRefreshed,
  setLatitude,
  setLocationName,
  setLongitude,
}: SearchProps): ReactElement {
  const [showCleanerButton, catchInputChange] = useShowInputCleaner();
  const inputRef = useRef<HTMLInputElement>(null);
  const formInputRef = useRef<HTMLFormElement>(null);
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);

  function handleFocusOnForm(): void {
    formInputRef.current!.style.border = "2px solid aliceblue";
    setShowSearchMenu(true);
  }

  function handleBlurOnForm(): void {
    formInputRef.current!.style.border = "2px solid transparent";
    setShowSearchMenu(false);
  }

  function handleBlurOnInput(e: FocusEvent<HTMLInputElement>): void {
    e.preventDefault();
  }

  function handleChangeOnInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    inputRef.current!.value = e.target.value;
    catchInputChange(inputRef.current!.value);
  }

  return (
    <div className="recent-locations">
      <form
        className="input-form"
        ref={formInputRef}
        onFocus={handleFocusOnForm}
        onBlur={handleBlurOnForm}
      >
        <span className="span-svg-search">
          <svg
            aria-hidden="true"
            fill="aliceblue"
            height="16"
            icon-name="search-outline"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"></path>
          </svg>
        </span>
        <span className="input-span">
          <input
            className="search-input"
            ref={inputRef}
            type="text"
            placeholder="Search location"
            onChange={handleChangeOnInput}
            onBlur={handleBlurOnInput}
          ></input>
        </span>
        {showCleanerButton ? (
          <InputCleaner
            reference={inputRef}
            catchInputChange={catchInputChange}
          />
        ) : (
          <></>
        )}
      </form>
      {showSearchMenu ? (
        <SearchMenu
          inputValue={inputRef.current!.value}
          cookieRefreshed={cookieRefreshed}
          setCookieRefreshed={setCookieRefreshed}
          reference={inputRef}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setLocationName={setLocationName}
        />
      ) : (
        <></>
      )}
      {/* <SearchMenu
          inputValue={"mos"}
          cookieRefreshed={cookieRefreshed}
          setCookieRefreshed={setCookieRefreshed}
          reference={inputRef}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setLocationName={setLocationName}
        /> */}
    </div>
  );
}
