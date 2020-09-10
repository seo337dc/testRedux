import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import rootReducer from "./Redux/Reducer/reducerIndex";

import { Provider } from "react-redux";

//1. store를 생성한다.
//1-1. createStore()로  store를 생성한다. [store생성 후 확인하면 에러 발생 : reducer가 없어서 발생]
//1-2. reducer 파일을 만들고 createStrore()에 넣는다. [store 공간 생성 완료]
//1-3. Provider 객체를  하위 컴포넌트들을 감싼다. [에러 발생 : store 속성 내용 없어서 발생]
//1-4. Provider 객체의 store 속성 값에 생성한 store를 넣는다, [이제 모든 컴포넌트들은 store에 접근이 가능함!]
const store = createStore(rootReducer);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
