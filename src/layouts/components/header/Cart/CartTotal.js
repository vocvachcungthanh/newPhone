import React from 'react';

function CartTotal({ total, id, onAdd, onRemove }) {
    return (
        <div className="total">
            <span className="text-xs flex mb-[5px] text-[#333]">Số lượng</span>

            <div className="flex items-center">
                <button
                    onClick={() => onRemove(id)}
                    className="flex w-7 h-7 border border-[#e5e5e5] justify-center items-center"
                >
                    -
                </button>
                <input
                    value={total}
                    type="text"
                    className="flex outline-none font-medium w-9 h-7 border-l-0 border-r-0 border border-[#e5e5e5] justify-center items-center text-center text-[#222] text-sm"
                />
                <button
                    onClick={() => onAdd(id)}
                    className="flex w-7 h-7 border border-[#e5e5e5] justify-center items-center"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default CartTotal;
