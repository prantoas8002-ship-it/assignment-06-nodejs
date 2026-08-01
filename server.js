const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let url = req.url;

    if (url === '/') {
        fs.readFile("home.html", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-type": "text/html" });
                res.end("<h1>An error occured</h1>")
            }
            else {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
            }
        })
    }
    else if (url === '/about') {
        fs.readFile("about.html", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-type": "text/html" });
                res.end("<h1>An error occured</h1>")
            }
            else {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
            }
        })
    }
    else if (url === '/contact') {
        fs.readFile("contact.html", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-type": "text/html" });
                res.end("<h1>An error occured</h1>")
            }
            else {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(data);
            }
        })
    }
    


});

server.listen(5000, () => {
    console.log("server is running ... ");
})