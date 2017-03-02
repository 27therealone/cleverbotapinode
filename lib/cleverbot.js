const request = require('request');
module.exports = class Cleverbot {
    constructor(apiKey) {
        this.apiKey = apiKey || 'CHANGE ME';
    }

    request(message) {
        return new Promise((resolve, reject)=> {
            if(!JSON.stringify(message)) return reject(new TypeError('No input to send to API'));
            request(`http://www.cleverbot.com/getreply?key=${this.apiKey}&input=${JSON.stringify(message)}`, (error, response, body) => {
                if(!error) {
                    return resolve(JSON.parse(body));
                } else {
                    return reject(error);
                }
            })
        })
    }
};
