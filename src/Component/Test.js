import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const str = useSelector((state) => {
    return state.stringReducer1.str;
  });

  const num = useSelector((state) => {
    return state.numberReducer.number;
  });

  return (
    <>
      <h1>{str}</h1>
      <h1>{num}</h1>
    </>
  );
};

export default Test;
