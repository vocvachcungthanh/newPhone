import React from 'react';

function CartFooter({ dataItem }) {
    const [total, setTotal] = React.useState(0);

    return (
        <div className="p-2.5">
            <div className="flex justify-between">
                <span className="flex text-[15px]">Tổng tiền:</span>

                <span className="text-[#EB3E33] font-bold">{total}</span>
            </div>

            <button className="flex w-full justify-center items-center text-white leading-10 mt-8 rounded  overflow-hidden  bg-[#eb3e32] py-3 hover:bg-[#ffb416] transition-colors:background-color transition-duration: 150ms">
                Thanh toán
            </button>
        </div>
    );
}

export default CartFooter;
