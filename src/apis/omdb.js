import axios from "axios";

const KEY = "1f879d76";
export default axios.create({
  baseURL: "https://omdbapi.com",
  params: {
    apikey: KEY,
  },
});
