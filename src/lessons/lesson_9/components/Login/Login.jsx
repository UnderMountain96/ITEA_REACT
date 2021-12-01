import React, {useState} from "react";
import {useDispatch}     from "react-redux";
import {useIntl}         from "react-intl";

import {Input}                          from "@lessons/lesson_3/components";
import {Button}                         from "@lessons/lesson_2/components";
import {addNotification, authenticated} from "@lessons/lesson_9/actions";
import {WARNING, ERROR, SUCCESS, INFO}  from "@lessons/lesson_9/constants";
import authAxios                        from "@lessons/lesson_9/helpers/auth.axios";
import {configurateToken}               from "@lessons/lesson_9/helpers/private.axios";


export const Login = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [credential, setCredential] = useState(
        {
            email: "",
            password: ""
        }
    );
    const [disabled, setDisabled] = useState(false);

    const handler = (key) => (e) => {
        setCredential({
            ...credential,
            [key]: e.target.value.trim()
        });
    };

    const email = {
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
        if (!email.length) {
            msg += intl.formatMessage({id: "email.empty"});
            dispatch(addNotification(
                {
                    message: intl.formatMessage({id: "email.empty"}),
                    status: WARNING
                }
            ));
        }
        if (!password.length) {
            msg += intl.formatMessage({id: "password.empty"});
            dispatch(addNotification(
                {
                    message: intl.formatMessage({id: "password.empty"}),
                    status: WARNING
                }
            ));
        }
        if (msg.length) {
            return;
        }
        setDisabled(true);

        authAxios.post("/login",
            {
                email,
                password
            })
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
                dispatch(authenticated({auth: true, session: authorization, username: email}));
                configurateToken(authorization);
                dispatch(addNotification({
                    message: intl.formatMessage({id: "welcome.messages"}, {username: email}),
                    status: INFO
                }));
            })
            .catch(function (error) {
                if (error.response && error.response.status === 400) {
                    if (error.response.data.message === "Почта введена не верно") {
                        dispatch(addNotification({
                            message: intl.formatMessage({id: "mail.incorrectly"}),
                            status: ERROR
                        }));
                    }
                    if (error.response.data.message === "Пользователь не найден") {
                        dispatch(addNotification({
                            message: intl.formatMessage({id: "user.notFound"}),
                            status: ERROR
                        }));
                    }

                } else {
                    dispatch(addNotification({
                        message: intl.formatMessage({id: "error.network"}),
                        status: ERROR
                    }));
                }

                setDisabled(false);
            });
    };

    const submit = {
        text: intl.formatMessage({id: "login"}),
        action: submitHandler,
        style: {
            backgroundColor: disabled ? "#888888" : "#18A200",
            width: "auto",
        }
    };

    return (
        <>
            <h1>{intl.formatMessage({id: "login"})}</h1>
            <Input {...email}/>
            <Input {...password}/>
            <Button {...submit} disabled={disabled}/>
        </>
    );
};
