// import {Home, NotFound} from '@components' // NOT WORK!!!
// import {Home, NotFound} from './components' // NOT WORK!!!
import {Home}                                                 from "@components/Home/Home";
import {NotFound}                                             from "@components/NotFound/NotFound";
import {Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Lesson6} from "./lessons";


const routes = [
    {
        title: "Home",
        path: "/home",
        component: Home,
        exact: true,
    },
    {
        title: "Lesson 1",
        path: "/lesson/1",
        component: Lesson1,
        exact: true,
    },
    {
        title: "Lesson 2",
        path: "/lesson/2",
        component: Lesson2,
        exact: true,
    },
    {
        title: "Lesson 3",
        path: "/lesson/3",
        component: Lesson3,
        exact: true,
    },
    {
        title: "Lesson 4",
        path: "/lesson/4",
        component: Lesson4,
        exact: true,
    },
    {
        title: "Lesson 5",
        path: "/lesson/5",
        component: Lesson5,
        exact: false,
    },
    {
        title: "Lesson 6",
        path: "/lesson/6",
        component: Lesson6,
        exact: false,
    },
    {
        component: NotFound
    }
];

export default routes;
