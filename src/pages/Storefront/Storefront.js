import React, { useState, useEffect } from 'react';
import './Storefront.css';
import sanityClient from '../../client';
import Product from '../../components/Product/Product';

export default function Storefront() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'product']{...}`
        ).then(data => {
            setProducts(data)
        })
    }, []);

    console.log(products);
    return (
        <main id="storefrontPage">
            <section id="productContainer">
                {products && products.map(product => {
                    return <Product key={product._id} title={product.title} id={product._id} price={product.price} />
                })}
            </section>

        </main>
    );
}
