import React from 'react';

function CartDelete({ dataItem, onDelete }) {
    return (
        <button className="text-[#30656b] text-[13px]" onClick={() => onDelete(dataItem.id)}>
            Xóa
        </button>
    );
}

export default CartDelete;
