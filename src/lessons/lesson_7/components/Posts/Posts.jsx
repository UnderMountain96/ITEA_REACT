import React, {useEffect}                        from "react";
import {useDispatch, useSelector}                from "react-redux";
import uniqid                                    from "uniqid";
import {getPostData, getPostLimit, getPostStart} from "../../selectors";
import {getPosts}                                from "@lessons/lesson_7/actions";


export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getPostData);
    const start = useSelector(getPostStart);
    const limit = useSelector(getPostLimit);

    useEffect(() => {
        dispatch(getPosts({start, limit}));
    });

    return (
        <div>
            {
                posts ? posts.map((post) => (<div key={uniqid()}>{post.title}</div>)) : <></>
            }
        </div>
    );
};
