import {
  ReactElement,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { getCookie } from "../../../cookie/getCookie";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface SearchMenuProps {
  inputValue: string;
  cookieRefreshed: string;
  reference: React.RefObject<HTMLInputElement>;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
  setLatitude: Dispatch<SetStateAction<number>>;
  setLongitude: Dispatch<SetStateAction<number>>;
  setLocationName: Dispatch<SetStateAction<string>>;
}

interface returnedValueFromCookie {
  location: string;
  latitude: string;
  longitude: string;
}

interface SearchResultComponentProps {
  index: number;
  searchResult: returnedValueFromCookie[];
  elem: returnedValueFromCookie;
  handleDeleteButtonClick: (name: string) => void;
  setLatitude: Dispatch<SetStateAction<number>>;
  setLongitude: Dispatch<SetStateAction<number>>;
  setLocationName: Dispatch<SetStateAction<string>>;
  reference: React.RefObject<HTMLInputElement>;
}

export function SearchMenu({
  inputValue,
  cookieRefreshed,
  reference,
  setCookieRefreshed,
  setLatitude,
  setLongitude,
  setLocationName,
}: SearchMenuProps): ReactElement {
  const [searchResults, setSearchResults] = useState<ReactElement[]>([]);

  useEffect(() => {
    setSearchResults(
      getSearchResultsComponent(
        inputValue,
        setCookieRefreshed,
        setLatitude,
        setLongitude,
        setLocationName,
        reference,
      )
    );
  }, [
    inputValue,
    cookieRefreshed,
    setCookieRefreshed,
    reference,
    setLatitude,
    setLocationName,
    setLongitude,
  ]);

  return (
    <div className="search-menu">
      <div className="search-menu-array">{searchResults}</div>
    </div>
  );
}

function getSearchResultsComponent(
  inputValue: string,
  setCookieRefreshed: Dispatch<SetStateAction<string>>,
  setLatitude: Dispatch<SetStateAction<number>>,
  setLongitude: Dispatch<SetStateAction<number>>,
  setLocationName: Dispatch<SetStateAction<string>>,
  reference: React.RefObject<HTMLInputElement>,
): ReactElement[] {
  const searchResultComponentsArray: ReactElement[] = [];
  const searchResults = getCookie(inputValue);
  if (searchResults.length === 0) {
    searchResultComponentsArray.push(
      <h2 key={-1} className="search-menu-array-elem-location-name-h3">
        No matches
      </h2>
    );
    return searchResultComponentsArray;
  }

  function handleDeleteButtonClick(name: string) {
    document.cookie = name + "=; Max-Age=0";
    setCookieRefreshed(document.cookie);
  }

  searchResults.forEach((elem, index) => {
    searchResultComponentsArray.push(
      <SearchResultComponent
        key={index}
        index={index}
        elem={elem}
        searchResult={searchResults}
        handleDeleteButtonClick={handleDeleteButtonClick}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setLocationName={setLocationName}
        reference={reference}
      />
    );
  });
  return searchResultComponentsArray;
}

function SearchResultComponent({
  index,
  searchResult,
  elem,
  handleDeleteButtonClick,
  setLatitude,
  setLongitude,
  setLocationName,
  reference,
}: SearchResultComponentProps): ReactElement {
  const [width, height] = useWindowSize();

  function handleLoadLocationClick() {
    setLatitude(Number(Number(elem.latitude).toFixed(6)));
    setLongitude(Number(Number(elem.longitude).toFixed(6)));
    setLocationName(elem.location);
    if (width <= 1550) {
      reference.current!.blur();
    }
  }

  return (
    <div
      style={
        index !== searchResult.length - 1
          ? { borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }
          : undefined
      }
      className="search-menu-array-elem"
      key={index}
      onMouseDown={(e) => e.preventDefault()}
      onClick={handleLoadLocationClick}
    >
      <h3 className="search-menu-array-elem-location-name-h2">
        {elem.location}
      </h3>
      <div className="search-menu-array-elem-long-and-lat-div">
        <div className="search-menu-array-elem-lat">
          latitude: {elem.latitude}
        </div>
        <div className="search-menu-array-elem-long">
          longitude: {elem.longitude}
        </div>
      </div>
      {index !== 0 ? (
        <div
          className="search-menu-array-elem-delete-div"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteButtonClick(elem.location);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="25px"
            height="25px"
            fill="rgb(139, 162, 173)"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
            </g>
          </svg>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
