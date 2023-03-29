import React from 'react';
import { Link } from 'react-router-dom';

import CartDelete from './CartDelete';
import CartImage from './CartImage';
import CartTotal from './CartTotal';

function CartItem({ onCart, onDelete, dataItem }) {
    return (
        <div className="cart__product flex content-between mb-[15px] pb-[15px] border-b border-[#ebebeb]">
            <CartImage dataItem={dataItem} />
            <div className="cart__content pl-[15px] flex-1">
                <h3 className="cut__text text-[#323c42] mb-1 text-[13px] hover:text-[#ffb416]">
                    <Link to="#" title={dataItem.title}>
                        {dataItem.title}
                    </Link>
                </h3>

                <div className="flex justify-between">
                    <CartTotal dataItem={dataItem} onTotal={onCart} />

                    <div className="text-right">
                        <span className="flex text-[#eb3e32] font-bold text-sm ">{dataItem.price}</span>
                        <CartDelete dataItem={dataItem} onDelete={onDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
