import axios from "axios";

const api = axios.create({
  baseURL: "http://152.42.216.35:8080/api/", // define server backend url
});

export default api;
