import React, {useEffect} from "react";
import {Redirect}         from "react-router-dom";
import {basename}         from "@lessons/lesson_9/routes_map";
import {useDispatch}      from "react-redux";
import {authenticated}    from "@lessons/lesson_9/actions";

export const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authenticated({auth: false, session: ""}));
    }, [dispatch]);

    return (
        <>
            <Redirect to={basename}/>
        </>
    );
};
