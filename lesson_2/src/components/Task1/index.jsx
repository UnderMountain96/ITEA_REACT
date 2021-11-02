import React, {Component} from 'react';
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

    compose = (f, g) => {
        return function (x) {
            return f(g(x));
        };
    };

    render() {
        const {compose, addMassages, state} = this

        return (
                <>
                    <h1>Task 1</h1>
                    <div>
                        <Button/>

                        <Button
                                text={'damage'}
                                style={{backgroundColor: '#B80000'}}
                                action={
                                    compose(() => console.log('damage click'),
                                            (msg) => addMassages(msg))
                                }
                        />

                        <Button
                                text={'agile'}
                                style={{backgroundColor: '#18A200'}}
                                action={
                                    compose(() => console.log('agile click'),
                                            (msg) => addMassages(msg))
                                }
                        />

                        <Button
                                text={'magic'}
                                style={{backgroundColor: '#6900a2'}}

                                action={
                                    compose(() => console.log('magic click'),
                                            (msg) => addMassages(msg))
                                }
                        />
                    </div>

                    <Notification massages={state.massages}/>
                </>
        );
    }
}
