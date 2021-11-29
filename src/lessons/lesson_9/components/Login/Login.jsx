import React, {useState} from "react";
import {useDispatch}     from "react-redux";
import {useIntl}         from "react-intl";

import {Input}                          from "@lessons/lesson_3/components";
import {Button}                         from "@lessons/lesson_2/components";
import {addNotification, authenticated} from "@lessons/lesson_9/actions";
import {WARNING, ERROR, SUCCESS}        from "@lessons/lesson_9/constants";
import authAxios                        from "@lessons/lesson_9/helpers/auth.axios";
import {configurateToken}               from "@lessons/lesson_9/helpers/private.axios";


export const Login = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [credential, setCredential] = useState(
        {
            email: "test@test.ua",
            password: "11111111"
        }
    );
    const [disabled, setDisabled] = useState(false);

    const handler = (key) => (e) => {
        setCredential({
            ...credential,
            [key]: e.target.value.trim()
        });
    };

    const email =
        {
            name: intl.formatMessage({id: "email"}),
            type: "text",
            placeholder: intl.formatMessage({id: "email"}),
            value: credential.email,
            contentLength: true,
            contentMaxLength: 20,
            handler: handler("email")
        };

    const password = {
        name: intl.formatMessage({id: "password"}),
        type: "password",
        placeholder: intl.formatMessage({id: "password"}),
        value: credential.password,
        contentLength: true,
        contentMaxLength: 20,
        handler: handler("password")
    };

    const submitHandler = () => {
        const {email, password} = credential;
        let msg = "";
        if (!email.length) msg += intl.formatMessage({id: "email.empty"}) + "\n";
        if (!password.length) msg += intl.formatMessage({id: "password.empty"});
        if (msg.length) {
            return dispatch(addNotification(
                {
                    message: msg,
                    status: WARNING
                }
            ));
        }
        setDisabled(true);

        authAxios.post("/login",
            {
                email,
                password
            }
        )
            .then(function (response) {
                const {authorization} = response.headers;
                setCredential({
                    email: "",
                    password: ""
                });
                dispatch(addNotification({
                    message: intl.formatMessage({id: "authorization.success"}),
                    status: SUCCESS
                }));
                dispatch(authenticated({auth: true, session: authorization}));
                configurateToken(authorization);
            })
            .catch(function (error) {
                dispatch(addNotification({
                    message: error.response.data && error.response.data.message ? error.response.data.message : error.message,
                    status: ERROR
                }));
                setDisabled(false);
            });
    };

    const submit = {
        text: intl.formatMessage({id: "submit"}),
        action: submitHandler
    };

    return (
        <>
            <h1>{intl.formatMessage({id: "login"})}</h1>
            <Input {...email}/>
            <Input {...password}/>
            <Button {...submit} style={{backgroundColor: disabled ? "#888888" : "#18A200"}} disabled={disabled}/>
        </>
    );
};
