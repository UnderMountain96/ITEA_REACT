import React                            from "react";
import {Posts}                          from "./components";
import {NotFound}                       from "@lessons/lesson_5/components";


const basename = "/lesson/7";

const routes = [
    {
        path: `${basename}/`,
        children: <Posts/>,
        exact: true,
    },
    {
        path: `${basename}/post`,
        children: <Posts/>,
        exact: true,
    },
    {
        path: `${basename}/user`,
        children: <Posts/>,
        exact: true
    },
    {
        component: NotFound
    }
];

export default routes;
