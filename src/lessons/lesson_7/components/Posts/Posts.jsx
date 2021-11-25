import React, {useEffect}                        from "react";
import {useDispatch, useSelector}                from "react-redux";
import uniqid                                    from "uniqid";
import {getPostData, getPostLimit, getPostStart} from "../../selectors";
import {getPosts}                                from "@lessons/lesson_7/actions";
import {Post}                                    from "@lessons/lesson_7/components";


export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getPostData);
    const start = useSelector(getPostStart);
    const limit = useSelector(getPostLimit);

    useEffect(() => {
        getPosts({dispatch, start, limit});
    }, [dispatch]);

    return (
        <div>
            {
                posts ? posts.map((post) => (<Post key={uniqid()} post={post}/>)) : <></>
            }
        </div>
    );
};
