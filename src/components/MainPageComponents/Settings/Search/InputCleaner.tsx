import { ReactElement } from "react";

interface InputCleanerProps {
  reference: React.RefObject<HTMLInputElement>;
  catchInputChange: (value: string) => void;
}

export function InputCleaner({
  reference,
  catchInputChange,
}: InputCleanerProps): ReactElement {
  function handleClickCleanerButton(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    reference.current!.value = "";
    reference.current!.focus();
    catchInputChange(reference.current!.value);
  }

  return (
    <button className="input-cleaner-button" onClick={handleClickCleanerButton}>
      <svg
        className="input-cleaner-svg"
        fill="aliceblue"
        height="16"
        icon-name="clear-outline"
        viewBox="0 0 20 20"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z"></path>
      </svg>
    </button>
  );
}
