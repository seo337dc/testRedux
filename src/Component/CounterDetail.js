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

//useSelector로 redux를 접근하여 값을 가져온다.
// 전혀 다른 Counter 컴포넌트에서 redux state 값을 변경했지만. useSelector로 리덕스 store에 접근했기 때문에
// 변경된 값을 자동으로 가져오게 된다.
