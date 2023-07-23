import React from "react";
import { useRecoilState } from "recoil";
import { emailAtom, rangeAtom, userNameAtom } from "../../recoil/atoms";

const Form = ({ type, inputType }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [range, setRange] = useRecoilState(rangeAtom);

  const onChange = (e) => {
    const data = e.target.value;
    if (inputType === "이름") {
      setUserName(data);
      console.log(userName);
    } else if (inputType === "이메일") {
      setEmail(data);
      console.log(email);
    } else {
      setRange(data);
      console.log(range);
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
