import styled from "styled-components";

import React from "react";

const Result = ({ resultData }) => {
  return (
    <Dom>
      {resultData.length === 0 ? (
        <div>이거 왜 안 뜨지</div>
      ) : (
        <>
          <Total>점수 : {resultData.result}/9 </Total>
          <Incorrect>틀린문제</Incorrect>
          {resultData.incorrect.map((el) => {
            return (
              <>
                <Question>
                  <Title>{el.title}</Title>
                  <Answer>{el.answer}</Answer>
                </Question>
              </>
            );
          })}
        </>
      )}
    </Dom>
  );
};

export default Result;

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Question = styled.div`
  width: 100%;
`;

const Answer = styled.div`
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
