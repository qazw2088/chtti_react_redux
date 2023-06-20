import { combineReducers } from "redux";
import cokeReducer from "./coke/CokeReducer";
import fantaReducer from "./fanta/FantaReducer";
const rootReducer = combineReducers({ coke: cokeReducer, fanta: fantaReducer });
export default rootReducer;
