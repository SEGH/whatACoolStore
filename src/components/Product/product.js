export default function Product({ title, id, price, url}) {
    return(
        <div>
            <h2>{title}</h2>
            <h6>{price}</h6>
            <button className="snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                // data-item-url={`https://b57t0bjz.apicdn.sanity.io/v2021-03-25/data/query/production?query=*[_id==${id}]`}
                data-item-url={`https://what-a-cool-store.netlify.app/.netlify/functions/getProductData`}
                data-item-price={price}
            >Add to Cart</button>
        </div>
    )
}
