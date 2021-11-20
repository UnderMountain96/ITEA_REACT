import React, {useState} from 'react';
import {
    JSONPlaceholder,
    Selector,
    SelectorItem
}                        from "@lesson_4/components";
import {v4 as uuidv4}    from "uuid";
import './UseEffectComponents.style.scss'


export const UseEffectComponents = () => {
    const [limit, setLimit] = useState(10)
    const [selector, setSelector] = useState(
            {
                id: uuidv4(),
                activeState: '10',
                name: 'Limit',
                items: ['10', '20', '30', '50', '100']
            }
    )

    const urls = [
        {
            url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
            type: 'posts'
        },

        {
            url: `https://jsonplaceholder.typicode.com/comments?_limit=${limit}`,
            type: 'comments'
        },
        {
            url: `https://jsonplaceholder.typicode.com/albums?_limit=${limit}`,
            type: 'albums'
        },
        {
            url: `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
            type: 'todos'
        },
        {
            url: `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`,
            type: 'photos'
        }
    ]


    const randomUrl = () => {
        const randomIndex = Math.floor(Math.random() * urls.length)
        return urls.splice(randomIndex, 1)[0]
    }

    const handlerSelector = ({value}) => _ => {
        setSelector({
            ...selector,
            activeState: value
        })
        setLimit(value)
    }

    return (
            <>
                <Selector {...selector} action={handlerSelector}>
                    {selector.items.map(item => <SelectorItem key={uuidv4()} value={item}/>)}
                </Selector>
                <div className={'UseEffectColumns'}>
                    <JSONPlaceholder data={randomUrl()}/>
                    <JSONPlaceholder data={randomUrl()}/>
                    <JSONPlaceholder data={randomUrl()}/>
                </div>
            </>
    );
};
