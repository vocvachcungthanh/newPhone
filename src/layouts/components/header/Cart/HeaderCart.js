import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/commons/Popper';
import { IconSvg } from '~/components/commons/icons';
import { IconCart } from '~/assets/images';

function HeaderCart() {
    return (
        <Tippy
            interactive
            animation="scale"
            placement="bottom"
            render={(attrs) => (
                <PopperWrapper tabIndex="-1" className="max-w-[340px] w-[340px]" {...attrs}>
                    <div>sdfasdf</div>
                </PopperWrapper>
            )}
        >
            <div className="flex items-center ml-6">
                <Link to="/" className="icon relative w-6">
                    <IconSvg icon={IconCart} className="w-6" id="cart" content="Giỏ hàng" />
                    <span className="total w-4 h-4 absolute inline-block text-center text-white bg-[#eb3e32] text-[10px]  -top-0 -right-4 rounded-full">
                        10
                    </span>
                </Link>
            </div>
        </Tippy>
    );
}

export default HeaderCart;
