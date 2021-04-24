import { Link } from 'react-router-dom';

export default function Product({ title, id, price, slug }) {
    return (
        <Link to={`/${slug}`} className="productLink">
            <h2>{title}</h2>
            <h6>{price}</h6>
            <button className="snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                data-item-url={`https://what-a-cool-store.netlify.app/.netlify/functions/getProductData`}
                data-item-price={price}
            >Add to Cart</button>
        </Link>
    )
}
