import { createContext, useContext, useState } from "react";

// This is our context
const GalleryContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  /** --- 2. Application Business Logic --- */
  const toggleDarkTheme = () => {
    setIsDarkTheme((prevValue) => {
      document.body.classList.toggle("dark-theme", !isDarkTheme);
      return !prevValue;
    });
  };

  /** 1. Application State */
  const appData = {
    isDarkTheme,
    toggleDarkTheme,
  };
  return (
    <GalleryContext.Provider value={appData}>
      {children}
    </GalleryContext.Provider>
  );
};

// Custom useGlobalContext to save some lines of code on each page!
export const useGlobalContext = () => useContext(GalleryContext);
