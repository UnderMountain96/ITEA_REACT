import React  from 'react';
import {Link} from "react-router-dom";
import './style.scss'
import routes from "../../route_map";


export const Header = () => {
    return (
            <header>
                <ul className='header__list'>
                    {
                        routes.map(route => {
                            if (route.title) {
                                return (
                                        <li className='header__list__item' key={route.path}>
                                            <Link className='header__list__item__link' to={{pathname: route.path}}>
                                                {route.title}
                                            </Link>
                                        </li>
                                )
                            }
                            return null
                        })
                    }
                </ul>
            </header>
    );
};
