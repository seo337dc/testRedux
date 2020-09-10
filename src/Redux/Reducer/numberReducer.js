// 2. Reducer 생성하기
// 2-1 reducer 함수를 만들고 export를 한다. [createStore에 넣기 위한 것]
// 2-2 초기 state를 만든다.  [store에 state를 설정한다고 생각하면 됨]
// 2-3 reducer 함수 인자 값에 state와 action을 넣는다. (state : store의 state 내용, action : state변경할 때 사용 )
// 2-4 return state를 한다.  (state를 가져올 때)
// 2-5 useSelector를 통해 컴포넌트에서 state 값을 가져온다. [ Counter.js, CounterDetail.js]

// 2-2
const initialState = {
  number: 30,
  str: "asdfasdfasdf;",
};

//2-1, 2-3
export const numberReducer = (state = initialState, action) => {
  console.log("넘어왔냐????", action); //3-6

  switch (action.type) {
    // 3-7 type에 따라 로직 구분!!!!

    case "INCREASE":
      //3-8 설정한 state를 수정 (store state 변경) 하고  결과를 바로 return한다.
      return {
        ...state,
        number: state.number + 1,
      };

    case "DECREASE":
      return (state = {
        ...state,
        number: state.number - 1,
      });

    case "INCREASE_FIVE":
      return (state = {
        ...state,
        number: state.number + action.data,
      });

    //그냥 값 호출
    default:
      return state; //2-4
  }
};
