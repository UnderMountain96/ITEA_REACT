import React, {Component} from "react";
import {Provider}         from "react-redux";

import store  from "@lessons/lesson_9/redux/store";
import Main   from "@lessons/lesson_9/components/Main/Main";


export class Task1 extends Component {
    render() {
        return (
            <>
                <h1>Task 1</h1>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </>
        );
    }
}
