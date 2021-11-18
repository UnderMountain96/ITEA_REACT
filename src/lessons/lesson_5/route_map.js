import {About, Contacts, Home, Item, List, NotFound} from "@lesson_5/components";

const basename = '/lesson/5'

const routes = [
    {
        title: 'Home',
        path: `${basename}/`,
        component: Home,
        exact: true,
    },
    {
        title: 'About',
        path: `${basename}/about`,
        component: About,
        exact: true
    },
    {
        title: 'Contacts',
        path: `${basename}/contacts`,
        component: Contacts,
        exact: true
    },
    {
        title: 'List',
        path: `${basename}/list`,
        component: List,
        exact: true
    },
    {
        path: `${basename}/list/:itemid`,
        component: Item,
        exact: true
    },
    {
        path: '*',
        component: NotFound
    }
];

export default routes;
