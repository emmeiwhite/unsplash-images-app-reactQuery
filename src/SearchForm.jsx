export default function SearchForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.elements.search);
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
