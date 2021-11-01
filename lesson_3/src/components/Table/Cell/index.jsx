import React from 'react';
import './style.scss'


export const Cell = ({children, handler}) => {

    return (
        <div className='cell'>
            <input onChange={handler} className='cell__input' type="text" value={children}/>
        </div>
    );
};
