import React from 'react';
import { Link } from 'react-router-dom';

import CartDelete from './CartDelete';
import CartTotal from './CartTotal';

function CartItem({ onDelete, onAdd, onRemove, title, linkImage, price, total, id }) {
    return (
        <div className="cart__product flex content-between mb-[15px] pb-[15px] border-b border-[#ebebeb]">
            <Link to="/" className="flex shrink-0 overflow-hidden w-1/4 car__image" title={title}>
                <img src={linkImage} alt={title} className="flex object-cover" />
            </Link>
            <div className="cart__content pl-[15px] flex-1">
                <h3 className="cut__text text-[#323c42] mb-1 text-[13px] hover:text-[#ffb416]">
                    <Link to="#" title={title}>
                        {title}
                    </Link>
                </h3>

                <div className="flex justify-between">
                    <CartTotal total={total} id={id} onAdd={onAdd} onRemove={onRemove} />

                    <div className="text-right">
                        <span className="flex text-[#eb3e32] font-bold text-sm ">{price}</span>
                        <CartDelete onDelete={onDelete} id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
