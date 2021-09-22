import React from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storeValue, setValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });


  const setLocalStorage = (value: any) => {
    try {
      localStorage.setItem(key, value);
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storeValue, setLocalStorage]
};
