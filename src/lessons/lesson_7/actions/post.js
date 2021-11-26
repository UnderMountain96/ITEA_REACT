import {
    PROMISE,
    ERROR_POST,
    LOADED_POST,
    LOADING_POST,
    GET_POST
} from "../constants";

export const getPost = ({dispatch, postid}) => {
    dispatch({
        type: PROMISE,
        actions: [
            LOADING_POST,
            LOADED_POST,
            ERROR_POST,
            GET_POST
        ],
        promise: fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    });
};
