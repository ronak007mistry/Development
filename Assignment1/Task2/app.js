const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        console.log('Ronak Mistry..')
    }

});

server.listen(4000);
