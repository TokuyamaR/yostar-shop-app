import axios from "axios";
import { API_URL } from "../config";

export const registerUser = async (username, email, password) => {
  await axios
    .post(`${API_URL}/api/auth/local/register`, {
      username,
      email,
      password,
    })
    .then((res) => {
      console.log("post成功");
      console.log("ユーザー　プロフィール", res.data.user);
      console.log("ユーザー　トークン", res.data.jwt);
    })
    .catch((error) => {
      console.log("エラー内容", error.response);
    });
};
