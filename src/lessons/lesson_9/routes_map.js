import React                  from "react";
import {NotFound}             from "@lessons/lesson_5/components";
import {Home, Login, Private} from "@lessons/lesson_9/components";
import {Logout}               from "@lessons/lesson_9/components/Logout/Logout";


export const basename = "/lesson/9";

export const routes = [
    {
        title: "Home",
        path: `${basename}/`,
        children: <Home/>,
        exact: true,
    },
    {
        title: "Login",
        path: `${basename}/login`,
        children: <Login/>,
        exact: true,
    },
    {
        title: "Logout",
        path: `${basename}/logout`,
        children: <Logout/>,
        exact: true,
    },
    {
        title: "Private",
        path: `${basename}/private`,
        children: <Private/>,
        private: true,
        exact: true,
    },
    {
        component: NotFound
    }
];
