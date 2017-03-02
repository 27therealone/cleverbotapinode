# cleverbotapinode
Async JavaScript wrapper for the Cleverbot API with promises. 

## Example:
```javascript
const Cleverbot = require('cleverbot-api-node');
const Clever = new Cleverbot('<your api key here>');

Clever.request('<your message request here>').then(function(response) {
  console.log(message.output);
 }).catch(function(error) {
  console.error(error);
});
```

## Installation
```
npm i cleverbot-api-node --save
```

