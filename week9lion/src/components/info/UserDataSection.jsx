import styled from "styled-components";

import React from "react";
import UserCard from "./UserCard";

const UserDataSection = ({ userData }) => {
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
