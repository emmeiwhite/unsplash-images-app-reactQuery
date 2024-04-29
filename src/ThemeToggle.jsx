import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button
        className="dark-toggle"
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon icon-white" />
        ) : (
          <BsFillMoonFill className="toggle-icon icon-dark" />
        )}
      </button>
    </section>
  );
}
