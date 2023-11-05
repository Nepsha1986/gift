import axios from "axios";

const baseURL = import.meta.env.PUBLIC_GIFT_IDEA_API_URL;

const giftsAPI = axios.create({
  baseURL,
});

export { giftsAPI };
