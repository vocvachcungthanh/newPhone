import React from 'react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/commons/Popper';
import { IconSvg } from '~/components/commons/icons';
import { IconCart } from '~/assets/images';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import NoCart from './NoCart';

const initStart = [
    {
        id: 1,
        image: 'https://bizweb.dktcdn.net/thumb/compact/100/429/689/products/may-xay-an-dam-3-coi-bear-llj-c04j1-gr-b03v1-12062021.png',
        title: 'Máy xay ăn dặm 3 cối Bear LLJ-C04J1 (GR-B03V1)',
        price: 1190000,
        total: 1,
    },

    {
        id: 2,
        image: 'https://bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg',
        title: 'Samsung Galaxy Note 21',
        price: 29000000,
        total: 3,
    },

    {
        id: 3,
        image: 'https://bizweb.dktcdn.net/thumb/compact/100/429/689/products/may-xay-an-dam-03l-bear-qsj-a01f2-gr-b03v2-12062021.png',
        title: 'Máy xay ăn dặm 0.3L Bear QSJ-A01F2 (GR-B03V2)',
        price: 890000,
        total: 3,
    },
];

function HeaderCart() {
    const [carts, setCarts] = React.useState(initStart || []);

    const [visible, setVisible] = React.useState(false);

    const handleCart = (dataItem) => {
        setCarts(dataItem);
    };

    return (
        <HeadlessTippy
            interactive
            placement="bottom"
            visible={visible}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <PopperWrapper className={`max-w-[340px] w-[340px] ${visible ? 'showTippy' : ''}`}>
                        {carts.length > 0 ? (
                            <React.Fragment>
                                <CartBody dataItem={carts} onCart={handleCart} />
                                <CartFooter dataItem={carts || []} />
                            </React.Fragment>
                        ) : (
                            <NoCart />
                        )}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setVisible(false)}
        >
            <div className="flex items-center ml-6" onMouseMove={() => setVisible(true)}>
                <Link to="/" className="icon relative w-6">
                    <IconSvg icon={IconCart} className="w-6" id="cart" content="Giỏ hàng" />
                    <span className="total w-4 h-4 absolute inline-block text-center text-white bg-[#eb3e32] text-[10px]  -top-0 -right-4 rounded-full">
                        {carts.length}
                    </span>
                </Link>
            </div>
        </HeadlessTippy>
    );
}

export default HeaderCart;
