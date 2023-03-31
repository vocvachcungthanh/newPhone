import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as WrapperMenuMeGa } from '~/components/commons/Popper';
import MenuBoxMeGa from './MenuBoxMeGa';

const initStart = [
    {
        id: 1,
        title: 'Điện thoại - Máy tính bảng',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon1.png',
    },

    {
        id: 2,
        title: 'Phụ kiện - Thiết bị số',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon2.png',
    },

    {
        id: 3,
        title: 'Máy ảnh - Quay phim',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon3.png',
    },

    {
        id: 4,
        title: 'Điện gia dụng - Nhà bếp',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon4s.png',
    },
    {
        id: 5,
        title: 'Laptop - Thiết bị IT',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon5.png',
    },
    {
        id: 6,
        title: 'Máy chơi game - Trò chơi',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon6.png',
    },
    {
        id: 7,
        title: 'Trang sức - Sành điệu',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon7.png',
    },
    {
        id: 8,
        title: 'Thời trang - Làm đẹp',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon8.png',
    },
    {
        id: 9,
        title: 'Nhà cửa đời sống',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon9s.png',
    },
    {
        id: 10,
        title: 'Sách - Tiểu thuyết',
        link: '/',
        icon: 'https://bizweb.dktcdn.net/thumb/icon/100/429/689/collections/icon10.png',
    },
];

function MenuMeGa() {
    const [menusMeGa] = React.useState(initStart);

    const [isVisible, setVisible] = React.useState(false);

    return (
        <Tippy
            interactive
            placement="bottom"
            visible={isVisible && menusMeGa.length > 0}
            appendTo={() => document.body}
            render={(attrs) => (
                <div className={`menu__box ${isVisible ? 'showTippy' : 'outTippy'}`} tabIndex="-1" {...attrs}>
                    <WrapperMenuMeGa className="flex -mt-2.5">
                        <MenuBoxMeGa menus={menusMeGa} />
                    </WrapperMenuMeGa>
                </div>
            )}
            onClickOutside={() => setVisible(false)}
        >
            <div className="menu__mega w-[280px] relative" onMouseMove={() => setVisible(true)}>
                <h3 className="menu__title font-bold pl-[25px] text-white relative leading-[42px] cursor-pointer">
                    Danh mục sản phẩm
                </h3>
            </div>
        </Tippy>
    );
}

export default MenuMeGa;
