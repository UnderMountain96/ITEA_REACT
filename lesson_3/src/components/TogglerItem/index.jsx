import React from 'react'
import classNames from "classnames";

export const TogglerItem = ({children, value, active, action}) => {
    return (
            <button
                    className={classNames('toggle__item', {active: active})}
                    type="button"
                    onClick={action}
            >
                {children || value}
            </button>
    )

}
