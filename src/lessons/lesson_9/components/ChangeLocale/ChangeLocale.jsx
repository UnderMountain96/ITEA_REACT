import React         from "react";
import uniqid        from "uniqid";
import {useDispatch} from "react-redux";
import {useIntl}     from "react-intl";

import config       from "@lessons/lesson_9/config";
import {changeLang} from "@lessons/lesson_9/actions";

import "./ChangeLocale.style.scss";


export const ChangeLocale = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const clickHandler = (lang) => () => {
        dispatch(changeLang(lang));
    };
    return (
        <div className={"lang"}>
            {intl.formatMessage({id: "lang"})}:
            {
                config.supportedLangs.map((lang) => (
                    <button className={"lang-btn"} key={uniqid()}
                            onClick={clickHandler(lang)}>{lang}</button>
                ))
            }
        </div>
    );
};
