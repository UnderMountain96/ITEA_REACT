import React from 'react';
import './style.scss'


const DateCell = ({children, background, color}) => {
    return <div style={{backgroundColor: background, color: color}} className='cell date'>
        {children}
    </div>
};

DateCell.defaultProps = {
    background: 'transparent',
    color: 'blueviolet'
}

const NumberCell = ({children, background, color}) => {
    return <div style={{backgroundColor: background, color: color}} className='cell number'>
        {children}
    </div>
};

NumberCell.defaultProps = {
    background: 'transparent',
    color: 'blue'
}

const MoneyCell = ({children, background, color, currency}) => {
    const addCurrency = () => (
            currency ? currency : console.log('currency empty')
    )

    return <div style={{backgroundColor: background, color: currency ? color : 'red'}} className='cell money'>
        {children} {addCurrency()}
    </div>
};

MoneyCell.defaultProps = {
    background: 'transparent',
    color: 'green'
}

const TextCell = ({children, background, color}) => {
    return <div style={{backgroundColor: background, color: color}} className='cell text'>
        {children}
    </div>
};

TextCell.defaultProps = {
    background: 'transparent',
    color: 'black'
}

const types = [
    {type: 'date', component: DateCell},
    {type: 'number', component: NumberCell},
    {type: 'money', component: MoneyCell},
    {type: 'text', component: TextCell},
    {type: 'default', component: TextCell}
];

const Cell = (props) => {
    let subCell = types.find(cell => cell.type === props.type);
    if (subCell) {
        return <subCell.component {...props}/>
    } else {
        return <TextCell {...props} />
    }
}

Cell.defaultProps = {
    type: 'text',
    cells: 1,
}


export default Cell;
