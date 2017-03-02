const Cleverbot = require('cleverbot-api-node');
const Clever = new Cleverbot('<your api key here>');

Clever.request('<your message request here>').then(function(response) {
    console.log(response.output);
}).catch(function(error) {
    console.error(error);
});