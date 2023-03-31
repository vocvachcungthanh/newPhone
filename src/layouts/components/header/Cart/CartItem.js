import React from 'react';

import CartDelete from './CartDelete';
import CartImage from './CartImage';
import CartPrice from './CartPrice';
import CartTitle from './CartTitle';
import CartTotal from './CartTotal';

function CartItem({ onCart, onDelete, dataItem }) {
    return (
        <div className="cart__product flex content-between mb-[15px] pb-[15px] border-b border-[#ebebeb]">
            <CartImage dataItem={dataItem} />
            <div className="cart__content pl-[15px] flex-1">
                <CartTitle title={dataItem.title} />
                <div className="flex justify-between">
                    <CartTotal dataItem={dataItem} onTotal={onCart} />

                    <div className="text-right">
                        <CartPrice price={dataItem.price} />
                        <CartDelete dataItem={dataItem} onDelete={onDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
