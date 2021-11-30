import React, {useEffect} from "react";
import {useDispatch}      from "react-redux";

import {authenticated} from "@lessons/lesson_9/actions";


export const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authenticated({auth: false, session: "", username: ""}));
    }, [dispatch]);

    return (
        <>
            logout
        </>
    );
};
