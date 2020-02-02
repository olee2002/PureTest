import { combineReducers } from "redux";
import getReducer from "./getReducer";
import updateReducer from "./updateReducer";

export default combineReducers({
  data: getReducer,
  update: updateReducer
});