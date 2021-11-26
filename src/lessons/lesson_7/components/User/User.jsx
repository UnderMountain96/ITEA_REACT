import React, {useEffect}         from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link}                     from "react-router-dom";

import {getUserDataSelector} from "@lessons/lesson_7/selectors";
import {getUser}    from "@lessons/lesson_7/actions";


export const User = ({userId}) => {
    const dispatch = useDispatch();
    const {email, id} = useSelector(getUserDataSelector);

    useEffect(() => {
        getUser({dispatch, userId});
    }, [dispatch]);

    return (
        <>
            {
                email ?
                    <Link to={`/lesson/7/user/${id}`}>{email}</Link> :
                    <b>loading...</b>
            }
        </>
    );
};
