import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Input} from "@lesson_3/components";


export class Task2 extends Component {
    state = {
        data: [
            {
                id: uuidv4(),
                name: 'Login',
                type: 'text',
                placeholder: 'Login',
                value: '',
                contentLength: true,
                contentMaxLength: 20,
            },
            {
                id: uuidv4(),
                name: 'Password',
                type: 'password',
                placeholder: 'Password',
                value: '',
                contentLength: true,
                contentMaxLength: 20,
            },
            {
                id: uuidv4(),
                name: 'Year',
                type: 'number',
                placeholder: 'Year',
                value: '',
                contentLength: false,
                contentMaxLength: new Date().getFullYear(),
            },
            {
                id: uuidv4(),
                name: 'Month',
                type: 'number',
                placeholder: 'Month',
                value: '',
                contentLength: false,
                contentMaxLength: 12,
            },
            {
                id: uuidv4(),
                name: 'Day',
                type: 'number',
                placeholder: 'Day',
                value: '',
                contentLength: false,
                contentMaxLength: 31,
            }
        ]
    }

    handler = id => e => {
        const modState = {...this.state}
        modState.data.map(input => {
            if (input.id === id) {
                if (input.type === 'number') {
                    if (e.target.value > input.contentMaxLength) {
                        input.value = input.contentMaxLength
                    } else {
                        input.value = e.target.value
                    }
                } else {
                    input.value = e.target.value
                }
            }
            return input
        })
        this.setState({modState})
    }

    render() {
        const {handler} = this
        const {data} = this.state

        return (
                <>
                    <h1>Task 2</h1>
                    {
                        data.map(input =>
                                <Input
                                        key={input.id}
                                        name={input.name}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        value={input.value}
                                        handler={handler(input.id)}
                                        contentLength={input.contentLength}
                                        contentMaxLength={input.contentMaxLength}
                                />
                        )
                    }
                </>
        );
    }
}
