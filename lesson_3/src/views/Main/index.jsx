import React, {Component} from 'react';
import './style.scss'
import {Task1, Task2} from "@views";


class Main extends Component {
        render() {
               return (
                <div className='container'>
                    {/*<Task1/>*/}
                    <Task2/>
                </div>
        );
    }
}

export default Main;
