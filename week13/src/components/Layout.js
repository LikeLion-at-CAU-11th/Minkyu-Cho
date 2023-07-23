// styled-components
// src/components/layout/Layout.js

import { styled } from "styled-components";
import React, { useContext, useState } from "react";
import { Button } from "./common";
import { ThemeContext } from "../context/context";
import {
  isSubmittedAtom,
  userNameAtom,
  emailAtom,
  rangeAtom,
} from "../recoil/atoms";
import { useRecoilValue } from "recoil";

const Layout = ({ children }) => {
  const context = useContext(ThemeContext);

  const [mode, setMode] = useState(context.blueTheme);

  const handleClick = (e) => {
    const color = e.target.value;
    if (color === "blue") {
      setMode(context.blueTheme);
    } else if (color === "green") {
      setMode(context.greenTheme);
    } else {
      setMode(context.pinkTheme);
    }
  };

  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const range = useRecoilValue(rangeAtom);
  const isSubmitted = useRecoilValue(isSubmittedAtom);

  return (
    <ThemeContext.Provider value={mode}>
      <Wrapper>
        <Header mode={mode.main}>
          <Button value="blue" onClick={handleClick}>
            Blue
          </Button>
          <Button value="green" onClick={handleClick}>
            Green
          </Button>
          <Button value="pink" onClick={handleClick}>
            Pink
          </Button>
        </Header>
        <div>{children}</div>
        <Footer mode={mode.main}>
          {!isSubmitted
            ? ""
            : `${userName}의 공간 : 이메일 주소 ${email}, 오늘 나의 기분 정도 : ${range}`}
        </Footer>
      </Wrapper>
    </ThemeContext.Provider>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.mode};
`;
