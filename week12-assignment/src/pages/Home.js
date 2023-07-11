import React from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Title>로그인하기</Title>
        <Form>
          <Inputs>
            <Input />
            <Input />
          </Inputs>
          <Button>Login</Button>
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
