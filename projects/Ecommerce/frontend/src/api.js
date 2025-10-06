import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE
});

// attach token automatically if present in localStorage
api.interceptors.request.use((config) => {
  const raw = localStorage.getItem("user");
  if (raw) {
    try {
      const user = JSON.parse(raw);
      if (user.token) config.headers.Authorization = `Bearer ${user.token}`;
    } catch {}
  }
  return config;
});

export default api;
