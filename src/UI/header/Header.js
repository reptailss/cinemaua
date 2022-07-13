import React from 'react';
import {Link, useLocation} from 'react-router-dom'

import {Container} from "react-bootstrap"

import './header.scss'

import Logo from '../../resources/icons/logo/Logo'
import SearchInput from "../../compontents/searchInput/SearchInput"


const Header = () => {

    const location = useLocation();
    const searchLocation = (location.pathname === '/search')
    const seachBlock = !searchLocation ? <SearchInput/> : null

const classSearch = searchLocation ? 'header__search searchPage' : 'header__search'

    return (
        <header className={'header'}>
            <Container>
                <div className='header__inner'>
                    <div className='header__logo'>
                        <Link to="/"
                              className={'header__logo-wrap'}>
                            <div className="header__logo">
                                <Logo className='logo'/>
                            </div>
                            <div className="header__title">
                                Cinema.ua
                            </div>
                        </Link>
                    </div>

                    <div className={'header__menu'}>
                        <Link to='/filters'
                              className={'header__menu-item'}>
                            Movies
                        </Link>
                        <div className={classSearch}>
                            {seachBlock}
                        </div>
                    </div>

                </div>

            </Container>
        </header>


    )

};

export default Header;