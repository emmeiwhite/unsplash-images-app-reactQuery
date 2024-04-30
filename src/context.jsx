import { createContext, useContext, useEffect, useState } from "react";

// This is our context
const GalleryContext = createContext();

// Checking the user preference for dark theme and handling initial theme with useEffect
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  console.log(prefersDarkMode);
  return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  /** --- 2. Application Business Logic --- */
  const toggleDarkTheme = () => {
    setIsDarkTheme((prevValue) => {
      document.body.classList.toggle("dark-theme", !isDarkTheme);
      return !prevValue;
    });
  };

  // We check the user preference for dark-theme and set the theme accordingly
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, []);

  /** 1. Application State */
  const appData = {
    isDarkTheme,
    searchTerm,
    toggleDarkTheme,
    setSearchTerm,
  };

  return (
    <GalleryContext.Provider value={appData}>
      {children}
    </GalleryContext.Provider>
  );
};

// Custom useGlobalContext to save some lines of code on each page!
export const useGlobalContext = () => useContext(GalleryContext);
