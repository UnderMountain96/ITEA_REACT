import React, {Component} from 'react';
import './style.scss'
import Button from "@components/Button";
import Notification from "@components/Notification";

export class Task1 extends Component {
    state = {
        massages: []
    }

    addMassages = (msg) => {
        this.setState({
            massages: [
                msg,
                ...this.state.massages
            ]
        })

    }

    render() {
        const {addMassages, state} = this

        return (
            <>
                <h1>Task 1</h1>
                <div className='btnBar'>
                    <Button
                        logger={(msg) => {
                            addMassages(msg)
                        }}
                    />

                    <Button
                        text={'damage'}
                        style={{backgroundColor: '#B80000'}}
                        action={() => {
                            console.log('custom click')
                        }}
                        logger={(msg) => {
                            addMassages(msg)
                        }}
                    />

                    <Button
                        text={'agile'}
                        style={{backgroundColor: '#18A200'}}
                        action={() => {
                            console.log('magic click')
                        }}
                        logger={(msg) => {
                            addMassages(msg)
                        }}
                    />

                    <Button
                        text={'magic'}
                        style={{backgroundColor: '#6900a2'}}
                        action={() => {
                            console.log('magic click')
                        }}
                        logger={(msg) => {
                            addMassages(msg)
                        }}
                    />
                </div>


                <Notification massages={state.massages}/>
            </>
        );
    }
}
