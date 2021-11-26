import {
    PROMISE,
    ERROR_COMMENTS,
    LOADED_COMMENTS,
    LOADING_COMMENTS,
    GET_COMMENTS
} from "../constants";

export const getComments = ({dispatch, postid}) => {
    dispatch({
        type: PROMISE,
        actions: [
            LOADING_COMMENTS,
            LOADED_COMMENTS,
            ERROR_COMMENTS,
            GET_COMMENTS
        ],
        promise: fetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`)
    });
};
