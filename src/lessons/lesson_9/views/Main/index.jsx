import React, {Component} from "react";
import {Task1}            from "@lessons/lesson_9/views";


export class Main extends Component {
    render() {
        return (
            <>
                <h1>Lesson 9</h1>
                <div className='container'>
                    <div className='container__center'>
                        <Task1/>
                    </div>
                </div>
            </>
        );
    }
}
