import { createContext, useState } from "react";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [data, setData] = useState();

  const changeData = (value) => {
    if (value) {
      setData(value);
    }
  };

  return (
    <APIContext.Provider value={{ data, changeData }}>
      {children}
    </APIContext.Provider>
  );
};
