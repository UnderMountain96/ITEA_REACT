import React from 'react';
import './style.scss'
import classNames from "classnames";


export const Row = ({children, index, head, theme}) => {
    return (
        <div className={classNames('row', {'head': head}, theme)}>
            {React.Children.map(children, (child, i) => {
                if (i === 0 && !head) return React.cloneElement(child, {children: index, theme});
                return React.cloneElement(child, {theme})
            })}
        </div>
    );
};

Row.defaultProps = {
    head: false
}
