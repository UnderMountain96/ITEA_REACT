import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Table, Row, Cell} from "@components";


// const data_array = Array.from({ length: 10000 },
//     () => ({
//         id: uniqid(),
//         name: Math.floor( Math.random() * 100 )
//     })
// )


export class Task4 extends Component {
    state = {
        table: [
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
            [{id: uuidv4(), value: '1'}, {id: uuidv4(), value: '2'}, {id: uuidv4(), value: '3'}],
        ],
        handler: ({row, cell}) => e => {
            const clone = {...this.state}
            clone.table[row][cell].value = e.target.value
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
                                <Row key={uuidv4()}>
                                    {row.map((cell, ci) => (
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

export const MemoizedTask4 = React.memo(Task4);
