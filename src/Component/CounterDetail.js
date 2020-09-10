import React from "react";
import { useSelector } from "react-redux";

const CounterDetail = () => {
  const data = useSelector((state) => state);
  return (
    <div>
      <h1>변경 값 보는 곳</h1>
      <h2>{data.number}</h2>
    </div>
  );
};

export default CounterDetail;
