import { createContext, useState } from "react";
export const GlobalState = createContext();

export const MainGlobal = ({ children }) => {
  const [mobDisplay, setMobDisplay] = useState(false);
  const mobHandler = () => {
    setMobDisplay(!mobDisplay);
  };

  return (
    <GlobalState.Provider
      value={{
        mobDisplay,
        setMobDisplay,
        mobHandler,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
