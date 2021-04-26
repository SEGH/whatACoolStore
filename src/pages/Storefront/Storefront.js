import React, { useState, useEffect } from 'react';
import './Storefront.css';
import { Row, Col } from 'react-materialize';
import sanityClient from '../../client';
import ProductSummary from '../../components/ProductSummary/ProductSummary';

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
                <Row>
                    {products && products.map(product => {
                        return <Col key={product._id}><ProductSummary title={product.title} id={product._id} price={product.price} slug={product.slug.current} variants={product.variants} variantType={product.variant_type} /></Col>
                    })}
                </Row>
            </section>

        </main>
    );
}
