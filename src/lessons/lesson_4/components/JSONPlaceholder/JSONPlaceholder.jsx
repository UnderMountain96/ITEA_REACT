import React          from 'react';
import {useDataFetch} from "@lesson_4/components";
import {dataParse}    from "@lesson_4/libs/dataParse";


export const JSONPlaceholder = ({data}) => {
    const {url, type} = data
    const [posts] = useDataFetch(url);

    return (
            <div className={'column'}>
                <h2 style={{textAlign: 'center'}}>{type.toUpperCase()}</h2>
                {
                    posts ? dataParse({type, posts}) : <h3>Loading...</h3>
                }

            </div>
    );
};
