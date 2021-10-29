import React from 'react';

const Button = () => {

    const clickHandler = () => {
        console.log('click')
    }

    return (
        <button onClick={clickHandler}>
            button
        </button>
    );
};

export default Button;
