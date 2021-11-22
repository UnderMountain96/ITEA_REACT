import React, {Component}            from "react";
import {Button}                      from "@lessons/lesson_2/components";
import {Input, Toggler, TogglerItem} from "@lessons/lesson_3/components";
import {Cell, Row, Table}            from "@lessons/lesson_2/components";
import {ThemeContext}                from "@lessons/lesson_4/views/Task2/theme-context";
import {v4 as uuidv4}                from "uuid";
import "./ChangeTheme.scss";


export class ChangeTheme extends Component {
    currency = ["$", "€", "₴", "Zł"]

    state = {
        data: this.dataGenerator(5),
        input: "",
        toggler: {
            id: uuidv4(),
            activeState: "Hunter",
            name: "class",
            items: ["Warrior", "Hunter", "Rogue", "Mage"],
        }
    }

    dataGenerator(n) {
        const {currency} = this;
        const data = [];
        while (data.length < n) {
            data.push(
                {
                    date: this.generateRandomDate(),
                    number: Math.floor(Math.random() * 100) + 1,
                    money: {
                        number: Math.floor(Math.random() * 10000) + 1,
                        currency: currency[Math.floor(Math.random() * currency.length)],
                    },
                }
            );
        }
        return data;
    }

    generateRandomDate() {
        return new Date(new Date().getTime() - Math.floor(Math.random() * 100000000000)).toDateString();
    }

    handler = e => {
        this.setState({input: e.target.value});
    }

    active = ({value}) => () => {
        this.setState({
            toggler: {
                ...this.state.toggler,
                activeState: value
            }
        });
    }

    compose = (f) => {
        return function () {
            return f();
        };
    };

    render() {
        const {input, toggler, data} = this.state;
        const {compose, handler, active} = this;

        return (
            <ThemeContext.Consumer>
                {({theme, changeTheme}) => (
                    <div>
                        <div>
                            <Button text={"Light"}
                                    style={{backgroundColor: "#00aeff"}}
                                    action={
                                        compose(() => changeTheme("light"))
                                    }
                            />
                            <Button
                                text={"Dark"}
                                style={{backgroundColor: "#003a56"}}
                                action={
                                    compose(() => changeTheme("dark"))
                                }
                            />
                        </div>

                        <Input placeholder={`${theme} theme`} theme={theme} value={input}
                               type={"text"} handler={handler}/>

                        <Toggler theme={theme} {...toggler} action={active}>
                            {toggler.items.map(item => <TogglerItem key={uuidv4()} value={item}/>)}
                        </Toggler>

                        <Table theme={theme}>
                            <Row head={true}>
                                <Cell>#</Cell>
                                <Cell>date</Cell>
                                <Cell>number</Cell>
                                <Cell>money</Cell>
                            </Row>
                            {data.map((row) => (
                                <Row key={uuidv4()}>
                                    <Cell> </Cell>
                                    <Cell type='date'>{row.date}</Cell>
                                    <Cell type='number'>{row.number}</Cell>
                                    <Cell type='money' currency={row.money.currency}>
                                        {row.money.number}
                                    </Cell>
                                </Row>
                            ))}
                        </Table>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
