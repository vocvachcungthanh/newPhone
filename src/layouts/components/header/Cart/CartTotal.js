import React from 'react';

function CartTotal({ dataItem, onTotal }) {
    const handleChange = (e) => {
        const filledValue = e.target.value;

        if (isNaN(filledValue)) return;

        dataItem.total = Number(filledValue);

        return onTotal(dataItem);
    };

    const handleTotal = (dataItem, type) => {
        if (type === 'Add') {
            dataItem.total++;
        }

        if (type === 'remove' && dataItem.total > 0) {
            dataItem.total--;
        }

        return onTotal(dataItem);
    };

    return (
        <div className="total">
            <span className="text-xs flex mb-[5px] text-[#333]">Số lượng</span>

            <div className="flex items-center">
                <button
                    onClick={() => handleTotal(dataItem, 'remove')}
                    className="flex w-7 h-7 border border-[#e5e5e5] justify-center items-center"
                >
                    -
                </button>
                <input
                    name="total"
                    value={dataItem.total}
                    onChange={handleChange}
                    className="flex outline-none font-medium w-9 h-7 border-l-0 border-r-0 border border-[#e5e5e5] justify-center items-center text-center text-[#222] text-sm"
                />
                <button
                    onClick={() => handleTotal(dataItem, 'Add')}
                    className="flex w-7 h-7 border border-[#e5e5e5] justify-center items-center"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default CartTotal;
