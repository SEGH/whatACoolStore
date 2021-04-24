import React from 'react';
import { useParams, Link } from 'react-router-dom';


export default function ProductDetail() {
    const { slug } = useParams();
    return (
        <main id="productDetail">
            <section>
                <Link to={"/"}>All Products</Link>
            </section>
            {slug}
        </main>
    )
}