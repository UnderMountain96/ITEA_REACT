import React from 'react';
import './style.scss'


export const Cell = React.memo(({children, handler}) => {
    console.log('render')
    return (
            <div className='cell-memo'>
                <input onChange={handler} className='cell-memo__input' type="text" value={children}/>
            </div>
    );
}, (prev, next) =>
{
    return prev.children === next.children
});
