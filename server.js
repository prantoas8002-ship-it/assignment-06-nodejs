const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("server created at 5000 successfully");

});

server.listen(5000, () => {
    console.log("server is running ... ");
})