import React from 'react';
import './style.scss'


export const Table = ({children}) => {
    return (
        <div className='table'>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child);
            })}
        </div>
    );
};
