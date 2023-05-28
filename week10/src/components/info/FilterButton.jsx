import styled from "styled-components";

import React from "react";
import {
  getUserPerPage,
  getUserperGener,
  getUserperStack,
} from "../../API/lioninfo";
import { useNavigate } from "react-router-dom";

const FilterButton = ({ title, type, setUserData, clickBtn, setClickBtn }) => {
  const handleButtonColor = () => {
    setClickBtn(title);
  };
  const navigate = useNavigate();
  const handleClickButton = async () => {
    // type에 따라서 어떤 api를 호출할건지를 결정해주는 함수
    if (type === "page") {
      //page api 호출
      const response = await getUserPerPage(1);
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
  return (
    <Button
      onClick={() => {
        handleClickButton();
        handleButtonColor();
        {
          title === "All"
            ? navigate(`/info/${title}/1`, { replace: true })
            : navigate(`/info/${title}`, { replace: true });
        }
      }}
      clicked={clickBtn === title}
    >
      {title}
    </Button>
  );
};

export default FilterButton;

const Button = styled.div`
  flex-basis: 13%;
  height: 70px;
  background-color: ${(props) => (props.clicked ? "salmon" : "beige")};
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;
