import React, {useEffect, useState} from "react";
import uniqid                       from "uniqid";
import {useDispatch}                from "react-redux";

import {PrivateWrapper} from "@lessons/lesson_9/components";
import config           from "@lessons/lesson_9/config";
import privateAxios     from "@lessons/lesson_9/helpers/private.axios";
import {changeLang}     from "@lessons/lesson_9/actions";

import "./Private.style.scss";


export const Private = () => {
    const dispatch = useDispatch();
    const [language, setLanguage] = useState(config.defaultLang);
    const [local, setLocal] = useState([]);

    useEffect(() => {
        privateAxios.get(`/${language}/data`)
            .then(function (response) {
                console.log(response);
                setLocal(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setLocal, language]);

    const clickHandler = (lang) => () => {
        console.log(lang);
        setLanguage(lang);
        dispatch(changeLang(lang));
    };

    return (
        <PrivateWrapper>
            <>
                <h1>Private</h1>
                <div>
                    <div className={"lang"}>
                        lang:
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
