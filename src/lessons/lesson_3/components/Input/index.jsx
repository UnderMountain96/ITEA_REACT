import React from "react";
import {PropTypes} from "prop-types";
import classNames from "classnames";
import "./style.scss";


export const Input = ({name, type, placeholder, value, handler, contentLength, contentMaxLength, theme}) => {
    return (
            <label className='input'>
                <div className='input__label'>{name}</div>

                <input
                        className={classNames("input__field", {valid: value}, theme)}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={handler}
                        maxLength={contentMaxLength}
                        max={contentMaxLength}
                        min={1}
                />
                {
                    contentLength ?
                            <span className='input__helper'>
                                Content length: {value.length} of {contentMaxLength}
                            </span> :
                            <></>
                }
            </label>

    );
};

Input.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "password",
        "number"
    ]).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.any
    ]),
    handler: PropTypes.func.isRequired,
    contentLength: PropTypes.bool,
    contentMaxLength: PropTypes.number
};
