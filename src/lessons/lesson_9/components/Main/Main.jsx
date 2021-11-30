import React                           from "react";
import {Link, Route, Switch, Redirect} from "react-router-dom";
import {useSelector}                   from "react-redux";
import {useIntl}                       from "react-intl";

import {basename}                                   from "@lessons/lesson_9/routes_map";
import {Home, Login, Private, Logout, ChangeLocale} from "@lessons/lesson_9/components";
import {getUsername, isAuthenticated}               from "@lessons/lesson_9/selectors";
import {NotFound}                                   from "@lessons/lesson_5/components";
import {Notification}                               from "@lessons/lesson_6/components";

import "./Main.style.scss";


export const Main = () => {
    const intl = useIntl();
    const username = useSelector(getUsername);
    const auth = useSelector(isAuthenticated);

    return (
        <>
            <ul className='header__list'>
                <li className='header__list__item'>
                    <Link className='header__list__item__link' to={{pathname: `${basename}/`}}>
                        {intl.formatMessage({id: "home"})}
                    </Link>
                </li>
                {
                    !auth ? (
                            <li className='header__list__item' style={{marginLeft: "auto"}}>
                                <Link className='header__list__item__link' to={{pathname: `${basename}/login`}}>
                                    {intl.formatMessage({id: "login"})}
                                </Link>
                            </li>
                        ) :
                        (
                            <>
                                <li className='header__list__item'>
                                    <Link className='header__list__item__link' to={{pathname: `${basename}/private`}}>
                                        {intl.formatMessage({id: "private"})}
                                    </Link>
                                </li>
                                {
                                    !username ?
                                        <></> :
                                        (<li className='header__list__item' style={{marginLeft: "auto"}}>
                                            <span className={"username"}>
                                                {intl.formatMessage({id: "user"})}: {username}
                                            </span>
                                        </li>)
                                }
                                <li className='header__list__item'>
                                    <Link className='header__list__item__link' to={{pathname: `${basename}/logout`}}>
                                        {intl.formatMessage({id: "logout"})}
                                    </Link>
                                </li>
                            </>
                        )
                }
            </ul>
            <div style={{marginLeft: "auto"}}>
                <ChangeLocale/>
            </div>
            <Switch>
                <Route exact path={`${basename}/`}>
                    <Home/>
                </Route>
                <Route exact path={`${basename}/login`}>
                    {!auth ? <Login/> : <Redirect to={`${basename}/private`}/>}
                </Route>
                <Route exact path={`${basename}/logout`}>
                    {!auth ? <Redirect to={`${basename}/login`}/> : <Logout/>}
                </Route>
                <Route exact path={`${basename}/private`}>
                    {!auth ? <Redirect to={`${basename}/login`}/> : <Private/>}
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
            <Notification/>
        </>
    );
};
