import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAction,
  decreaseAction,
  increaseOtherAction,
} from "../Redux/Action/numberAction"; //3-4

const Counter = () => {
  //2-5. store의 state 가져오기
  // 1) state를 가져오기 위해서 useSelector함수를 활용한다.
  // 2) useSelector안에 함수를 실행한다. (reducer로 값 가져오는 함수)
  // 3) useSelector안에 함수를 실행함수 :  (state)=> {  return state.리듀서.state키  }
  // 4) state로 인자를 넣으면 자동적으로 store의 리듀서를 인식함.

  const number = useSelector((state) => {
    console.log(state); //store의 리듀서들을 확인할 수 있다!!!
    return state.numberReducer.number;
  });

  console.log(number);

  //3-5 useDispatch 활용하기
  const dispatch = useDispatch();
  const increaseFunc = () => {
    dispatch(increaseAction());
  };

  return (
    <div>
      <h1>숫자 변경하는곳</h1>
      <h2>{number}</h2>
      <button onClick={increaseFunc}>증가하기</button>
      <button onClick={() => dispatch(decreaseAction())}>감소하기</button>
      <button onClick={() => dispatch(increaseOtherAction(5))}>5 더하기</button>
      <br />
    </div>
  );
};

export default Counter;
