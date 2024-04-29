import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { useGlobalContext } from "./context";

const App = () => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <section
      className={
        isDarkTheme ? "apply-dark toggle-container" : "toggle-container"
      }
    >
      <main>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
    </section>
  );
};
export default App;
