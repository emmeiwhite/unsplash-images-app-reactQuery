import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  console.log(isDarkTheme);
  return (
    <div>
      {isDarkTheme ? (
        <BsFillMoonFill onClick={toggleDarkTheme()} />
      ) : (
        <BsFillSunFill />
      )}
    </div>
  );
}
