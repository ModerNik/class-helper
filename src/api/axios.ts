import auth from "@/store/authStore";
import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "*",
  }
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
  return config
})

// interceptor for refreshing accessToken if expired
api.interceptors.response.use((config) => {
  return config;
}, (async error => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config.isRetry) {
    originalRequest.isRetry = true;
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token/refresh`, {}, { withCredentials: true });
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('tokenType', response.data.token_type)
      return api.request(originalRequest);
    } catch (error) {
      console.log(error)
    }
  } else {
    // logout user if refreshToken is expired
    if (error.response.status == 401 && error.config && error.config.isRetry) {
      auth.setAuth(false)
      localStorage.removeItem('accessToken')
      localStorage.removeItem('tokenType')
    }
  }
  return Promise.reject(error);
}))

export default api;