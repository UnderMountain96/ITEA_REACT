import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Header, Home} from "@components";
import {Main as Lesson1} from "@lesson_1/views/Main";
import {Main as Lesson2} from "@lesson_2/views/Main";
import {Main as Lesson3} from "@lesson_3/views/Main";

class App extends Component {
    render() {
        return (
                <Router>
                    <Header/>

                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/lesson/1">
                            <Lesson1/>
                        </Route>
                        <Route path="/lesson/2">
                            <Lesson2/>
                        </Route>
                        <Route path="/lesson/3">
                            <Lesson3/>
                        </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Router>
        );
    }
}

export default App;
