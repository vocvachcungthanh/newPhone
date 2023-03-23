import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLogo(props) {
    return (
        <div className="header__logo">
            <Link to="/" className="logo__link flex items-center h-[60px]" title="poco mart">
                <img src="./logo.png" alt="logo" />
            </Link>
        </div>
    );
}

export default HeaderLogo;
