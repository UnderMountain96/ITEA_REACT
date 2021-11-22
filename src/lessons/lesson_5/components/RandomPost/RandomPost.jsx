import React          from "react";
import {Redirect}     from "react-router-dom";
import {useDataFetch} from "@lessons/lesson_4/components";


export const RandomPost = () => {
    const [posts] = useDataFetch("https://jsonplaceholder.typicode.com/posts");

    const randomPost = () => {
        return Math.floor(Math.random(posts.length) * 100);
    };

    return (!posts ? <h3>Randomize post...</h3> : <Redirect to={`/lesson/5/posts/${randomPost()}`}/>);
};
