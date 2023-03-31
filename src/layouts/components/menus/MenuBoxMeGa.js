import React from 'react';

import MenuMeGaItem from './MenuMeGaItem';

function MenuBoxMeGa({ menus }) {
    return (
        <div className="w-[280px]">
            {menus.map((menu) => (
                <MenuMeGaItem key={menu.id} title={menu.title} icon={menu.icon} link={menu.link} />
            ))}
        </div>
    );
}

export default MenuBoxMeGa;
