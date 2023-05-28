import React, { useState } from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuButton = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "orange" : "gray")};
  color: white;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;

const LionInfo = () => {
  const [clicked, setClicked] = useState("아기사자");
  const navigate = useNavigate();
  return (
    <AppDom>
      <MenuDom>
        <MenuButton
          clicked={clicked === "아기사자"}
          onClick={() => {
            setClicked("아기사자");
            navigate("/info/no");
          }}
        >
          아기사자 정보
        </MenuButton>
        <MenuButton
          clicked={clicked === "테스트"}
          onClick={() => {
            setClicked("테스트");
            navigate("/start");
          }}
        >
          멋사인 테스트
        </MenuButton>
      </MenuDom>
      <ModalDom>
        <Outlet />
      </ModalDom>
    </AppDom>
  );
};

export default LionInfo;
