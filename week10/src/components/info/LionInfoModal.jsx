import styled from "styled-components";

import React, { useState } from "react";
import FilterButton from "./FilterButton";
import UserDataSection from "./UserDataSection";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

const LionInfoModal = () => {
  const { number } = useParams();
  const [userData, setUserData] = useState([]);
  const [clickBtn, setClickBtn] = useState("");
  //이거 나눌때는 이거를 변경해서 불러주는 형식으로 하면 된다. FilterButton을 누르면 해당 clickNum에 맞는 API를 호출한다.
  //pageAPI 각각 불러내는 거 , 그리고 API전체를 불러내서 잘라내는 거..
  //type이 의미하는 건 ? -> page props에 따라 API를 또 다르게 불러야하니깐..
  const category = [
    {
      type: "page",
      title: "All",
    },
    {
      type: "gender",
      title: "male",
    },
    {
      type: "gender",
      title: "female",
    },
    {
      type: "stack",
      title: "frontend",
    },
    {
      type: "stack",
      title: "backend",
    },
    {
      type: "stack",
      title: "design",
    },
    {
      type: "stack",
      title: "pm",
    },
  ];
  return (
    <Dom>
      <Title>🦁 LikeLion 11th 🦁</Title>
      <ButtonDom>
        {category.map((c, i) => {
          return (
            <FilterButton
              key={i}
              title={c.title}
              type={c.type}
              setUserData={setUserData}
              clickBtn={clickBtn}
              setClickBtn={setClickBtn}
            />
          );
        })}
      </ButtonDom>
      {clickBtn === "All" ? (
        <>
          {/* <UserDataSection
            userData={userData.slice(clickNum * 4 - 4, clickNum * 4)}
          /> */}
          <UserDataSection userData={userData} />
          <Pagination
            clickNum={parseInt(number)}
            // page에서 userData를 조작해야되기 때문에 이를 보내준다.
            setUserData={setUserData}
          />
        </>
      ) : (
        <UserDataSection userData={userData} />
      )}
    </Dom>
  );
};

export default LionInfoModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
