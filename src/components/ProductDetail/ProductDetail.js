import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';
import PriceBox from '../PriceBox/PriceBox';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function ProductDetail() {
    const [productData, setProductData] = useState(null);
    const { slug } = useParams();
    const [selectedVariant, setSelectedVariant] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{...}`, { slug }
        )
            .then(data => {
                setProductData(data[0])

                if (data[0].variants) {
                    setSelectedVariant(data[0].variants[0])
                }

            })
            .catch(console.error)
    }, [slug]);

    const handleSelect = (event) => {
        const selected = productData.variants.filter(variant => variant.title === event.target.value)
        setSelectedVariant(selected[0])
    }

    if (!productData) return (<main id="productDetail">Loading...</main>)
    // console.log(productData)

    return (
        <main id="productDetail">
            <section>
                <Link to={"/"}>All Products</Link>
                <Card header={<CardTitle image={selectedVariant && selectedVariant.images[0] ? urlFor(selectedVariant.images[0]).size(500, 500).url() : urlFor(productData.images[0]).size(500, 500).url()} />} horizontal>
                    <div>
                        <h5>{productData.title}</h5>
                        <BlockContent blocks={productData.body.en} />
                    </div>
                    <PriceBox variants={productData.variants} id={productData._id} title={productData.title} price={productData.price} variantType={productData.variant_type} selectedVariant={selectedVariant} handleSelect={handleSelect} />
                </Card>
            </section>
        </main>
    )
}