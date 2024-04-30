import { useQuery } from "@tanstack/react-query";
import photosFetch from "./utils";
import { useGlobalContext } from "./context";
import { AUTH_KEY } from ".env";

export default function Gallery() {
  const { searchTerm } = useGlobalContext();

  return <div>Testing</div>;
  const result = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const response = await photosFetch.get(
        `?client_id=${AUTH_KEY}&query=${searchTerm}`
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
