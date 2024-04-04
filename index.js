const { log } = require('console');
const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    let requestURL = url.parse(request.url, true);
    // response.write(requestURL.path); 
    // response.write(requestURL.host); 
    switch (requestURL.path) {
        case '/home':
            response.write('This is home page');
            break;
        case '/contact_us':
            response.write('This is contact page');
            break;
        case '/user':
            response.write('This is user page');
            break;
    };
    response.end();
}).listen(8000, ()=>{
    log('Server listening at 8000');
})

// server.listen(port, hostname, backlog, callback);