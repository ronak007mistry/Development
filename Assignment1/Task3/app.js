const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const header = req.header;
    console.log(url);
    console.log(method);
    console.log(header);
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><h1>Home Page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><h1>Welcome to my Node Js project	</h1></body>');
        res.write('</html>');
        return res.end();
    }

});

server.listen(3000);
