/* eslint-disable array-callback-return */
import React from 'react';
import CartItem from './CartItem';

function CartBody({ dataItem, onCart }) {
    const [carts, setCarts] = React.useState(dataItem || []);

    const handleDelete = (id) => setCarts((cart) => cart.filter((item) => item.id !== id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleCart = (dataItem) => {
        if (dataItem.total === 0) return handleDelete(dataItem.id);

        carts.map((cart) => {
            if (cart.id === dataItem.id) cart = dataItem;
        });

        setCarts((cart) => [...cart]);
    };

    React.useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        onCart(carts);
    }, [carts, onCart]);

    const renderCart = React.useMemo(() => {
        return (
            <div className="block max-w-[340px] min-w-[340px]">
                <div className="p-[15px] max-h-96 overflow-x-hidden overflow-y-auto">
                    {carts.map((cart) => (
                        <CartItem key={cart.id} dataItem={cart} onDelete={handleDelete} onCart={handleCart} />
                    ))}
                </div>
            </div>
        );
    }, [carts, handleCart]);

    return renderCart;
}

export default CartBody;
