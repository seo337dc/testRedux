// 3-1. ActionCreator를 생성한다.
// 3-2. action객체를 리턴하는 함수를 만든다.
// 3-3. return 객체에 aciton에 필요한 데이터를 넣는다.
// 3-4. redux store의 state를 변경할 컴포넌트에서 사용할 actionCreator 함수를 호출한다.
// 3-5. 컴포넌트에서 action을 리듀서에 보내기 위해 dispatch를 활용한다. (액션함수를 넣는다.)
// 3-6. 리듀서 함수에서 action 인자를 통해, type과 기타 데이터를 확인할 수 있다.
// 3-7. switch문이던 if문이던... action.type의 값을 활용하여 로직을 구분한다.
// 3-8. 만들었던 초기 state들의 값을 변경하기 위한 새로운 state객체를 만들어 return한다.

//3-1. ActionCreator/Action 생성
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

// type이 필요한 이유
// dispatch 할 수를 실행하면 createStore에 넣었던 리듀서 함수들이 모두 실행된다.
// 거기서 수정할 state를 구분하기 위해 type을 설정하는 것이다.
// 그래서 type이름은 구분해주는 것이 좋다.
