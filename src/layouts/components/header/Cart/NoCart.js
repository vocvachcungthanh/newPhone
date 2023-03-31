import React from 'react';

import { IconSvg } from '~/components/commons/icons';
import { IconNoCart } from '~/assets/images';

function NoCart() {
    return (
        <div className="flex justify-center items-center flex-col p-4">
            <div className="flex w-20 h-20 m-4">
                <IconSvg icon={IconNoCart} />
            </div>
            <p className="flex mt-3.5">Không có sản phẩm nào trong giỏ hàng của bạn</p>
        </div>
    );
}

export default NoCart;
