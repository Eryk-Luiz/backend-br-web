import { useState, useEffect } from 'react';

function useStickyState(key, defaultValue) {

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStickyState;
