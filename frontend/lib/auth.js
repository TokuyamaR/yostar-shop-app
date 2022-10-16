import axios from "axios";
import { API_URL } from "../config";
import Cookies from "js-cookie";

export const registerUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/api/auth/local/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        Cookies.set("token", response.data.jwt, { expires: 7 });
        resolve(response);
        window.location.href = "/";
      })
      .catch((error) => {
        reject(error);
        alert("registerUser:", error.response);
      });
  });
};

export const login = (identifier, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/api/auth/local`, {
        identifier,
        password,
      })
      .then((response) => {
        Cookies.set("token", response.data.jwt, { expires: 7 });
        resolve(response);
        window.location.href = "/";
      })
      .catch((error) => {
        reject(error);
        alert("login:", error.response);
      });
  });
};

export const logout = () => {
  Cookies.remove("token");
  window.location.href = "/login";
};
