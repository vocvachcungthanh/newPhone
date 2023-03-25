import React from 'react';
import { Link } from 'react-router-dom';

import { IconSvg } from '~/components/commons/icons';
import { IconCompare } from '~/assets/images';

function HeaderCompare() {
    return (
        <div className="flex items-center ml-6">
            <Link to="/" className="icon relative w-6">
                <IconSvg icon={IconCompare} className="w-6" id="compare" content="So sánh sản phẩm" />
                <span className="total w-4 h-4 absolute inline-block text-center text-white bg-[#eb3e32] text-[10px]  -top-0 -right-4 rounded-full">
                    10
                </span>
            </Link>
        </div>
    );
}

export default HeaderCompare;
