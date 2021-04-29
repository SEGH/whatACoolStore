export default function PriceBox({ variants, id, title, price, variantType, selectedVariant, handleSelect}) {
    const variantOptions = variants && variants.map(variant => `${variant.title}[+${variant.price - price}]`).join("|")
    return (
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
    )
}