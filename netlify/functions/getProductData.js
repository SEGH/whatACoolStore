const fetch = require('node-fetch');

const API_ENDPOINT = `https://b57t0bjz.apicdn.sanity.io/v2021-03-25/data/query/production?query=*[_type=='product']{'id':_id,price,url}&`;

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
        .then(response => response.json())
        .then(data => {
            const productData = data.result.forEach(product => JSON.stringify({ id: product.id, price: product.price, url: API_ENDPOINT }));

            return {
                statusCode: 200,
                body: {productData}
            }
        })

}