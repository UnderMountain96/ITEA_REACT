import React                 from "react";
import {Link, Route, Switch} from "react-router-dom";
import {useSelector}         from "react-redux";
import {IntlProvider}        from "react-intl";

import {basename}                                 from "@lessons/lesson_9/routes_map";
import {Home, Login, Private}                     from "@lessons/lesson_9/components";
import {isAuthenticated, getLang, getDefaultLang} from "@lessons/lesson_9/selectors";
import {NotFound}                                 from "@lessons/lesson_5/components";
import {Logout}                                   from "@lessons/lesson_9/components/Logout/Logout";
import {Notification}                             from "@lessons/lesson_6/components";


const Main = () => {
    const auth = useSelector(isAuthenticated);
    const lang = useSelector(getLang);
    const defaultLang = useSelector(getDefaultLang);

    return (
        <IntlProvider locale={lang} defaultLocale={defaultLang}>
            <ul className='header__list'>
                <li className='header__list__item'>
                    <Link className='header__list__item__link' to={{pathname: `${basename}/`}}>
                        Home
                    </Link>
                </li>
                {
                    !auth ? (
                            <li className='header__list__item' style={{marginLeft: "auto"}}>
                                <Link className='header__list__item__link' to={{pathname: `${basename}/login`}}>
                                    Login
                                </Link>
                            </li>
                        ) :
                        (
                            <>
                                <li className='header__list__item'>
                                    <Link className='header__list__item__link' to={{pathname: `${basename}/private`}}>
                                        Private
                                    </Link>
                                </li>
                                <li className='header__list__item' style={{marginLeft: "auto"}}>
                                    <Link className='header__list__item__link' to={{pathname: `${basename}/logout`}}>
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )
                }
            </ul>
            <Switch>
                <Route exact path={`${basename}/`}>
                    <Home/>
                </Route>
                <Route exact path={`${basename}/login`}>
                    {!auth ? <Login/> : <Private/>}
                </Route>
                <Route exact path={`${basename}/logout`}>
                    {!auth ? <Login/> : <Logout/>}
                </Route>
                <Route exact path={`${basename}/private`}>
                    {!auth ? <Login/> : <Private/>}
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
            <Notification/>
        </IntlProvider>
    );
};

export default Main;
