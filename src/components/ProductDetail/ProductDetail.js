import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import sanityClient from '../../client';


export default function ProductDetail() {
    const [productData, setProductData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{...}`, { slug }
        )
        .then(data => {
            setProductData(data[0])
        })
        .catch(console.error)
    }, [slug]);

    if (!productData) return (<main id="productDetail">Loading...</main>)
    
    return (
        <main id="productDetail">
            <section>
                <Link to={"/"}>All Products</Link>
            </section>
            {productData.title}
        </main>
    )
}