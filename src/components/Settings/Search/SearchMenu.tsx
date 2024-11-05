import {
  ReactElement,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { getCookie } from "../../../cookie/getCookie";

interface SearchMenuProps {
  inputValue: string;
  cookieRefreshed: string;
  reference: React.RefObject<HTMLInputElement>;
  setCookieRefreshed: Dispatch<SetStateAction<string>>;
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
}

export function SearchMenu({
  inputValue,
  cookieRefreshed,
  reference,
  setCookieRefreshed,
}: SearchMenuProps): ReactElement {
  const [searchResults, setSearchResults] = useState<ReactElement[]>([]);

  useEffect(() => {
    setSearchResults(getSearchResultsComponent(inputValue, setCookieRefreshed, reference));
  }, [inputValue, cookieRefreshed, setCookieRefreshed, reference]);

  return (
    <div className="search-menu">
      <div className="search-menu-array">{searchResults}</div>
    </div>
  );
}

function getSearchResultsComponent(inputValue: string, setCookieRefreshed: Dispatch<SetStateAction<string>>, reference: React.RefObject<HTMLInputElement>): ReactElement[] {
  const searchResultComponentsArray: ReactElement[] = [];
  const searchResults = getCookie(inputValue);

  function handleDeleteButtonClick(name: string) {
    document.cookie = name + "=; Max-Age=0";
    setCookieRefreshed(document.cookie);
  }

  searchResults.forEach((elem, index) => {
    searchResultComponentsArray.push(
      <SearchResultComponent key={index} index={index} elem={elem} searchResult={searchResults} handleDeleteButtonClick={handleDeleteButtonClick}/>
    );
  });
  return searchResultComponentsArray;
}

function SearchResultComponent({index, searchResult, elem, handleDeleteButtonClick}: SearchResultComponentProps): ReactElement {
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
        {index !== 0 ? <div
          className="search-menu-array-elem-delete-div"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {handleDeleteButtonClick(elem.location)}}
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
        </div> : <></>}
      </div>
  );
}
