import styled from "styled-components";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = ({ questionData, selectData, pageNum, setSelectData }) => {
  const [click, setClick] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [answercolor, setAnswercolor] = useState(-1);
  const [answer, setAnswer] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  const navigate = useNavigate();
  return (
    <QuestionSection>
      {questionData.length === 0 ? (
        <div>이거 왜 안 뜨지</div>
      ) : (
        questionData && (
          <>
            <Title>{questionData[pageNum].title}</Title>
            {questionData[pageNum].answerList.map((e, i) => {
              return (
                <>
                  <AnswerSection>
                    <Answer
                      onClick={() => {
                        setClick((click) => {
                          click[pageNum] = true;
                          return click;
                        });
                        setAnswer((answer) => {
                          answer[pageNum] = i;
                          return answer;
                        });
                        setAnswercolor(i);
                      }}
                      clicked={answercolor === i}
                    >
                      {e.content}
                    </Answer>
                  </AnswerSection>
                </>
              );
            })}
            <NextButton
              onClick={() => {
                if (click[pageNum] === false) {
                  alert("누르고 하세요!");
                } else {
                  setSelectData([
                    ...selectData,
                    { id: pageNum, answer: answer[pageNum] },
                  ]);
                  setAnswercolor(-1);
                  navigate(`/test/${parseInt(pageNum) + 1}`, {
                    replace: true,
                  });
                }
              }}
            >
              다음
            </NextButton>
          </>
        )
      )}
    </QuestionSection>
  );
};

export default Question;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 15%;
  border-radius: 20px;
`;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "salmon" : "beige")};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
