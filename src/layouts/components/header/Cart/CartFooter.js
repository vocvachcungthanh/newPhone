import React from 'react';
import { formatMoney } from '~/helpers/formatNumber';

function CartFooter({ dataItem }) {
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        let totalCart = 0;

        dataItem.forEach((item) => {
            totalCart += item.price * item.total;
        });

        setTotal(totalCart);
    }, [dataItem]);

    return (
        <div className="p-2.5">
            <div className="flex justify-between">
                <span className="flex text-[15px]">Tổng tiền:</span>

                <span className="text-[#EB3E33] font-bold">{formatMoney(total)}</span>
            </div>

            <button className="flex w-full justify-center items-center text-white leading-10 mt-8 rounded  overflow-hidden  bg-[#eb3e32] py-3 hover:bg-[#ffb416] transition-colors:background-color transition-duration: 150ms">
                Thanh toán
            </button>
        </div>
    );
}

export default CartFooter;
