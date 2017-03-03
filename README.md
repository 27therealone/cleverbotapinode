# cleverbot-api-node
Async JavaScript wrapper for the Cleverbot API based off ES6 promises. 

## Example:
```javascript
const Cleverbot = require('cleverbot-api-node');
const Clever = new Cleverbot('<your api key here>');

Clever.request('<your message request here>').then(function(response) {
  console.log(response.output);
 }).catch(function(error) {
  console.error(error);
});
```

## Installation
```
npm i cleverbot-api-node --save
```

API key can be found at <http://www.cleverbot.com/api>

