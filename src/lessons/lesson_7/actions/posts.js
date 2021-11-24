import {GET_POSTS}    from "../constants";


export const getPosts = ({start, limit}) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return {
                type: GET_POSTS,
                payload: res
            };
        });
};
