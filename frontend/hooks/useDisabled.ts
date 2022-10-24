import { useState, useCallback } from "react";
export const useDisabled = (initialState = true) => {
  const [isDisabled, setIsDisabled] = useState(initialState);

  const disable = useCallback(() => {
    setIsDisabled(true);
  }, []);

  const enable = useCallback(() => {
    setIsDisabled(false);
  }, []);

  const toggle = useCallback((isDisabled) => {
    setIsDisabled(!isDisabled);
  }, []);

  return { isDisabled, disable, enable, toggle };
};
