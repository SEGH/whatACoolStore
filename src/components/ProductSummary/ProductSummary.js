import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';

export default function Product({ title, id, price, slug }) {
    return (
        <Card header={<Link to={`/${slug}`} className="productLink"><CardTitle image="https://via.placeholder.com/150"></CardTitle></Link>}>
            <h5>{title}</h5>
            <h6>{price}</h6>
            <button className="snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                data-item-url={`https://what-a-cool-store.netlify.app/.netlify/functions/getProductData`}
                data-item-price={price}
            >Add to Cart</button>
        </Card>
    )
}
