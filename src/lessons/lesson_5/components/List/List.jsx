import React, {useEffect, useState} from 'react';
import {Link}                       from "react-router-dom";
import {Rating}                     from "@lesson_5/components";
import uniqid                       from "uniqid";
import './List.stule.scss'


export const List = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
                .then(res => res.json())
                .then(res => setPost(res));
    }, [setPost]);

    return (<>
        <h1>List</h1>
        <div className={'photo__list'}>
            {
                !posts.length ? <h2 className={'photo__list-loading'}> Loading... </h2> :
                        posts.map(post => (
                                <div key={uniqid()} className={'photo__list__item'}>
                                    <h3 className={'photo__list__item-title'}>{post.title}</h3>
                                    <Rating id={post.id}/>
                                    <img height={150} src={post.thumbnailUrl} alt=""/>
                                    <div>
                                        <Link key={post.id} to={`list/${post.id}`}>
                                            more...
                                        </Link>
                                    </div>
                                </div>
                        ))
            }
        </div>
    </>);
};
