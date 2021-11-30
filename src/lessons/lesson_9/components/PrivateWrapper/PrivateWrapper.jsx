import React, {useEffect} from "react";
import {useDispatch}      from "react-redux";

import privateAxios                     from "@lessons/lesson_9/helpers/private.axios";
import {addNotification, authenticated} from "@lessons/lesson_9/actions";
import {ERROR}                          from "@lessons/lesson_9/constants";
import {useIntl}                        from "react-intl";
import {Redirect}                       from "react-router-dom";
import {basename}                       from "@lessons/lesson_9/routes_map";

export const PrivateWrapper = ({children}) => {
    const intl = useIntl();
    const dispatch = useDispatch();

    useEffect(() => {
        privateAxios.get("/uk/data")
            .then(function (response) {
                if (response && response.status === 401) {
                    dispatch(addNotification({
                        message: intl.formatMessage({id: "token.notPassed"}),
                        status: ERROR
                    }));
                    dispatch(authenticated({auth: false, session: ""}));
                    return <Redirect to={`${basename}/login`}/>;
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(addNotification({
                    message: intl.formatMessage({id: "token.notPassed"}),
                    status: ERROR
                }));
                dispatch(authenticated({auth: false, session: ""}));
            });
    }, [dispatch, privateAxios]);

    return (
        <>
            {children}
        </>
    );
};
