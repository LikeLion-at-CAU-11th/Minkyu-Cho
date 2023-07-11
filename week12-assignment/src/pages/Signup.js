import React from "react";
import { Input, Inputs, Title, Wrapper } from "../components/Common";
import { useForm } from "../hooks/useForm";
import { styled } from "styled-components";
import { signUp } from "../API/signUp";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();
  const router = useNavigate();
  const onClick = async () => {
    const isfull = [id, pw, name, age].every((value) => value.length !== 0);
    if (isfull) {
      await signUp(id, pw, name, age);
      router("/");
    } else {
      alert("모두 채워넣어주세요");
    }
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" value={id} onChange={onChangeId} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={onChangePw}
        />
        <Input placeholder="이름" value={name} onChange={onChangeName} />
        <Input placeholder="나이" value={age} onChange={onChangeAge} />
      </Inputs>
      <Button onClick={onClick}>SignUp</Button>
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
