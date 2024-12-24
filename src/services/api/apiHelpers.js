// apiHelper.js
import api from './api';

export const apiCall = async (endpoint, method = 'GET', data = {}, headers = {}) => {
  const config = {
    url: endpoint,
    method,
    headers,
  };

  if (method === 'GET') {
    config.params = data; // For GET requests, use query params
  } else {
    config.data = data; // For POST/PUT requests, send the body
  }

  try {
    const response = await api(config);
    return response; // Return the response data
  } catch (error) {
    throw error; // Throw error for further handling in sagas or components
  }
};
