import React         from "react";
import {Posts, Post} from "./components";
import {NotFound}    from "@lessons/lesson_5/components";


const basename = "/lesson/7";

const routes = [
    {
        title: "Posts",
        path: `${basename}/`,
        children: <Posts/>,
        exact: true,
    },
    {
        path: `${basename}/post/:postid`,
        children: <Post/>,
        exact: true,
    },
    {
        path: `${basename}/user/:userid`,
        children: <Posts/>,
        exact: true
    },
    {
        component: NotFound
    }
];

export default routes;
