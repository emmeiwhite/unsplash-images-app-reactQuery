import axios from "axios";

const photosFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});

export default photosFetch;
