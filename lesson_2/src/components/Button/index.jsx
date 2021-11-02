import React from 'react';
import './style.scss'
import PropTypes from "prop-types";
import {v4 as uuidv4} from 'uuid';

const Button = ({text, style, action}) => {

    const clickHandler = () => {
        action({
            id: uuidv4(),
            text: `click on ${text}`,
            color: style.backgroundColor
        })
    }

    return (
            <button style={style} onClick={clickHandler}>
                {text}
            </button>
    );
};

Button.defaultProps = {
    text: 'default',
    style: {backgroundColor: '#005eff'},
    action: () => {
        console.log('default click')
    }
}

Button.propTypes = {
    logger: PropTypes.func
};


export default Button;
