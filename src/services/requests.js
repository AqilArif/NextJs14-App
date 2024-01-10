import Axios from "./axios.service";

export const errorHandler = (error) => {

  console.log('errorHandler', error)
  
  if (error?.status) {
  
    // *The request was made and the server responded with a status code
    switch (error.status) {
     case 302:
      return error.data;
      case 400:
        // Unauthorized
        return error.data;
      case 422:
        // Unprocessable Entity
        return error.data.data.message;
      case 404:
        // Not Found
        break;
      case 500:
        // Internal Server Error
        break;
      default:
        break;
    }

    return error.data;

  } else if (error?.request) {
    // The request was made but no response was received
    return [error?.message];

  } else {
    // Something happened in setting up the request that triggered an Error
    return ["Something went wrong"];
  }
};

const setData = (data) => {
  return {
    ...(data ? { ...data } : {}),
  };
};

// *get request
export const get = async (url) => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// *post request
export const post = async (url, data) => {
  const reqData = setData(data);
  try {
    const response = await Axios.post(url, reqData);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// *put request
export const put = async (url, data) => {
  const reqData = setData(data);
  try {
    const response = await Axios.put(url, reqData);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// *delete request
export const del = async (url) => {
  try {
    const response = await Axios.delete(url);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// *patch request
export const patch = async (url, data) => {
  try {
    const response = await Axios.patch(url, data);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
