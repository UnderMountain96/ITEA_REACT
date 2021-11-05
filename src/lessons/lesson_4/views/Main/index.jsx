import React, {Component} from 'react';
import {Task1} from "@lesson_4/views";


export class Main extends Component {
    render() {
        return (
                <>
                    <h1>Lesson 4</h1>
                    <div className='container'>
                        <div className='container__center'>
                            <Task1/>
                        </div>
                    </div>
                </>
        );
    }
}
