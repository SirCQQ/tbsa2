import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  // Add other global options here (headers, timeout, etc.)
});

// Example JWT interceptor (uncomment and adapt as needed)
// api.interceptors.request.use((config) => {
//   // const token = getAuthTokenSomehow();
//   // if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
