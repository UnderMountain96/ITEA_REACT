import {combineReducers} from "redux";
import state             from "./state";
import posts             from "./posts";
import users             from "./users";


const reducer = combineReducers({
    state,
    posts,
    users
});

export default reducer;
