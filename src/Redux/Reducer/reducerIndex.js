import { combineReducers } from "redux";

import { numberReducer } from "./numberReducer";
import { stringReducer1, stringReducer2 } from "./stringReducer";

const rootReducer = combineReducers({
  numberReducer,
  stringReducer1,
  stringReducer2,
});

export default rootReducer;
