import React from 'react';
import './style.scss'
import classNames from "classnames";


const Row = ({children, index, head}) => {
    return (
        <div className={classNames('row', {'head': head})}>
            {React.Children.map(children, (child, i) => {
                if (i === 0 && !head) return React.cloneElement(child, {children: index});
                return child
            })}
        </div>
    );
};

Row.defaultProps = {
    head: false
}

export default Row;