import { useState, useEffect } from 'react';

const useObject = (initialState) => {
  const [object, setObject] = useState(initialState);

  const updateObject = (key, value) => {
    setObject((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  return { object, updateObject };
};

export default useObject;
