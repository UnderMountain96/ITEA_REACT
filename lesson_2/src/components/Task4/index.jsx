import React, {Component} from 'react';
import Table from "@components/Table";
import Row from "@components/Table/Row";
import Cell from "@components/Table/Cell";


export class Task4 extends Component {
    currency = ['', '$', '€', '₴', 'Zł']
    state = {
        data: this.dataGenerator(100)
    }

    dataGenerator(n) {
        const {currency} = this
        const data = []
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
            )
        }
        return data
    }

    generateRandomDate() {
        return new Date(new Date().getTime() - Math.floor(Math.random() * 100000000000)).toDateString()
    }

    render() {
        const {data} = this.state
        return (
            <>
                <h1>Task 4</h1>
                <Table>
                    <Row head={true}>
                        <Cell background={'darkgray'}>
                            #
                        </Cell>
                        <Cell background={'darkgray'}>
                            date
                        </Cell>
                        <Cell background={'darkgray'}>
                            number
                        </Cell>
                        <Cell background={'darkgray'}>
                            money
                        </Cell>
                    </Row>
                    {
                        data.map((row, i) => (
                            <Row key={i}>
                                <Cell>
                                </Cell>
                                <Cell
                                    color='blueviolet'
                                    type='date'
                                >
                                    {row.date}
                                </Cell>
                                <Cell
                                    color='blue'
                                    type='number'
                                >
                                    {row.number}
                                </Cell>
                                <Cell
                                    color='green'
                                    type='money'
                                    currency={row.money.currency}
                                >
                                    {row.money.number}
                                </Cell>
                            </Row>
                        ))
                    }
                </Table>
            </>
        );
    }
}
