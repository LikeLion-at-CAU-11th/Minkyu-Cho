import styled from "styled-components";

import React, { useEffect } from "react";
import {
  getUserPerPage,
  getUserperGener,
  getUserperStack,
} from "../../API/lioninfo";
import { useNavigate, useParams } from "react-router-dom";

const FilterButton = ({
  datatitle,
  datatype,
  setUserData,
  clickBtn,
  setClickBtn,
}) => {
  const handleButtonColor = () => {
    setClickBtn(datatitle);
  };
  const navigate = useNavigate();
  const handleClickButton = async () => {
    // type에 따라서 어떤 api를 호출할건지를 결정해주는 함수
    if (datatype === "page") {
      //page api 호출
      const response = await getUserPerPage(1);
      // const response = await getUserPerPage(clickNum);
      setUserData(response.data.data);
    } else if (datatype === "stack") {
      //stack api 호출
      const response = await getUserperStack(datatitle);
      setUserData(response.data.data);
    } else if (datatype === "gender") {
      //gender api 호출
      const response = await getUserperGener(datatitle);
      setUserData(response.data.data);
    }
  };
  return (
    <Button
      onClick={() => {
        handleClickButton();
        handleButtonColor();
        {
          datatype === "page"
            ? navigate(`/info/${datatype}/${datatitle}/1`, { replace: true })
            : navigate(`/info/${datatype}/${datatitle}`, { replace: true });
        }
      }}
      clicked={clickBtn === datatitle}
    >
      {datatitle}
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
