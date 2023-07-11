import axios from "axios";

export const login = async (id, pw) => {
  const result = await axios.post("http://front.cau-likelion.org/", {
    id: id,
    pw: pw,
  });
  const { accessToken, refreshToken } = result.data.data;
  localStorage.setItem("access", accessToken);
  localStorage.setItem("refresh", refreshToken);
};
