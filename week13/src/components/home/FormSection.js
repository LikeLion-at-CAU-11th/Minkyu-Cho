import React, { useContext } from "react";
import Form from "./Form";
import { Button } from "../common";
import { ThemeContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isModalOpenAtom, isSubmittedAtom } from "../../recoil/atoms";
import Modal from "./Modal";

const FormSection = () => {
  const mode = useContext(ThemeContext);
  const navigate = useNavigate();
  const isSubmitted = useSetRecoilState(isSubmittedAtom);
  const [isModalOpen, isSetModalOpen] = useRecoilState(isModalOpenAtom);
  const handleClick = () => {
    isSetModalOpen(true);
  };
  return (
    <>
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Form type="range" min="0" max="100" inputType="나의 기분" />
      <Button mode={mode.button} onClick={handleClick}>
        버튼
      </Button>
      {isModalOpen && <Modal />}
    </>
  );
};

export default FormSection;
