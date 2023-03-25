import React from 'react';
import { Link } from 'react-router-dom';

import { IconSvg } from '~/components/commons/icons';
import { IconHeart } from '~/assets/images';

function HeaderFavoriteProduct() {
    return (
        <div className="ml-auto flex items-center">
            <Link to="/" className="icon relative w-6">
                <IconSvg icon={IconHeart} className="w-6" id="Favorite-product" content="sản phẩm yêu thích" />
                <span className="total w-4 h-4 absolute inline-block text-center text-white bg-[#eb3e32] text-[10px]  -top-0 -right-4 rounded-full">
                    10
                </span>
            </Link>
        </div>
    );
}

export default HeaderFavoriteProduct;
