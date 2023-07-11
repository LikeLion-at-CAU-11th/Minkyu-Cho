import axios from "axios";

export const getNewRefresh = async () => {
  try {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");
    if (!refreshToken) {
      return false;
    }
    const result = await axios.post(
      "http://front.cau-likelion.org/refresh",
      { refreshToken },
      {
        headers: { Authorization: accessToken },
      }
    );
    return result.data;
  } catch (error) {
    if (error.response.status === 401) {
      return false;
    }
  }
};
