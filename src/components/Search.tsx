import { ReactElement } from "react";

export function Search(): ReactElement {
  
  function handleFocusOnInput() {
    const inputSearch = document.getElementById("input-search");

    inputSearch!.style.border = "2px solid aliceblue";
  }

  function handleOnBlurOnInput() {
    const inputSearch = document.getElementById("input-search");

    inputSearch!.style.border = "2px solid transparent";
  }

  return (
    <div className="recent-locations">
      <form className="input-form" id="input-search">
        <span className="span-svg-search">
        <svg aria-hidden="true" fill="aliceblue" height="16" icon-name="search-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"></path>
        </svg>
        </span>
        <span className="input-span">
          <input className="search-input" type="text" placeholder="Search location" onFocus={handleFocusOnInput} onBlur={handleOnBlurOnInput}></input>
        </span>
      </form>
      
    </div>
  );
}
