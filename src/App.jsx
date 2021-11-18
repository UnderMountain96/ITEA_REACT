import React, {Component}                    from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {Header}                              from "@components";
import routes                                from "./routes_map"
import uniqid                                from "uniqid";


class App extends Component {
    render() {
        return (
                <HashRouter>
                    <Header/>

                    <Switch>
                        <Redirect exact from='/' to='/home'/>
                        {
                            routes.map(route => (<Route key={uniqid()} {...route}/>))
                        }

                    </Switch>
                </HashRouter>
        );
    }
}


export default App;
