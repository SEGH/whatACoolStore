const fetch = require('node-fetch');

const API_ENDPOINT = `https://b57t0bjz.apicdn.sanity.io/v2021-03-25/data/query/production?query=*[_id=='53b27b6c-e1ee-44fc-bcc6-51e689354ebc']{'id':_id,price,url}&`;

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
        .then(response => response.json())
        .then(data => ({
            statusCode: 200,
            body: JSON.stringify({ 
                id: data.result[0].id,
                price: "money",
                url: "/"
            })
        }))

}