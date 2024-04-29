import { createContext, useContext } from "react";
import Gallery from "./Gallery";

// This is our context
export const GalleryContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = "Hello World!";

  return (
    <GalleryContext.Provider value={greeting}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GalleryContext);
