import React, {Component} from 'react';
import {Task1} from "@lesson_5/views";
import '../../styles/commo.scss'


export class Main extends Component {
    render() {
        return (
                <>
                    <h1>Lesson 5</h1>
                    <div className='container'>
                        <div className='container__center'>
                            <Task1/>
                        </div>
                    </div>
                </>
        );
    }
}
