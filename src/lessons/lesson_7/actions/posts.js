import {GET_POSTS, PROMISE, SET_ERROR, SET_LOADED, SET_LOADING} from "../constants";


export const getPosts = ({dispatch, start, limit}) => {
    dispatch({
        type: PROMISE,
        actions: [
            SET_LOADING,
            SET_LOADED,
            SET_ERROR,
            GET_POSTS
        ],
        promise: fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
    });
};
