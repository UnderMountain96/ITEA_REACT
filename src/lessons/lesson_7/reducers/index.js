import {combineReducers} from "redux";
import comments          from "./comments";
import post              from "./post";
import posts             from "./posts";
import user             from "./user";


const reducer = combineReducers({
    comments,
    post,
    posts,
    user
});

export default reducer;
