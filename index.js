const { log } = require('console');
const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Server Created');
}).listen(8000, ()=>{
    log('Server listening at 8000');
})

// server.listen(port, hostname, backlog, callback);