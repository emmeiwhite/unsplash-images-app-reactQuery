import { createContext, useContext, useState } from "react";

// This is our context
export const GalleryContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };

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
