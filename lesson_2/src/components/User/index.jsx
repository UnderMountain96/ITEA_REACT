import React from 'react';
import Button from "@components/Button";
import classNames from 'classnames';
import './style.scss'


const User = ({user, action}) => {
    const {id, name, company, address, phone, email, interviewed} = user

    const clickHandler = () => {
        action(id)
    }

    return (
        <div className={classNames('user', {'interviewed': interviewed})}>
            <div>
                <b>{name}</b><br/>
                Company: <b>{company.name}</b><br/>
                Address: <b>{address.city}</b><br/>
                Contact:<br/>
                <b>{phone}, {email}</b><br/>
            </div>

            <div>
                <Button
                    text={interviewed ? 'interviewed' : 'interview'}
                    style={{
                        width: '200px',
                        color: interviewed ? '#000000' : '#ffffff',
                        backgroundColor: interviewed ? '#94c21e' : '#c61818'}}
                    action={clickHandler}
                    logger={function() {}}/><br/>
            </div>
        </div>
    );
};

export default User;
