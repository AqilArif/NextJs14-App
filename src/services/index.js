import { get, post, put, del, patch } from "./requests";

export const APIs = {
  login: "seller/auth/login",
};

const Services = {
  login: (data) => {
    return post(APIs.login, data);
  },
};

export default Services;
