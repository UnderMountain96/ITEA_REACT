import React from "react";
import "./style.scss";
import classNames from "classnames";


const DateCell = ({children, background, color, theme}) => {
    return <div style={{backgroundColor: background, color: color}}
                className={classNames("cell date", theme)}>
        {children}
    </div>;
};

DateCell.defaultProps = {
    background: "transparent",
    color: "blueviolet"
};

const NumberCell = ({children, background, color, theme}) => {
    return <div style={{backgroundColor: background, color: color}}
                className={classNames("cell number", theme)}>
        {children}
    </div>;
};

NumberCell.defaultProps = {
    background: "transparent",
    color: "blue"
};

const MoneyCell = ({children, background, color, currency, theme}) => {
    const addCurrency = () => (
            currency ? currency : console.log("currency empty")
    );

    return <div style={{backgroundColor: background, color: currency ? color : "red"}}
                className={classNames("cell money", theme)}>
        {children} {addCurrency()}
    </div>;
};

MoneyCell.defaultProps = {
    background: "transparent",
    color: "green"
};

const TextCell = ({children, background, color, theme}) => {
    return <div style={{backgroundColor: background, color: color}}
                className={classNames("cell text", theme)}>
        {children}
    </div>;
};

TextCell.defaultProps = {
    background: "transparent",
    color: "black"
};

const types = [
    {type: "date", component: DateCell},
    {type: "number", component: NumberCell},
    {type: "money", component: MoneyCell},
    {type: "text", component: TextCell},
    {type: "default", component: TextCell}
];

export const Cell = (props) => {
    let subCell = types.find(cell => cell.type === props.type);
    if (subCell) {
        return <subCell.component {...props}/>;
    } else {
        return <TextCell {...props} />;
    }
};

Cell.defaultProps = {
    type: "text",
    cells: 1,
};
