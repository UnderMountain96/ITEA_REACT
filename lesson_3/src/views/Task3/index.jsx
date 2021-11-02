import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Input, Toggler, TogglerItem} from "@components";
import './style.scss'


export class Task3 extends Component {
    state = {
        input: {
            handler: id => e => {
                const modState = {...this.state}
                Object.values(modState.input.data).map(input => {
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
            },
            data: {
                name: {
                    id: uuidv4(),
                    name: 'Name',
                    type: 'text',
                    placeholder: 'Name',
                    value: '',
                    contentLength: true,
                    contentMaxLength: 20,
                },
                password: {
                    id: uuidv4(),
                    name: 'Password',
                    type: 'password',
                    placeholder: 'Password',
                    value: '',
                    contentLength: true,
                    contentMaxLength: 20,
                },
                year: {
                    id: uuidv4(),
                    name: '',
                    type: 'number',
                    placeholder: 'Year',
                    value: '',
                    contentLength: false,
                    contentMaxLength: new Date().getFullYear(),
                },
                month: {
                    id: uuidv4(),
                    name: '',
                    type: 'number',
                    placeholder: 'Month',
                    value: '',
                    contentLength: false,
                    contentMaxLength: 12,
                },
                day: {
                    id: uuidv4(),
                    name: '',
                    type: 'number',
                    placeholder: 'Day',
                    value: '',
                    contentLength: false,
                    contentMaxLength: 31,
                },
                language: {
                    id: uuidv4(),
                    name: 'Language',
                    type: 'text',
                    placeholder: 'Language',
                    value: '',
                    contentLength: false,
                    contentMaxLength: 20,
                }
            }
        },
        toggle: {
            active: ({value, id}) => _ => {
                const modState = {...this.state}
                Object.values(modState.toggle.data).map(toggle => {
                    if (toggle.id === id) toggle.activeState = value;
                    return toggle
                })
                this.setState({modState})
            },
            data: {
                gender: {
                    id: uuidv4(),
                    activeState: 'Male',
                    name: 'gender',
                    items: ['Male', 'Female'],
                },
                layout: {
                    id: uuidv4(),
                    activeState: 'Center',
                    name: 'layout',
                    items: ['Left', 'Center', 'Right', 'Baseline'],
                }
            }
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        const data = [...e.target]
        const form = {}
        data.forEach(i => {
            if (i.localName === 'input') {
                form[i.placeholder.toLowerCase()] = i.value
            } else if (i.localName === 'button' && i.classList.contains('active') && i.type === 'button') {
                form[i.parentElement.previousSibling.textContent] = i.textContent
            }
        })
        console.log(form)
        for (const [key, value] of Object.entries(form)) {
            console.log(`${key}: ${value}`);
        }
    }

    render() {
        const {handler} = this.state.input
        const {active} = this.state.toggle
        const {gender, layout} = this.state.toggle.data
        const {name, password, year, month, day, language} = this.state.input.data

        return (
                <>
                    <h1>Task 3</h1>
                    <form className='from' onSubmit={this.submitHandler}>
                        <Input
                                key={name.id}
                                name={name.name}
                                type={name.type}
                                placeholder={name.placeholder}
                                value={name.value}
                                handler={handler(name.id)}
                                contentLength={name.contentLength}
                                contentMaxLength={name.contentMaxLength}
                        />
                        <Input
                                key={password.id}
                                name={password.name}
                                type={password.type}
                                placeholder={password.placeholder}
                                value={password.value}
                                handler={handler(password.id)}
                                contentLength={password.contentLength}
                                contentMaxLength={password.contentMaxLength}
                        />
                        <Toggler
                                action={active}
                                id={gender.id}
                                key={gender.id}
                                name={gender.name}
                                activeState={gender.activeState}
                        >
                            {gender.items.map(item => <TogglerItem key={uuidv4()} value={item}/>)}
                        </Toggler>

                        <div className='date'>
                            <div className='date__label'>
                                Date of Birth
                            </div>
                            <div className='date__input'>
                                <Input
                                        key={day.id}
                                        name={day.name}
                                        type={day.type}
                                        placeholder={day.placeholder}
                                        value={day.value}
                                        handler={handler(day.id)}
                                        contentLength={day.contentLength}
                                        contentMaxLength={day.contentMaxLength}
                                />
                                <Input
                                        key={month.id}
                                        name={month.name}
                                        type={month.type}
                                        placeholder={month.placeholder}
                                        value={month.value}
                                        handler={handler(month.id)}
                                        contentLength={month.contentLength}
                                        contentMaxLength={month.contentMaxLength}
                                />
                                <Input
                                        key={year.id}
                                        name={year.name}
                                        type={year.type}
                                        placeholder={year.placeholder}
                                        value={year.value}
                                        handler={handler(year.id)}
                                        contentLength={year.contentLength}
                                        contentMaxLength={year.contentMaxLength}
                                />
                            </div>
                        </div>

                        <Toggler
                                action={active}
                                id={layout.id}
                                key={layout.id}
                                name={layout.name}
                                activeState={layout.activeState}
                        >
                            {layout.items.map(item => <TogglerItem key={uuidv4()} value={item}/>)}
                        </Toggler>

                        <Input
                                key={language.id}
                                name={language.name}
                                type={language.type}
                                placeholder={language.placeholder}
                                value={language.value}
                                handler={handler(language.id)}
                                contentLength={language.contentLength}
                                contentMaxLength={language.contentMaxLength}
                        />
                        <button className='submit' type='submit'>submit</button>
                    </form>
                </>
        );
    }
}
