// import {About, Contacts, Home, Item, List, NotFound} from "./components"; //NOT WORK!!!
import {About} from "./components/About/About";
import {Contacts} from "./components/Contacts/Contacts";
import {Home} from "./components/Home/Home";
import {Item} from "./components/Item/Item";
import {List} from "./components/List/List";
import {NotFound} from "./components/NotFound/NotFound";


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
        component: NotFound
    }
];

export default routes;
