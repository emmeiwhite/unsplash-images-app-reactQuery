import { useQuery } from "@tanstack/react-query";
import photosFetch from "./utils";
import { useGlobalContext } from "./context";

const key = import.meta.env.VITE_AUTH_KEY;

export default function Gallery() {
  const { searchTerm } = useGlobalContext();

  const result = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await photosFetch.get(
        `?client_id=${key}&query=${searchTerm}`
      );
      return response.data;
    },
  });

  console.log(result);

  if (result.isLoading) {
    return (
      <section className="image-container">
        <h5>Loading ...</h5>
      </section>
    );
  }

  if (result.isError) {
    return (
      <section className="image-container">
        <h5>There was an error ...</h5>
      </section>
    );
  }

  const imageResults = result.data.results;

  // No Results Found Conditions

  if (imageResults.length < 1) {
    return (
      <section className="image-container">
        <h5>No Results found ...</h5>
      </section>
    );
  }
  return (
    <section className="image-container">
      {imageResults.map((image) => {
        const { alt_description, id, urls, description } = image;
        return (
          <img
            src={urls?.regular}
            key={id}
            alt={alt_description}
            title={description}
            className="img"
          />
        );
      })}
    </section>
  );
}
