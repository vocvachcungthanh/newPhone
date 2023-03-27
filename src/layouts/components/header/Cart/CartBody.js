/* eslint-disable array-callback-return */
import React from 'react';
import CartItem from './CartItem';

function CartBody() {
    const [carts, setCarts] = React.useState([
        {
            id: 1,
            image: 'https://bizweb.dktcdn.net/thumb/compact/100/429/689/products/may-xay-an-dam-3-coi-bear-llj-c04j1-gr-b03v1-12062021.png',
            title: 'Máy xay ăn dặm 3 cối Bear LLJ-C04J1 (GR-B03V1)',
            price: '1190000',
            total: 1,
        },

        {
            id: 2,
            image: 'https://bizweb.dktcdn.net/thumb/compact/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg',
            title: 'Samsung Galaxy Note 21',
            price: '29000000',
            total: 3,
        },

        {
            id: 3,
            image: 'https://bizweb.dktcdn.net/thumb/compact/100/429/689/products/may-xay-an-dam-03l-bear-qsj-a01f2-gr-b03v2-12062021.png',
            title: 'Máy xay ăn dặm 0.3L Bear QSJ-A01F2 (GR-B03V2)',
            price: '890000',
            total: 3,
        },
    ]);

    const handleCartDelete = (id) => setCarts((prev) => prev.filter((item) => item.id !== id));

    const handleCartAdd = (id) => {
        setCarts((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        total: 5,
                    };
                }
            });
        });
    };

    const handleCarRemove = (id) => {
        console.log(id);
    };

    return (
        <div className="block max-w-[340px] min-w-[340px]">
            <div className="p-[15px] max-h-96 overflow-x-hidden overflow-y-auto">
                {carts.map((cart) => (
                    <CartItem
                        key={cart.id}
                        linkImage={cart.image}
                        title={cart.title}
                        price={cart.price}
                        total={cart.total}
                        id={cart.id}
                        onDelete={handleCartDelete}
                        onAdd={handleCartAdd}
                        onRemove={handleCarRemove}
                    />
                ))}
            </div>
        </div>
    );
}

export default CartBody;
