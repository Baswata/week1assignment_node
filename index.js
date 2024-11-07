console.log("Hello, Node.js");
const http = require('http');
const PORT = 3000;
const handleRequest = require('./requestHandler');
const axios = require('axios');

async function fetchData() {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);

    } catch( error) {
        console.error('Error fetching data', error);
    }
}

fetchData();

const server = http.createServer(handleRequest); 

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});