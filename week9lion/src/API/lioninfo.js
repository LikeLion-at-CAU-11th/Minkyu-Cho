import axios from "axios";

export const baseUrl = `https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api`;

export const getUserPerPage = (page) => {
  const url = `${baseUrl}/user?page=${page}`;
  return axios.get(url);
};

export const getUserperGener = (gender) => {
  const url = `${baseUrl}/user?gender=${gender}`;
  return axios.get(url);
};

export const getUserperStack = (stack) => {
  const url = `${baseUrl}/user?stack=${stack}`;
  return axios.get(url);
};
