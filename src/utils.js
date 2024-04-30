import axios from "axios";

const photosFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});

// console.log(import.meta.env.VITE_AUTH_KEY);

export default photosFetch;
