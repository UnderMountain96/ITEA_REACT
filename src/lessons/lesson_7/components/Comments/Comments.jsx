import React, {useEffect}         from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams}                from "react-router";
import uniqid                     from "uniqid";

import {getCommentsSelector} from "@lessons/lesson_7/selectors";
import {getComments}         from "@lessons/lesson_7/actions";


const Comment = ({comment}) => {
    return (
        <div key={uniqid()}>
            <hr/>
            <div><b>{comment.email}</b></div>
            <h3>{comment.name}:</h3>
            <p>{comment.body}</p>
        </div>
    );
};


export const Comments = () => {
    const {postid} = useParams();
    const dispatch = useDispatch();
    const {state, data} = useSelector(getCommentsSelector);

    useEffect(() => {
        getComments({dispatch, postid});
    }, [dispatch]);


    return (
        <>
            <h2>Comments:</h2>
            {
                state.loaded ? (
                    data.map((comment) => (<Comment key={uniqid()} comment={comment}/>)
                    )
                ) : (<h2>Loading posts...</h2>)

            }
        </>
    );
};
