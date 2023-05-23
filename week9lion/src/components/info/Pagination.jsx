import styled from "styled-components";

import React from "react";
import { getUserPerPage } from "../../API/lioninfo";

const Pagination = ({ setClickNum, clickNum }) => {
  const number = [1, 2, 3, 4, 5, 6, 7];
  return (
    <PaginationDom>
      {number.map((el) => {
        return (
          <PageNum
            onClick={() => {
              //여기서 버튼을 누르면 바로 해당 번호의 정보를 가져와 렌더링 할 수 있게끔 다음과 같이 조작한다.
              // const response = await getUserPerPage(el);
              // setUserData(response.data.data);
              setClickNum(el);
            }}
            clicked={clickNum === el}
          >
            {el}
          </PageNum>
        );
      })}
    </PaginationDom>
  );
};

export default Pagination;

const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;

const PageNum = styled.div`
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`;
