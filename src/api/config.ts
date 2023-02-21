import axios from "axios";
export const API_URL = "http://localhost:3000";

export default axios.create({
  baseURL: API_URL,
});
