import {combineReducers} from "redux";
import common            from "./common";
import notification      from "./notification";


const reducer = combineReducers({
    common,
    notification
});

export default reducer;
