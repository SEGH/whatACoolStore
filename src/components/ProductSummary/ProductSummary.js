import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';

export default function Product({ title, id, price, slug, variants, variantType }) {
    const [selectedVariant, setSelectedVariant] = useState(variants[0])
    const variantOptions = variants.map(variant => `${variant.title}[+${variant.price - price}]`).join("|")

    const handleSelect = (event) => {
        // console.log(event.target.value)
        const selected = variants.filter(variant => variant.title === event.target.value)
        setSelectedVariant(selected[0])
    }

    return (
        <Card header={<Link to={`/${slug}`} className="productLink"><CardTitle image="https://via.placeholder.com/150"></CardTitle></Link>}>

            <h5>{title}</h5>
            <div className={variants.length == 0 && "invisible"}>
                <label htmlFor="variants">{variantType}:</label>
                <select className="browser-default" name="variants" onChange={(event) => handleSelect(event)}>
                    {variants.length > 0 && variants.map(variant => <option value={variant.title} key={variant._key}>{variant.title}</option>)}
                </select>
            </div>
            <h6>${selectedVariant ? selectedVariant.price : price}</h6>
            <button className="snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                data-item-url={`https://what-a-cool-store.netlify.app/.netlify/functions/getProductData`}
                data-item-price={price}
                data-item-custom1-name="Size"
                data-item-custom1-options={variantOptions}
                data-item-custom1-value={selectedVariant && selectedVariant.title}
            >Add to Cart</button>

        </Card>
    )
}
