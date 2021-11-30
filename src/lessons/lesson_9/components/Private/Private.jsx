import React, {useEffect, useState} from "react";
import uniqid                       from "uniqid";
import {useSelector}   from "react-redux";
import {useIntl}                    from "react-intl";

import {PrivateWrapper} from "@lessons/lesson_9/components";
import privateAxios     from "@lessons/lesson_9/helpers/private.axios";
import {getLang}        from "@lessons/lesson_9/selectors";


export const Private = () => {
    const intl = useIntl();
    const lang = useSelector(getLang);
    const [language] = useState(lang);
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

    return (
        <PrivateWrapper>
            <>
                <h1>{intl.formatMessage({id: "private"})}</h1>
                <div>
                    {
                        local.map((data) => (
                            <div key={uniqid()}>
                                <h2>{intl.formatMessage({id: "title"})}: {data.title}</h2>
                                <h3>{intl.formatMessage({id: "author"})}: {data.id}</h3>
                                <p><b>{intl.formatMessage({id: "body"})}</b>: {data.body}</p>
                            </div>
                        ))
                    }
                </div>
            </>
        </PrivateWrapper>
    );
};
