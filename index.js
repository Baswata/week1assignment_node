console.log("Hello, Node.js");

const http = require('http');
const PORT = 3000;
const axios = require('axios');
const EventEmitter = require('events');
const handleRequest = require('./requestHandler'); 


const serveEmitter = new EventEmitter();

serveEmitter.on('requestReceived', (method, url) => {
    console.log(`Request received: ${method} ${url}`);
});


const server = http.createServer((req, res) => {
    serveEmitter.emit('requestReceived', req.method, req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

// Fetch data using async/await and handle errors
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            console.error(`Error: No response received from API`);
        } else {
            console.error('Error:', error.message);
        }
    }
}

fetchData();

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
