import React, { useState, useEffect } from 'react';
import sanityClient from './client';
// import Product from './components/Product/product';

function App() {
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
    <div>
      <h1>My Cool Store</h1>
      {/* {products && products.map(product => {
        return <Product title={product.title} id={product._id} price={product.variants[0].price} />
      })} */}
      {/* {products && <Product title={products[0].title} id={products[0]._id} price={products[0].variants[0].price} />}
    </div> */}
    <button className="snipcart-add-item"
      data-item-id="1"
      data-item-name="Surprise"
      data-item-price="100.00"
      data-item-url="/"
    >
      BUY
    </button>

  </div>
  );
}

export default App;
