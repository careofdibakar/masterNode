const { log } = require('console');
const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Server Created');
})

module.exports = server;