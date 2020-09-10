import React, { useState } from "react";
import Counter from "./Component/Counter";
import CounterDetail from "./Component/CounterDetail";
import Test from "./Component/Test";
const Main = () => {
  return (
    <div>
      <Counter />
      <br />
      <br />
      <br />
      <CounterDetail />
      <br />
      <br />
      <br />
      <Test />
    </div>
  );
};

export default Main;
