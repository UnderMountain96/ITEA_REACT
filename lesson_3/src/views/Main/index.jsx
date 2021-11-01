import React, {Component} from 'react';
import './style.scss'
import {Task1, Task2, Task3, Task4, MemoizedTask4} from "@views";


class Main extends Component {
        render() {
               return (
                <div className='container'>
                    {/*<Task1/>*/}
                    {/*<Task2/>*/}
                    {/*<Task3/>*/}
                    <Task4/>
                    <MemoizedTask4/>
                </div>
        );
    }
}

export default Main;
