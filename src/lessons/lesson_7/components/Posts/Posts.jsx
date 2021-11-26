import React, {useEffect, useState} from "react";
import uniqid                       from "uniqid";
import {useDispatch, useSelector} from "react-redux";
import {Link}                     from "react-router-dom";
import {useParams}                from "react-router";

import {getPostsSelector, getUserDataSelector}      from "@lessons/lesson_7/selectors";
import {clearPosts, getPosts, getUser} from "@lessons/lesson_7/actions";

import "./Posts.style.scss";


export const Posts = () => {
    const [start, setStart] = useState(0);
    const {userid} = useParams();
    const dispatch = useDispatch();
    const {state, data} = useSelector(getPostsSelector);
    const {email} = useSelector(getUserDataSelector);

    useEffect(()=> {
        clearPosts({dispatch});
    }, []);

    useEffect(() => {
        getPosts({dispatch, start, userid});
        if (userid) getUser({dispatch, userId: userid});
    }, [dispatch, start]);

    const clickHandler = () => {
        setStart(start + 25);
    };

    return (
        <>
            <h2>
                {
                    !userid ?
                        "Posts" :
                        `Posts by ${email}:`
                }
            </h2>
            <div>
                {
                    !state.loading ? (
                        data.map((post) => (
                                <div key={uniqid()} className={"posts-l7"}>
                                    <div>{post.id}.</div>
                                    <div className={"posts-l7__title"}>{post.title}</div>
                                    <div className={"posts-l7__link"}>
                                        <Link to={`/lesson/7/post/${post.id}`}>
                                            Read post
                                        </Link>
                                    </div>
                                </div>
                            )
                        )
                    ) : (<h2>Loading posts...</h2>)

                }
            </div>
            {
                userid ?
                    <></> :
                    <button className={"posts-l7__loadMore"} onClick={clickHandler}>Load more</button>
            }
        </>
    );
};
