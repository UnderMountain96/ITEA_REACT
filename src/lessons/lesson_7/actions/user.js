import {ERROR_USER, GET_USER, LOADED_USER, LOADING_USER, PROMISE} from "../constants";


export const getUser = ({dispatch, userId}) => {
    dispatch({
        type: PROMISE,
        actions: [
            LOADING_USER,
            LOADED_USER,
            ERROR_USER,
            GET_USER
        ],
        promise: fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    });
};
