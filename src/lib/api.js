import axios from "axios";



const api = axios.create({
  baseURL: "https://fakestoreapi.com/products/1",
});

export default api;