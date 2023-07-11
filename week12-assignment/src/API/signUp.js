import axios from "axios";

export const signUp = async (id, pw, name, age) => {
  try {
    const result = await axios.post("http://front.cau-likelion.org/signup", {
      id,
      pw,
      name,
      age,
    });
    return result.data;
  } catch (error) {
    if (error.response.status === 500) {
      return false;
    }
  }
};
