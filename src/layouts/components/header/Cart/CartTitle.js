import React from 'react';
import { Link } from 'react-router-dom';

const CartTitle = ({ title }) => {
    return (
        <h3 className="cut__text text-[#323c42] mb-1 text-[13px] hover:text-[#ffb416]">
            <Link to="#" title={title}>
                {title}
            </Link>
        </h3>
    );
};

export default React.memo(CartTitle);
