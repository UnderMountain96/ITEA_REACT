import React, {useEffect, useState} from "react";
import uniqid                       from "uniqid";
import {useDispatch, useSelector}   from "react-redux";
import {useIntl}                    from "react-intl";

import {PrivateWrapper} from "@lessons/lesson_9/components";
import config           from "@lessons/lesson_9/config";
import privateAxios     from "@lessons/lesson_9/helpers/private.axios";
import {changeLang}     from "@lessons/lesson_9/actions";
import {getLang}        from "@lessons/lesson_9/selectors";

import "./Private.style.scss";


export const Private = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const lang = useSelector(getLang);
    const [language, setLanguage] = useState(lang);
    const [local, setLocal] = useState([]);

    useEffect(() => {
        privateAxios.get(`/${language}/data`)
            .then(function (response) {
                setLocal(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setLocal, language]);

    const clickHandler = (lang) => () => {
        setLanguage(lang);
        dispatch(changeLang(lang));
    };

    return (
        <PrivateWrapper>
            <>
                <h1>{intl.formatMessage({id: "private"})}</h1>
                <div>
                    <div className={"lang"}>
                        {intl.formatMessage({id: "lang"})}:
                        {
                            config.supportedLangs.map((lang) => (
                                <button className={"lang-btn"} key={uniqid()}
                                        onClick={clickHandler(lang)}>{lang}</button>
                            ))
                        }
                    </div>
                    <div>
                        {
                            local.map((data) => (
                                <div key={uniqid()}>
                                    <h2>{data.id}. {data.title}</h2>
                                    <p>
                                        {data.body}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        </PrivateWrapper>
    );
};
