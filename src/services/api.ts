import axios from "axios";

const giftsAPI = axios.create({
  baseURL: "http://localhost:8000",
});

export { giftsAPI };
