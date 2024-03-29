import React, { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../../context/context";
import {
  emailAtom,
  isModalOpenAtom,
  isSubmittedAtom,
  rangeAtom,
  userNameAtom,
} from "../../recoil/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../common";
import { Header } from "../Layout";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const mode = useContext(ThemeContext);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const range = useRecoilValue(rangeAtom);
  const navigate = useNavigate();
  const isSubmitted = useSetRecoilState(isSubmittedAtom);
  const isModalOpen = useSetRecoilState(isModalOpenAtom);
  const onClick = (clicktype) => {
    if (clicktype === "confirm") {
      isSubmitted(true);
      isModalOpen(false);
      navigate("/mypage");
    } else {
      isModalOpen(false);
    }
  };
  return (
    <ModalWrapper>
      <ModalPage>
        <Header mode={mode.main}>정보 확인</Header>
        <InfomationWrapper>
          <h3>다음 정보가 맞으십니까?</h3>
          <div>닉네임 : {userName}</div>
          <div>이메일 : {email}</div>
          <div>기분정도 : {range}</div>
        </InfomationWrapper>
        <ButtonWrapper>
          <Button
            mode={mode.button}
            onClick={() => {
              onClick("confirm");
            }}
          >
            확인
          </Button>
          <Button
            mode={mode.button}
            onClick={() => {
              onClick("cancel");
            }}
          >
            취소
          </Button>
        </ButtonWrapper>
      </ModalPage>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalPage = styled.div`
  margin: 10px;
  width: 70%;
  height: 50%;
  z-index: 150;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  justify-content: center;
  overflow: auto;
`;

const InfomationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 80%;
  width: 70%;
  z-index: 30;
  left: 50%;
  transform: translate(-50%, 5%);
`;
