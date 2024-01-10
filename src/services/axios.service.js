import axios from "axios";
import Cookies from "js-cookie";
import { successToast } from "@/utils/toaster";

// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()
// const baseUrl = publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL;

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const onRequest = (request) => {
    if (typeof window !== "undefined" && window.navigator.onLine) {

    // Handling when request is sent
    const token = Cookies.get("token");

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  
    return request;

    } else {
      successToast("Please check your internet connection");
    }
}

const onRequestError = (error) => {
    return Promise.reject(error);
};

const onResponse = (response) => {
    return response;
};

const onResponseError = (error) => {

  const statusCode = error?.response?.status;

  switch (statusCode) {
    case 403:
        Cookies.remove("token");
        setTimeout(() => { window.location.href = "/login" }, 500);

      break;

    case 500:
      // code block
      break;

    default:
    // code block
  }
  
  return Promise.reject(error);
};

AxiosInstance.interceptors.request.use(onRequest, onRequestError);
AxiosInstance.interceptors.response.use(onResponse, onResponseError);

export default AxiosInstance;