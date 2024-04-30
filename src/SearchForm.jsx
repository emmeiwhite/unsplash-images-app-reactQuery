import { useGlobalContext } from "./context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
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
