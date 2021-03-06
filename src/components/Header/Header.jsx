import React     from "react";
import {NavLink} from "react-router-dom";
import "./Header.style.scss";
import routes    from "../../routes_map";
import uniqid    from "uniqid";


export const Header = () => {
    return (
            <nav className='header'>
                <div className='header__logo'>
                    <a className='header__logo__link'
                       href='https://github.com/UnderMountain96'
                       target='_blank' rel='noreferrer' title='GitHub UnderMountain96'>
                        UM
                    </a>
                </div>
                <ul className='header__list'>
                    {
                        routes.map(route => {
                            if (route.title) {
                                return (
                                        <li className='header__list__item' key={uniqid()}>
                                            <NavLink className='header__list__item__link' to={{pathname: route.path}}>
                                                {route.title}
                                            </NavLink>
                                        </li>
                                );
                            }
                            return null;
                        })
                    }
                </ul>
            </nav>
    );
};
