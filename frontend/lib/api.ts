import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

// Interceptor to add the JWT token from cookies to the Authorization header of each request
api.interceptors.request.use((config) => {
  const token = Cookies.get("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
