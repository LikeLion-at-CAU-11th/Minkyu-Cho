import React, { useEffect, useState } from "react";
import { getMyPage } from "../API/mypage";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const router = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMyPage().then((res) => {
      if (res === false) {
        alert("토큰 유효기간이 만료되어 로그아웃됩니다");
        router("/");
      } else {
        setData(res.data);
        setLoading(false);
      }
    });
  }, []);
  if (loading) return <div>로딩중 ... </div>;
  return (
    <>
      <div>{data?.name}</div>
      <div>{data?.age}</div>
    </>
  );
};

export default Mypage;
