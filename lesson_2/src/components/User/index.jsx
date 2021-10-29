import React from 'react';
import Button from "@components/Button";
import classNames from 'classnames';
import './style.scss'


const User = ({user, action}) => {
    const {id, name, interviewed} = user

    const clickHandler = () => {
         action(id)
    }

    return (
        <div className={classNames('user', {'interviewed': interviewed })}>
            {name}
            <Button action={clickHandler} logger={msg => console.log(msg)}/>
        </div>
    );
};

export default User;
