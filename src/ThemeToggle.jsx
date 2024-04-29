import { useContext } from "react";
import { useGlobalContext } from "./context";
export default function ThemeToggle() {
  const greeting = useContext(GalleryContext);
  console.log(greeting);
  return <div>ThemeToggle</div>;
}
