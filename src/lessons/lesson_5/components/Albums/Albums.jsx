import React          from 'react';
import uniqid         from "uniqid";
import {Link}         from "react-router-dom";
import {useDataFetch} from "@lesson_4/components";


export const Albums = () => {
    const [albums] = useDataFetch(`https://jsonplaceholder.typicode.com/albums/?_limit=10`);

    return (<>
        <h1>Albums</h1>
        <div className={'albums__list'}>
            {
                !albums ? <h2 className={'albums__list-loading'}> Loading... </h2> :
                        albums.map(post => (
                                <div key={uniqid()} className={'photo__list__item'}>
                                    <h3 className={'photo__list__item-title'}><b>{post.id}.</b> {post.title}</h3>
                                    <div>
                                        <Link key={post.id} to={`/lesson/5/albums/${post.id}/photos`}>
                                            details...
                                        </Link>
                                    </div>
                                </div>
                        ))
            }
        </div>
    </>);
};
