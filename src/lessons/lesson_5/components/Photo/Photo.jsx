import React          from "react";
import {useParams}    from "react-router";
import {Rating}       from "@lessons/lesson_5/components";
import {useDataFetch} from "@lessons/lesson_4/components";


export const Photo = () => {
    const {photoid} = useParams();
    const [photo] = useDataFetch(`https://jsonplaceholder.typicode.com/photos/${photoid}`);

    return (
        <>
            <h1>Photo</h1>
            {
                !photo ?
                    <h3> Loading photo... </h3> :
                    <div>
                        <h2 className={"photo__list__item-title"}><b>{photo.id}.</b> {photo.title}</h2>
                        <Rating id={photo.id}/>
                        <img height={600} src={photo.url} alt=""/>
                    </div>
            }
        </>
    );
};
