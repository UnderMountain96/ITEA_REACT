import React, {Component}    from "react";
import {Provider}            from "react-redux";
import store                 from "@lessons/lesson_7/redux/store";
import routes                from "@lessons/lesson_7/routes_map";
import {Link, Route, Switch} from "react-router-dom";
import uniqid                from "uniqid";


export class Task1 extends Component {
    render() {
        return (
            <>
                <h1>Task 1</h1>
                <Provider store={store}>
                    <ul className='header__list'>
                        {
                            routes.map(route => {
                                if (route.title) {
                                    return (
                                        <li className='header__list__item' key={route.path}>
                                            <Link className='header__list__item__link' to={{pathname: route.path}}>
                                                {route.title}
                                            </Link>
                                        </li>
                                    );
                                }
                                return null;
                            })
                        }
                    </ul>
                    <Switch>
                        {
                            routes.map(route => (<Route key={uniqid()} {...route}/>))
                        }
                    </Switch>
                </Provider>
            </>
        );
    }
}
