import styled from "styled-components";

import React, { useState } from "react";
import { getQuestion, getResult } from "../../API/liontest";
import Question from "./QuestionSection";
import Result from "./Result";

const LionTestModal = () => {
  const [questionData, setQuestionData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [pageNum, setPageNum] = useState(-1);
  const getQuestionList = async () => {
    const response = await getQuestion();
    setQuestionData(response.data.data);
    setPageNum(0);
  };
  const getResultList = async () => {
    const response = await getResult(selectData);
    setResultData(response.data.data);
    setPageNum(10);
  };
  return (
    <Dom>
      <Title>🦁멋사인 테스트🦁</Title>
      <ContentBox>
        {pageNum === -1 ? (
          <Button onClick={getQuestionList}>Start</Button>
        ) : pageNum === 9 ? (
          <Button onClick={getResultList}> 결과보기 </Button>
        ) : pageNum === 10 ? (
          <Result resultData={resultData} />
        ) : (
          questionData && (
            <Question
              questionData={questionData}
              selectData={selectData}
              setSelectData={setSelectData}
              setPageNum={setPageNum}
              pageNum={pageNum}
            />
          )
        )}
      </ContentBox>
    </Dom>
  );
};

export default LionTestModal;

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
