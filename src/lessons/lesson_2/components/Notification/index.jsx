import React from "react";
import "./style.scss";

const Notification = ({massages}) => {
    return (
        <>
            <h1 className='log-header'>LOG</h1>
            <div className='notification'>
                {
                    massages.map((msg) =>
                        <div
                            key={msg.id}
                            style={{color: msg.color}}
                            className='msg'>
                            {msg.id}: <b>{msg.text}</b>
                        </div>
                    )}
            </div>
        </>
    );
};

Notification.defaultProps = {
    massages: []
};

export default Notification;
