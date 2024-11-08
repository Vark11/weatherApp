import { useState, useEffect } from "react";

export const useShowInputCleaner = (): [boolean, (value: string) => void] => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showCleanerButton, setShowCleanerButton] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue !== "") {
      setShowCleanerButton(true);
    } else {
      setShowCleanerButton(false);
    }
  }, [inputValue]);
  function catchInputChange(value: string): void {
    setInputValue(value);
  }

  return [showCleanerButton, catchInputChange];
};
