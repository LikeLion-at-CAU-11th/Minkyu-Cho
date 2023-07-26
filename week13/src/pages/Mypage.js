import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import { Button, Title, Wrapper } from "../components/common";
import { useResetRecoilState, useRecoilValue } from "recoil";
import {
  isSubmittedAtom,
  userNameAtom,
  emailAtom,
  rangeAtom,
} from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const mode = useContext(ThemeContext);
  const resetName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetRange = useResetRecoilState(rangeAtom);
  const reset = useResetRecoilState(isSubmittedAtom);
  const userName = useRecoilValue(userNameAtom);
  const navigate = useNavigate();
  const handleDelete = () => {
    reset();
    resetEmail();
    resetName();
    resetRange();
    navigate("/");
  };
  return (
    <Wrapper>
      <Title>welcome {userName}</Title>
      <Button mode={mode.button} onClick={handleDelete}>
        리셋
      </Button>
    </Wrapper>
  );
};

export default Mypage;
