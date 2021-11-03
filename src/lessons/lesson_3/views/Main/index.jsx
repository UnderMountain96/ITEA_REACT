import React, {Component} from 'react';
import {Task1, Task2, Task3, Task4} from "@lesson_3/views";


export class Main extends Component {
    render() {
        return (
                <>
                    <h1>Lesson 3</h1>
                    <div className='container'>
                        <div className='container__center'>
                            <Task1/>
                            <Task2/>
                            <Task3/>
                            <Task4/>
                        </div>
                    </div>
                </>
        );
    }
}
