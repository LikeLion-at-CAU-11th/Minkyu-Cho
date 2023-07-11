import React, { useState } from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../API/login";

const Home = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useNavigate();
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
    console.log(pw);
  };
  const onLogin = async () => {
    await login(id, pw);
    router("/mypage");
  };
  return (
    <>
      <Wrapper>
        <Title>로그인하기</Title>
        <Form>
          <Inputs>
            <Input placeholder="아이디" value={id} onChange={onChangeId} />
            <Input
              placeholder="비밀번호"
              type="password"
              value={pw}
              onChange={onChangePw}
            />
          </Inputs>
          <Button onClick={onLogin}>Login</Button>
        </Form>
        <Link to="/signup">회원가입하기</Link>
      </Wrapper>
    </>
  );
};

export default Home;

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;
