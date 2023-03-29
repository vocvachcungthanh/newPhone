import React from 'react';
import { Link } from 'react-router-dom';

function CartImage({ dataItem }) {
    return (
        <Link to="/" className="flex shrink-0 overflow-hidden w-1/4 car__image" title={dataItem.title}>
            <img src={dataItem.image} alt={dataItem.title} className="flex object-cover" />
        </Link>
    );
}

export default React.memo(CartImage);
