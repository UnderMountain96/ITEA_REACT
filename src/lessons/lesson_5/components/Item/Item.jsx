import React, {useEffect, useState} from 'react';
import {useParams}                  from 'react-router';


export const Item = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${params.itemid}`)
                .then(res => res.json())
                .then(res => setPost(res));
    }, [params, setPost]);
    console.log(post)

    return (
            <>
                <h1>Item</h1>
                {
                    !post ?
                            <div> Loading </div> :
                            <div>
                                <h2 style={{textAlign: 'center'}}>{post.title}</h2>
                                <img src={post.url} alt=""/>
                            </div>
                }
            </>
    );
};
