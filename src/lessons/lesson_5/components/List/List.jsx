import React, {useEffect, useState} from 'react';
import {Link}                       from "react-router-dom";


export const List = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/`)
                .then(res => res.json())
                .then(res => setPost(res));
    }, [setPost]);

    return (
            <>
                <h1>List</h1>
                {
                    !posts.length ?
                            <div> Loading </div> :
                            posts.map(post => (
                                    <Link
                                            key={post.id}
                                            to={`list/${post.id}`}
                                    >
                                        {post.title}
                                    </Link>
                            ))

                }
            </>
    );
};
