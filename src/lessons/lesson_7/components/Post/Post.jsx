import React, {useEffect}         from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams}                from "react-router";

import {
    getPostSelector,
}                         from "@lessons/lesson_7/selectors";
import {getPost} from "@lessons/lesson_7/actions";
import {Comments, User}   from "@lessons/lesson_7/components";


export const Post = () => {
    const {postid} = useParams();
    const dispatch = useDispatch();
    const {state, data} = useSelector(getPostSelector);

    useEffect(() => {
        getPost({dispatch, postid});
    }, [dispatch]);

    return (
        <>
            <h2>Post:</h2>
            {
                state.loaded ? (
                    <div className={"post-l7"}>
                        <h2 className={"post-l7__title"}>{data.id}. {data.title}</h2>
                        <p>{data.body}</p>
                        <div>
                            Author: <User userId={data.userId}/>
                        </div>
                    </div>
                ) : (<h2>Loading post...</h2>)
            }
            <Comments/>
        </>
    );
};
