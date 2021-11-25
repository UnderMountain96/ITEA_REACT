import React  from "react";
import {Link} from "react-router-dom";
import "./Post.style.scss";


export const Post = ({post}) => {
    return (
        <div className={"post-l7"}>
            <div>{post.id}.</div>
            <div className={"post-l7__title"}>{post.title}</div>
            <div className={"post-l7__link"}><Link to={`/post/${post.id}`}>Read post</Link></div>
        </div>
    );
};
