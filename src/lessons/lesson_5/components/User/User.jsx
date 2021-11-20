import React          from 'react';
import {useParams}    from "react-router";
import {useDataFetch} from "@lesson_4/components";
import {Comments}     from "@lesson_5/components";
import uniqid         from "uniqid";
import {Link}         from "react-router-dom";


export const User = () => {
    const {usersid} = useParams();

    const [user] = useDataFetch(`https://jsonplaceholder.typicode.com/users/${usersid}`);

    return (<>
        <h1>User</h1>
        <div className={'albums__list'}>
            {
                !user ? <h2 className={'albums__list-loading'}> Loading... </h2> :
                        <div key={uniqid()} className={'photo__list__item'}>
                            <h3 className={'photo__list__item-title'}><b>{user.id}.</b> {user.username}</h3>
                            <p>
                                <b>Name: {user.name}</b><br/>
                                <b>Email: {user.email}</b>
                            </p>
                            <div>
                                <Link key={uniqid()} to={`/lesson/5/users/${user.id}/posts`}>
                                    Posts details...
                                </Link><br/>
                                <Link key={uniqid()} to={`/lesson/5/users/${user.id}/albums`}>
                                    Albums details...
                                </Link>
                            </div>
                        </div>

            }
        </div>
    </>);
};
