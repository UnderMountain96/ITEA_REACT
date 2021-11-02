import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Toggler, TogglerItem} from "@components";


export class Task1 extends Component {
    state = {
        toggle: {
            active: ({value, id}) => _ => {
                const modState = {...this.state}
                modState.toggle.data.map(toggle => {
                    if (toggle.id === id) toggle.activeState = value;
                    return toggle
                })
                this.setState({modState})
            },
            data: [
                {
                    id: uuidv4(),
                    activeState: 'Male',
                    name: 'gender',
                    items: ['Male', 'Female'],
                },
                {
                    id: uuidv4(),
                    activeState: 'Center',
                    name: 'layout',
                    items: ['Left', 'Center', 'Right', 'Baseline'],
                },
                {
                    id: uuidv4(),
                    activeState: 'Dwarf',
                    name: 'race',
                    items: ['Human', 'Dwarf', 'Elf', 'Orc', 'Goblin'],
                },
                {
                    id: uuidv4(),
                    activeState: 'Hunter',
                    name: 'class',
                    items: ['Warrior', 'Hunter', 'Rogue', 'Mage'],

                }
            ]
        }
    }

    render() {
        const {active, data} = this.state.toggle

        return (
                <>
                    <h1>Task 1</h1>
                    {
                        data.map(toggle =>
                                <Toggler
                                        action={active}
                                        id={toggle.id}
                                        key={toggle.id}
                                        name={toggle.name}
                                        activeState={toggle.activeState}
                                >
                                    {toggle.items.map(item => <TogglerItem key={uuidv4()} value={item}/>)}
                                </Toggler>
                        )
                    }
                </>
        );
    }
}
