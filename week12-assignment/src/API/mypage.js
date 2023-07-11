import { getAuthAxios } from "./authAxios";

export const getMyPage = async () => {
  const token = localStorage.getItem("access");
  const authAxios = getAuthAxios(token);
  const result = await authAxios.get("/mypage");
  return result;
};
