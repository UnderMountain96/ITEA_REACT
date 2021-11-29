import React, {useEffect} from "react";
import {useDispatch}      from "react-redux";

import privateAxios                     from "@lessons/lesson_9/helpers/private.axios";
import {addNotification, authenticated} from "@lessons/lesson_9/actions";
import {ERROR}                          from "@lessons/lesson_9/constants";

export const PrivateWrapper = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        privateAxios.get("/uk/data")
            .then(function (response) {
                console.log(response);
                if (response && response.status === 401) {
                    dispatch(addNotification({
                        message: response.data && response.data.message ? response.data.message : response.statusText,
                        status: ERROR
                    }));
                    dispatch(authenticated({auth: false, session: ""}));
                }
            })
            .catch(function (error) {
                dispatch(addNotification({
                    message: error.response.data && error.response.data.message ? error.response.data.message : error.message,
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
