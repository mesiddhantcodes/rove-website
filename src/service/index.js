
import axios from "axios";
import config from "../config";



const api = axios.create({
  baseURL: config.DEV_BACKEND_URI,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await api.post("/auth/refresh-tokens", {
        refreshToken,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.access.token);
        localStorage.setItem("refreshToken", response.data.refresh.token);
        return api(originalRequest);
      }
      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.reload();
      }
     
    }
    return Promise.reject(error);
  }
);

export default api;
