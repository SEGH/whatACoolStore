import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';
import sanityClient from '../../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function Product({ title, id, price, slug, variants, variantType, mainImage }) {
    const [selectedVariant, setSelectedVariant] = useState(variants ? variants[0] : null)
    const variantOptions = variants && variants.map(variant => `${variant.title}[+${variant.price - price}]`).join("|")

    const handleSelect = (event) => {
        // console.log(event.target.value)
        const selected = variants.filter(variant => variant.title === event.target.value)
        setSelectedVariant(selected[0])
    }

    return (
        <Card header={<Link to={`/${slug}`} className="productLink"><CardTitle image={selectedVariant && selectedVariant.images[0] ? urlFor(selectedVariant.images[0]).size(300, 300).url() : urlFor(mainImage).size(300, 300).url()}></CardTitle></Link>}>

            <h5>{title}</h5>
            <div className="priceBox">
                <div className={!variants ? "invisible" : variants && variants.length === 0 ? "invisible" : ""}>
                    <label htmlFor="variants">{variantType}:</label>
                    <select className="browser-default" name="variants" onChange={(event) => handleSelect(event)}>
                        {variants && variants.length > 0 && variants.map(variant => <option value={variant.title} key={variant._key}>{variant.title}</option>)}
                    </select>
                </div>
                <h6>${selectedVariant ? selectedVariant.price : price}</h6>
                <button className="snipcart-add-item"
                    data-item-id={id}
                    data-item-name={title}
                    data-item-url={`https://what-a-cool-store.netlify.app/.netlify/functions/getProductData`}
                    data-item-price={price}
                    data-item-custom1-name={variants && variants.length > 0 ? variantType : null}
                    data-item-custom1-options={variants && variants.length > 0 ? variantOptions : null}
                    data-item-custom1-value={selectedVariant && selectedVariant.title}
                >Add to Cart</button>
            </div>


        </Card>
    )
}
