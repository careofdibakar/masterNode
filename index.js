const server = require('./httpModule/httpServer');
const { log } = require('console');

server.listen(8000, ()=>{
    log('Server listening at 8000');
})