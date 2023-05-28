import styled from "styled-components";

import React, { useEffect } from "react";
import { getUserPerPage } from "../../API/lioninfo";
import { useNavigate } from "react-router-dom";

const Pagination = ({ clickNum, setUserData }) => {
  useEffect(() => {
    async function handleData() {
      const response = await getUserPerPage(clickNum);
      setUserData(response.data.data);
    }
    handleData();
    console.log("change!");
  }, [clickNum, setUserData]);
  const navigate = useNavigate();
  const number = [1, 2, 3, 4, 5, 6, 7];
  return (
    <PaginationDom>
      {number.map((el) => {
        return (
          <PageNum
            onClick={async () => {
              //여기서 버튼을 누르면 바로 해당 번호의 정보를 가져와 렌더링 할 수 있게끔 다음과 같이 조작한다.
              navigate(`/info/All/${el}`, { replace: true });
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
