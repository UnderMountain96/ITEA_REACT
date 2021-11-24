import React, {Component} from "react";
import {Task1}            from "@lessons/lesson_7/views";


export class Main extends Component {
    render() {
        return (
            <>
                <h1>Lesson 7</h1>
                <div className='container'>
                    <div className='container__center'>
                        <Task1/>
                    </div>
                </div>
            </>
        );
    }
}
