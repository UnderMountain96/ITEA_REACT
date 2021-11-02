import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Table, Row, Cell} from "@components";


const data_array = ({row, cell}) => {
    return Array.from({length: row},
            () => ({
                id: uuidv4(),
                row: Array.from({length: cell},
                        () => ({
                            id: uuidv4(),
                            value: Math.floor(Math.random() * 10)
                        }))
            })
    )
}


export class Task4 extends Component {
    state = {
        table: data_array({row: 50, cell: 50}),
        handler: ({row, cell}) => e => {
            const clone = {...this.state}
            clone.table[row].row[cell].value = e.target.value
            this.setState({clone})
        }
    }

    render() {
        const {handler, table} = this.state
        return (
                <>
                    <h1>Task 4</h1>
                    <Table>
                        {table.map((row, ri) => (
                                <Row key={row.id}>
                                    {row.row.map((cell, ci) => (
                                            <Cell key={cell.id} handler={
                                                handler({
                                                            row: ri,
                                                            cell: ci
                                                        }
                                                )}>
                                                {cell.value}
                                            </Cell>
                                    ))}
                                </Row>
                        ))}
                    </Table>
                </>
        );
    }
}
