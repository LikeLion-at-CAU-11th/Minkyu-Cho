import styled from "styled-components";

import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";
import {
  getUserPerPage,
  getUserperGener,
  getUserperStack,
} from "../../API/lioninfo";

const UserDataSection = ({ userData, setUserData }) => {
  const { type, title, number } = useParams();
  useEffect(() => {
    const handleClickButton = async () => {
      // type에 따라서 어떤 api를 호출할건지를 결정해주는 함수
      if (type === "page") {
        //page api 호출
        const response = await getUserPerPage(parseInt(number));
        // const response = await getUserPerPage(clickNum);
        setUserData(response.data.data);
      } else if (type === "stack") {
        //stack api 호출
        const response = await getUserperStack(title);
        setUserData(response.data.data);
      } else if (type === "gender") {
        //gender api 호출
        const response = await getUserperGener(title);
        setUserData(response.data.data);
      }
    };
    console.log(type);
    handleClickButton();
  }, [type, title, number, setUserData]);
  return (
    <Dom>{userData && userData.map((user, i) => <UserCard user={user} />)}</Dom>
  );
};

export default UserDataSection;

const Dom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  overflow: scroll;
  align-content: flex-start;
  padding: 0 20px;
  min-height: 400px;
`;
