const fetch = require('node-fetch');

const API_ENDPOINT = `https://b57t0bjz.apicdn.sanity.io/v2021-03-25/data/query/production?query=*[_type=='product']{'id':_id,price,url}&`;

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
        .then(response => response.json())
        .then(data => ({
            statusCode: 200,
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data.result.map(product => (
                {
                    id: product.id,
                    price: product.price,
                    url: API_ENDPOINT
                }
            )))
        }))

}