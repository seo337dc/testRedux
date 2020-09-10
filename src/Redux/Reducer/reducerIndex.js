import { combineReducers } from "redux";

import { numberReducer } from "./numberReducer";
import { stringReducer1, stringReducer2 } from "./stringReducer";

//여러개의 리듀서들을 불러와 하나로 합친다.
const rootReducer = combineReducers({
  numberReducer,
  stringReducer1,
  stringReducer2,
});

export default rootReducer;

//리듀서가 여러개인 이유....
// 리듀서로 state를 생성하고 활용하는데.. state는 하나 밖에 넣을 수 없다.
// 하나의 파일로 여러개의 state를 관리하려면 state ={  객체1, 객체2 ....  } 이렇게 한번에 다 넣어야한다.
// 만약  게시판 state,  사용자 state,  제품 state.... 이렇게 많아진다면???  관리하기 매우 힘들다.
// 그래서 reducer 파일을 여러개 만들어... 각 state별로 나눈다.
// 그러면 관리/수정/삭제/추가 하기 수월해진다.
// createstore는 하나의 리듀서함수만 넣을 수 있다.  combineReducer는  여러개 리듀서들을 하나로 합치게 해준다.
// createstore에 합친 리듀서를 넣으면 모든 리듀서들을 활용할 수 있다.
