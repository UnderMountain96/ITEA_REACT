import React, {Component} from 'react';
import {Header}           from "@lesson_5/components";
import {Route, Switch}    from "react-router-dom";
import routes             from "../../routes_map";
import uniqid             from 'uniqid';


export class Task1 extends Component {

    render() {
        return (
                <>
                    <h1>Task 1-3</h1>
                    <Header/>

                    <Switch>
                        {
                            routes.map(route => (<Route key={uniqid()} {...route}/>))
                        }
                    </Switch>
                </>
        );
    }
}
