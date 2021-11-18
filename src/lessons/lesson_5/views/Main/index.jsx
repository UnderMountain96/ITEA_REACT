import React, {Component} from 'react';
import {Task1, Task2, Task3} from "@lesson_5/views";


export class Main extends Component {
    render() {
        return (
                <>
                    <h1>Lesson 5</h1>
                    <div className='container'>
                        <div className='container__center'>
                            <Task1/>
                            {/*<Task2/>*/}
                            {/*<Task3/>*/}
                        </div>
                    </div>
                </>
        );
    }
}
