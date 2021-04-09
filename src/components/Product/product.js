export default function Product({ title, id, price}) {
    return(
        <div>
            <h2>{title}</h2>
            <h6>{price}</h6>
            <button className="snipcart-add-item"
                data-item-id="shirt"
                data-item-name={title}
                data-item-url="/"
                data-item-price={price}
            >Add to Cart</button>
        </div>
    )
}