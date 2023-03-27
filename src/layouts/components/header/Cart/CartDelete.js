import React from 'react';

function CartDelete({ onDelete, id }) {
    return (
        <button className="text-[#30656b] text-[13px]" onClick={() => onDelete(id)}>
            Xóa
        </button>
    );
}

export default CartDelete;
