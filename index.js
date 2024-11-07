console.log("Hello, Node.js");
const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!')
});

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})