import React, {useState} from "react";
import {useDispatch}     from "react-redux";

import {Input}                          from "@lessons/lesson_3/components";
import {Button}                         from "@lessons/lesson_2/components";
import {addNotification, authenticated} from "@lessons/lesson_9/actions";
import {WARNING, ERROR, SUCCESS}        from "@lessons/lesson_9/constants";
import authAxios                        from "@lessons/lesson_9/helpers/auth.axios";
import {configurateToken}               from "@lessons/lesson_9/helpers/private.axios";


export const Login = () => {
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
            name: "Email",
            type: "text",
            placeholder: "Email",
            value: credential.email,
            contentLength: true,
            contentMaxLength: 20,
            handler: handler("email")
        };

    const password = {
        name: "Password",
        type: "password",
        placeholder: "Password",
        value: credential.password,
        contentLength: true,
        contentMaxLength: 20,
        handler: handler("password")
    };

    const submitHandler = () => {
        const {email, password} = credential;
        let msg = "";
        if (!email.length) msg += "Email empty!\n";
        if (!password.length) msg += "Password empty!";
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
                    message: "Success authorization!",
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
        text: "SUBMIT",
        action: submitHandler
    };

    return (
        <>
            <h1>Login</h1>
            <Input {...email}/>
            <Input {...password}/>
            <Button {...submit} style={{backgroundColor: disabled ? "#888888" : "#18A200"}} disabled={disabled}/>
        </>
    );
};
