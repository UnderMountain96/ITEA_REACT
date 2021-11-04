import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'

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
                    <li className='header__list__item'>
                        <Link className='header__list__item__link' to="/">
                            Home
                        </Link>
                    </li>
                    <li className='header__list__item'>
                        <Link className='header__list__item__link' to="/lesson/1">
                            Lesson 1
                        </Link>
                    </li>
                    <li className='header__list__item'>
                        <Link className='header__list__item__link' to="/lesson/2">
                            Lesson 2
                        </Link>
                    </li>
                    <li className='header__list__item'>
                        <Link className='header__list__item__link' to="/lesson/3">
                            Lesson 3
                        </Link>
                    </li>
                    <li className='header__list__item'>
                        <Link className='header__list__item__link' to="/lesson/4">
                            Lesson 4
                        </Link>
                    </li>
                </ul>
            </nav>
    );
};
