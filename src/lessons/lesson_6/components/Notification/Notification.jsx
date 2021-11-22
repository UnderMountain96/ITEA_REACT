import React                  from "react";
import {useSelector}          from "react-redux";
import {notificationSelector} from "@lessons/lesson_6/selectors";
import {Message}              from "@lessons/lesson_6/components";
import uniqid                 from "uniqid";
import "./Notification.style.scss";


export const Notification = () => {
    const notification = useSelector(notificationSelector);

    return (

        <div className="notification-l6">
            {
                notification.map(item => (<Message key={uniqid()} item={item}/>))
            }
        </div>
    );
};
