import axios from "axios";

export default axios.create({
  baseURL: `https://www.wecasa.fr/api/techtest/`,
  headers: { Accept: "application/json", "Content-Type": "application/json" }
});
