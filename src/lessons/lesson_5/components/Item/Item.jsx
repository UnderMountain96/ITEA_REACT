import React, {useEffect, useState} from 'react';
import {useParams}                  from 'react-router';
import {Rating}                     from "@lesson_5/components";


export const Item = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${params.itemid}`)
                .then(res => res.json())
                .then(res => setPost(res));
    }, [params, setPost]);

    return (
            <>
                <h1>Item</h1>
                {
                    !post ?
                            <div> Loading </div> :
                            <div>
                                <h2 className={'photo__list__item-title'}>{post.title}</h2>
                                <Rating id={post.id}/>
                                <img height={600} src={post.url} alt=""/>
                            </div>
                }
            </>
    );
};
