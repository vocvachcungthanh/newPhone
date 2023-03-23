import React from 'react';
import HeaderLogo from './HeaderLogo';
import Search from './search';

function Header(props) {
    return (
        <header className="header py-2.5">
            <div className="max-w-[1230px] w-full m-auto">
                <div className="flex items-center">
                    <HeaderLogo />

                    <Search />
                </div>
            </div>
        </header>
    );
}

export default Header;
