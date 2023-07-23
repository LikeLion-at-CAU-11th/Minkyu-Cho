import React from "react";
import { useRecoilState } from "recoil";
import { emailAtom, userNameAtom } from "../../recoil/atoms";

const Form = ({ type, inputType }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);

  const onChange = (e) => {
    const data = e.target.value;
    if (inputType === "이름") {
      setUserName(data);
      console.log(userName);
    } else {
      setEmail(data);
      console.log(email);
    }
  };

  return (
    <>
      <div>{inputType}</div>
      <input type={type} onChange={onChange} />
    </>
  );
};

export default Form;
