import React          from "react";
import {useDataFetch} from "@lessons/lesson_4/components";
import {dataParse}    from "@lessons/lesson_4/libs/dataParse";


export const JSONPlaceholder = ({data}) => {
    const {url, type} = data;
    const [posts] = useDataFetch(url);

    return (
        <div className={"column"}>
            <h2 style={{textAlign: "center"}}>{type.toUpperCase()}</h2>
            {
                posts ? dataParse({type, posts}) : <h3>Loading...</h3>
            }

        </div>
    );
};
