import React from 'react';

import { formatMoney } from '~/helpers/formatNumber';

function CartPrice({ price }) {
    return <span className="flex text-[#eb3e32] font-bold text-sm ">{formatMoney(price)}</span>;
}

export default React.memo(CartPrice);
