import React, {useState} from "react";
import uniqid                       from "uniqid";
import {Link}                       from "react-router-dom";
import {useDataFetch}               from "@lesson_4/components";


export const Home = () => {
    const [limit, setLimit] = useState(20);
    const [posts] = useDataFetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    const clickHandler = () => {
        setLimit(limit + 20);
    };

    return (<>
        <h1>Home</h1>
        <div className={"post__list"}>
            {
                !posts ? <h2 className={"post__list-loading"}> Loading... </h2> :
                        posts.map(post => (
                                <div key={uniqid()} className={"post__list__item"}>
                                    <h3 className={"post__list__item-title"}><b>{post.id}.</b> {post.title}</h3>
                                    <div>
                                        <Link key={post.id} to={`posts/${post.id}`}>
                                            more...
                                        </Link>
                                    </div>
                                </div>
                        ))
            }
        </div>
        <button className={"btn-l5"} onClick={clickHandler}>more...</button>
    </>);
};
