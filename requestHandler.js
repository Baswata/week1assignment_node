function handleRequest(req,res) {
    res.Writehead(200, {'Content-Type': 'text/plain'});
    res.end ('Hello World');
}

module.exports = handleRequest;