import {
    GET_POSTS,
    PROMISE,
    ERROR_POSTS,
    LOADING_POSTS,
    LOADED_POSTS,
    CHANGE_START, CLEAR_POSTS,
}                         from "@lessons/lesson_7/constants";


export const getPosts = ({dispatch, start, userid}) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    userid ?
        url += `?userId=${userid}` :
        url += `?_start=${start}&_limit=25`;

    dispatch({
        type: PROMISE,
        actions: [
            LOADING_POSTS,
            LOADED_POSTS,
            ERROR_POSTS,
            GET_POSTS
        ],
        promise: fetch(url)
    });
};


export const changeStart = ({dispatch, start}) => {
    dispatch({
        type: CHANGE_START,
        payload: start
    });
};

export const clearPosts = ({dispatch}) => {
    dispatch({
        type: CLEAR_POSTS
    });
};
