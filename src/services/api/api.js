// api.js
import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Base URL for all API calls
  headers: {
    'Content-Type': 'application/json', // Default Content-Type
  },
});

// Add interceptors for request and response if needed
api.interceptors.request.use(
  (config) => {
    // Add Authorization token or other headers if needed
    // Example: config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally, like logging or custom error messages
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error.response || error.message);
  }
);

export default api;
