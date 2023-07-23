import React, { useContext } from "react";
import Form from "./Form";
import { Button } from "../common";
import { ThemeContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isSubmittedAtom } from "../../recoil/atoms";

const FormSection = () => {
  const mode = useContext(ThemeContext);
  const navigate = useNavigate();
  const isSubmitted = useSetRecoilState(isSubmittedAtom);
  const handleClick = () => {
    isSubmitted(true);
    navigate("/mypage");
  };
  return (
    <>
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Button mode={mode.button} onClick={handleClick}>
        버튼
      </Button>
    </>
  );
};

export default FormSection;
