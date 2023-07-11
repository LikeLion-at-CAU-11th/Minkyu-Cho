import React, { useEffect, useState } from "react";
import { getMyPage } from "../API/mypage";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res.data);
      setLoading(false);
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
