# 0. 세팅

## 1) 설치 라이브러리 및 사용하는 함수들.....

- npm install redux --save

  - createStore : store 생성 용 (index.js)
  - combineReducers : 만든 reducer 함수들을 합치는 용 (Redux/Reducer/index.js )

- npm install react-redux --save
  - useSelector : redux Store에 접근하여 state 값을 가져오는 함수 ( reducer를 호출) [Counter.js, CounterDetail.js]
  - useDispatch : action을 reducer에 전달하는 함수 (action을 전달해야 store state 변경가능!!) [Counter.js, CounterDetail.js]

## 2) Redux를 구성하는 요소

- store

  - 저장 공간
  - React 컴포넌트의 내부 state가 아닌 어딘가 아니보이는 저장공간에 state를 넣음

- reducer :

  - 실제 redux(store)에 접근하는 역할!!!!
  - useSelector를 통해 reducer를 넣으면 store에 접근하여 state값 가져옴.
  - useDispatch를 통해 action을 reducer에 전달하여 state값 변경

- action / actionCreator :

  - action : store에 state를 변경하는 정보를 가진 것!!!
  - redux의 state를 직접 변경할 수 없다. 변경하는 방법은 action을 전달하는 것 [공식문서]
  - 객체 형태
  - 객체 속성 내용 : type, 기타.... (type은 반드시 필요하다!!!!)
  - { type : "UPDATE_STATE", data : "xxxxx", 아무키 : "ahfasdfasd" }
  - reducer 함수에서 action을 받아서 type에 따라 state 변경을 여러개로 구분이 가능
  - actionCreator : action객체를 만들어 action을 리턴하기 위한 함수 (useDispatch에 넣을 함수)

- dispatch :

  - action을 reducer에 전달하는 역할
  - action객체를 만들었지만 reducer에 전달할 수 있는 방법

- 정리 :
  - 1. store에 값 가져오기 : Component -> reudcer -> store
  - 2. store의 state 변경 : Component -> actionCreator(action 객체) -> dispatch -> reducer -> store

# 1. Redux Store 생성하기 [ index.js ]

1. store를 생성한다.

- const store = createStore();

1-1. createStore()로 store를 생성한다. [store생성 후 확인하면 에러 발생 : reducer가 없어서 발생]

- reducer 함수 생성
- Redux / Reducer / numberRedcuer.js, stringReducer.js
- reducerIndex.js : numberRedcuer.js, stringReducer.js의 함수들을 합치는 역할

1-2. reducer 파일을 만들고 createStrore()에 넣는다. [store 공간 생성 완료]

- const store = createStore(만든 리듀서)

1-3. Provider 객체를 하위 컴포넌트들을 감싼다. [에러 발생 : store 속성 내용 없어서 발생]

- <Provider > ... <A컴포넌트 /> <B컴포넌트> ... </Proiveder  >

1-4. Provider 객체의 store 속성 값에 생성한 store를 넣는다, [이제 모든 컴포넌트들은 store에 접근이 가능함!]

- <Provider store={만든 store}> ... <A컴포넌트 /> <B컴포넌트> ... </Proiveder>

# 2. Reducer 생성 및 state 값 가져오기

1. Reducer 생성하기 (numberReducer.js, stringReducer.js)

2-1 reducer 함수를 만들고 export를 한다. [createStore에 넣기 위한 것]

- export const 함수 이름 = () => { }

2-2 초기 state를 만든다. [store에 state를 설정한다고 생각하면 됨]

- const 초기state = {
  키1: 값2,
  키2: 값2,
  };

2-3 reducer 함수 인자 값에 state와 action을 넣는다. (state : store의 state 내용, action : state변경할 때 사용 )

- export const 함수 이름 = (state = 초기state, action) => { }
- state = 초기state :
  - 처음 store에 state를 설정하는 것
  - 그 후 reducer를 통해 store의 state 값을 가져오는 것

2-4 return state를 한다. (state를 가져올 때)

- export const 함수 이름 = (state = 초기state, action) => { return state }
  - store에 state값을 가져오는 것

2-5. 컴포넌트에서 useSelector함수와 만든 reducer를 활용하여 store의 state를 가져온다.

- Counter.js, CounterDetail.js
- useSelector( (state)=>{ return state.리듀서함수.객체 })

블록) combineReducers : 여러개 reducer를 만들어 여러개의 state를 활용할 경우... 여러개의 reducer함수들을 하나로 합치는데 사용함.

# 3. Action /ActionCreator 생성 및 활용하기

3-1. ActionCreator를 생성한다.

- Redux/Action/numberAction.js

3-2. action객체를 리턴하는 함수를 만든다.

- export const increaseAction = () => {
  return { };
  };

3-3. return 객체에 aciton에 필요한 데이터를 넣는다.

- export const increaseAction = () => {
  return { type : "INCRAESE", 기타데이터... };
  };
- type은 반드시 필요하다!!!!

3-4. redux store의 state를 변경할 컴포넌트에서 사용할 actionCreator 함수를 호출한다.

- Counter.js, CounterDetail.js
- import { increaseAction } from "../Redux/Action/numberAction";

3-5. 컴포넌트에서 action을 리듀서에 보내기 위해 dispatch를 활용한다. (액션함수를 넣는다.)

- const dispatch = useDispatch();
- <button onClick={() => dispatch(increaseAction())}>증가하기</button>

3-6. 리듀서 함수에서 action 인자를 통해, type과 기타 데이터를 확인할 수 있다.

- dispatch를 하면 store에 넣은 모든 리듀서 함수들이 실행 될 것이다.
- 거기에서 실행되는 로직을 구분하기 위해 type이 필요하다!!!
- numberReducer.js, stringReducer.js 확인!!!

3-7. switch문이던 if문이던... action.type의 값을 활용하여 로직을 구분한다.

- switch (action.type) {
  case "액션1":
  로직1.......

  case "액션2"
  로직2......

  default:
  return state;
  }

3-8. 만들었던 초기 state들의 값을 변경하기 위한 새로운 state객체를 만들어 return한다.

- return을 하면 store의 state 값을 변경된다.
- switch (action.type) {
  case "액션1":
  로직1.....
  return 로직1로 만든 결과 state객체

  case "액션2"
  로직2......
  return 로직2로 만든 state객체

  default:
  return state;
  }

블록) switch문을 사용하는 것이 좋은 이유 :
마지막 default 같은 경우, useSelector로 리듀서함수를 호출하면 action은 undefine이 되어 default가 실행되어 state값을 가져온다.

블록) action 객체에 type 말고 다른 키값을 활용하여 사용할 수 있다. reducer에서 action.만든 키를 통해 state를 변경 가능하다.

- actionCreator = (필요한 데이터) => { return { type :"액션1", 키1 : "필요한데이터" } }
- reduncer함수 = (state, action) => {
  switch(action.type)
  case "액션1"
  const newState = {...state, 데이터 : action.키1 }
  return newState;
  }
