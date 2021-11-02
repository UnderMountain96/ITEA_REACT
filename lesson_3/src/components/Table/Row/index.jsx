import React from 'react';
import './style.scss'


export const Row = ({children}) => {
    return (
        <div className='row'>
            {React.Children.map(children, (child, i) => {
                return child
            })}
        </div>
    );
};
