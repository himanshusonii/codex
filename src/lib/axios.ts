import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL;
console.log(baseURL);
if (!baseURL) {
  throw new Error(
    "BASE URL not set. Please define NEXT_PUBLIC_ADMIN_API_BASE_URL in your .env file."
  );
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // Include cookies for auth if needed
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Axios error response:", error.response);
    } else {
      console.error("Axios error message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
