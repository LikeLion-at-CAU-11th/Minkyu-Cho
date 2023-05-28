import styled from "styled-components";

import React, { useEffect, useState } from "react";
import { getQuestion, getResult } from "../../API/liontest";
import Question from "./QuestionSection";
import Result from "./Result";
import { useNavigate } from "react-router-dom";

const LionTest = () => {
  const naviagate = useNavigate();
  const [questionData, setQuestionData] = useState([]);
  let pageNum = 8;
  const [selectData, setSelectData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const getQuestionList = async () => {
    const response = await getQuestion();
    setQuestionData(response.data.data);
  };
  const getResultList = async () => {
    const response = await getResult(selectData);
    setResultData(response.data.data);
  };
  useEffect(() => {
    getQuestionList();
  }, []);
  return (
    <Dom>
      <Title>🦁멋사인 테스트🦁</Title>
      <ContentBox>
        {questionData.length === 0 ? (
          <div>왜 안 뜨지</div>
        ) : (
          questionData && (
            <Question
              questionData={questionData}
              selectData={selectData}
              setSelectData={setSelectData}
              pageNum={pageNum}
            />
          )
        )}
      </ContentBox>
    </Dom>
  );
};

export default LionTest;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
