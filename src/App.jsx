import React, {Component}                    from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {Header}                              from "@components";
import routes                                from "./route_map"


class App extends Component {
    render() {
        return (
                <HashRouter>
                    <Header/>

                    <Switch>
                        <Redirect exact from='/' to='/home'/>
                        {
                            routes.map(route => (<Route key={route.path} {...route}/>))
                        }
                    </Switch>
                </HashRouter>
        );
    }
}

export default App;
