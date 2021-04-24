import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';

export default function Product({ title, id, price, slug, variants }) {
    const [selectedPrice, setSelectedPrice] = useState(price)

    return (
        <Card header={<Link to={`/${slug}`} className="productLink"><CardTitle image="https://via.placeholder.com/150"></CardTitle></Link>}>
            <h5>{title}</h5>
            <h6>${selectedPrice}</h6>
            {variants.length > 0 && variants.map(variant => <p onClick={() => setSelectedPrice(variant.price)}>{variant.title}</p>)}
            <button className="snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                data-item-url={`https://what-a-cool-store.netlify.app/.netlify/functions/getProductData`}
                data-item-price={price}
                data-item-custom1-name="Size"
                data-item-custom1-options={variants.map(variant => `${variant.title}[+${variant.price - price}]|`)}
            >Add to Cart</button>
        </Card>
    )
}
