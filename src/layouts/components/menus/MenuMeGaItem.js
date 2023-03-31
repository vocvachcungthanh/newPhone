import React from 'react';
import { Link } from 'react-router-dom';

function MenuMeGaItem({ link, icon, title }) {
    return (
        <Link
            title={title}
            to={link}
            className="flex items-center py-[5.7px] px-2 hover:bg-[#ffb416] hover:text-white hover:shadow-[0px_1px_24.57px_2.43px rgba(0,0,0,0.12)]"
        >
            <div className="icon w-8 h-8 overflow-hidden rounded-full bg-[#E6E6E0]">
                <img className="flex object-cover" src={icon} alt="" />
            </div>

            <span className="flex leading-6 ml-2">{title}</span>
        </Link>
    );
}

export default MenuMeGaItem;
