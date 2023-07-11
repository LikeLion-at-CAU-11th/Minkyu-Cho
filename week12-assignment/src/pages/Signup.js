import React from "react";
import { Input, Inputs, Title, Wrapper } from "../components/Common";
import { styled } from "styled-components";

const Signup = () => {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input />
        <Input />
        <Input />
        <Input />
      </Inputs>
      <Button>SignUp</Button>
    </Wrapper>
  );
};

export default Signup;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
`;
