//3. ActionCreator/Action 생성
// action을 반환하는 actionCreator를 생생하고, export한다.
// action객체 (type, 기타 정보)를 리턴한다.

//3-1, 3-2
export const increaseAction = () => {
  return { type: "INCREASE" }; //3-3
};

export const decreaseAction = () => {
  return { type: "DECREASE" };
};

export const increaseOtherAction = (number) => {
  return { type: "INCREASE_FIVE", data: number };
};
