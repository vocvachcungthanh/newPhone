import React from 'react';

import HeaderLogo from './HeaderLogo';
import Search from './Search';
import { HotLine } from './HotLine';
import { Account } from './Account';
import { HeaderFavoriteProduct } from './FavoriteProduct';
import { HeaderCart } from './Cart';
import { HeaderCompare } from './Compare';

function Header(props) {
    return (
        <header className="header py-2.5">
            <div className="phone-container">
                <div className="flex items-center pr-5">
                    <HeaderLogo />
                    <Search />
                    <HotLine />
                    <Account />
                    <HeaderFavoriteProduct />
                    <HeaderCart />
                    <HeaderCompare />
                </div>
            </div>
        </header>
    );
}

export default Header;
