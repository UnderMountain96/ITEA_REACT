import React from 'react';
import './style.scss'
import classNames from "classnames";


export const Table = ({children, theme}) => {
    return (
        <div className={classNames('table', theme)}>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {index: i, theme});
            })}
        </div>
    );
};
