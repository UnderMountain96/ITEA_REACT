import React from 'react';
import './style.scss'
import classNames from "classnames";


const Cell = ({children, type, background, color, currency}) => {
    const addCurrency = () => {
        if (currency) {
            return currency
        }
        console.log('currency empty')
    }

    return (
        <div
            style={{backgroundColor: background, color: (type === 'money') && !currency ? 'red' : color}}
            className={classNames('cell', type)}>
            {children} {type === 'money' ? addCurrency() : <></>}
        </div>
    );
};

Cell.defaultProps = {
    type: 'text',
    cells: 1,
    background: 'transparent',
    color: 'black'
}


export default Cell;