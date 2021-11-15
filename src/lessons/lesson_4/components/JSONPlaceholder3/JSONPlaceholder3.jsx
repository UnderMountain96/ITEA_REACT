import React          from 'react';
import {useDataFetch} from "@lesson_4/components";
import {dataParse}    from "@lesson_4/libs/dataParse";


export const JSONPlaceholder3 = ({data}) => {
    const {url, type} = data
    const [posts] = useDataFetch(url);

    return (
            <div style={{display: posts.length ? 'block' : 'none'}} className={'column'}>
                <h2 style={{textAlign: 'center'}}>{type.toUpperCase()}</h2>
                {dataParse({type, posts})}
            </div>
    );
};
