import {Home, NotFound, Lesson1, Lesson2, Lesson3, Lesson4, Lesson5} from './lessons'


const routes = [
    {
        title: 'Home',
        path: '/home',
        component: Home,
        exact: true,
    },
    {
        title: 'Lesson 1',
        path: '/lesson/1/',
        component: Lesson1,
        exact: true,
    },
    {
        title: 'Lesson 2',
        path: '/lesson/2/',
        component: Lesson2,
        exact: true,
    },
    {
        title: 'Lesson 3',
        path: '/lesson/3/',
        component: Lesson3,
        exact: true,
    },
    {
        title: 'Lesson 4',
        path: '/lesson/4/',
        component: Lesson4,
        exact: true,
    },
    {
        title: 'Lesson 5',
        path: '/lesson/5/',
        component: Lesson5,
        exact: false,
    },
    {
        path: '*',
        component: NotFound
    }
];

export default routes;
