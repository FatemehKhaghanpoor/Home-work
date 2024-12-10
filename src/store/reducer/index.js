import{combineReducers} from "redux";
import shopReducer from "./shopreducer";

const rootReducer = combineReducers({
shopList: shopReducer
});
export default rootReducer;