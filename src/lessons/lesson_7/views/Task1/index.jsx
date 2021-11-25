import React, {Component}    from "react";
import {Provider}            from "react-redux";
import store                 from "@lessons/lesson_7/redux/store";
import routes                from "@lessons/lesson_7/routes_map";
import {Route, Switch} from "react-router-dom";
import uniqid                from "uniqid";


export class Task1 extends Component {
    render() {
        return (
            <>
                <h1>Task 1</h1>
                <Provider store={store}>
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
