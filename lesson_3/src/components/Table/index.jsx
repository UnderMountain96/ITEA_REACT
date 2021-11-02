import React from 'react';
import './style.scss'


export const Table = ({children}) => {
    return (
        <div className='table'>
            {React.Children.map(children, child => {
                return React.cloneElement(child);
            })}
        </div>
    );
};
