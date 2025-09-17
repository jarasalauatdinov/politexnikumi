import axios from "axios";

export const api = axios.create({
  baseURL: "https://spatial-shaft-jewelry-specified.trycloudflare.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});