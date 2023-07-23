import React, { useContext } from "react";
import Form from "./Form";
import { Button } from "../common";
import { ThemeContext } from "../../context/context";
import { useRecoilState } from "recoil";
import { isModalOpenAtom } from "../../recoil/atoms";
import Modal from "./Modal";

const FormSection = () => {
  const mode = useContext(ThemeContext);
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
