import React, {useState, useRef} from 'react';
import classNames                from "classnames";
import {PropTypes}               from "prop-types";
import './Selector.style.scss'
import {v4 as uuidv4}            from "uuid";
import {SelectorDrop}            from "@lesson_4/components";


export const Selector = ({name, children, action, activeState, id}) => {
    const btnRef = useRef(null)
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState([])

    const changeShow = () => {
        setShow(!show)
    }

    const getWidth = (w) => {
        setWidth([...width, w])
    }

    const compose = (f, g) => {
        return function (x) {
            return f(g(x));
        };
    };

    return (
            <div className={classNames('selector')}>
                <b className='selector__title'>{name}</b>
                <SelectorDrop getWidth={getWidth} btnRef={btnRef} key={uuidv4()} action={changeShow}>
                    {activeState}
                </SelectorDrop>
                <div className={'selector__list'}>
                    {
                        React.Children.count(children) > 0 &&
                        React.Children.map(children, (item) => {
                            if (React.isValidElement(item)) {
                                return React.cloneElement(
                                        item, {
                                            width: btnRef.current ? btnRef.current.offsetWidth : 'auto',
                                            show,
                                            active: item.props.value === activeState,
                                            action: compose(action({
                                                value: item.props.value,
                                                id
                                            }), changeShow),
                                            getWidth
                                        }
                                );
                            }
                        })
                    }
                </div>
            </div>
    )
}

Selector.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    activeState: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element)
}
