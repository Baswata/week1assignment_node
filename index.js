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
        if (error.response) {
            console.error(`Error: ${error.response.ststus} - ${error.response.statusText}`);

        }else if (error.request) {
            console.error(`Error: No response received from API`);
        } else {
            console.error('Error:', error.message);
        }
    }
}

fetchData();

const server = http.createServer(handleRequest); 

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});