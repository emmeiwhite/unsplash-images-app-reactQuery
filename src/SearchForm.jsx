import { useGlobalContext } from "./context";

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm(searchTerm);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form
        className="search-form"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />

        <button
          type="submit"
          className="btn"
        >
          Search
        </button>
      </form>
    </section>
  );
}
