import React from 'react';
import classNames from "classnames";
import {PropTypes} from "prop-types";


export const SelectorItem = ({children, value, active, action, show, width, btnRef}) => {
    return (
            <button
                    ref={btnRef}
                    style={{width}}
                    className={classNames('selector__item', {active, show})}
                    type="button"
                    onClick={action}
            >
                {children || value}
            </button>
    )
}

SelectorItem.propTypes = {
    action: PropTypes.func,
    active: PropTypes.bool,
    value: PropTypes.string,
    children: PropTypes.string
}
