const http = require('http');
const fs = require('fs');
const lg = require('./evt');

const server = http.createServer((req, res) => {
    let path = "./views/";
    console.log(req.url)
    switch (req.url){
        case '/':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            lg.indexPage(path, res);
            break;
        case '/home':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            lg.indexPage(path, res);
            break;
        case '/about':
            console.log("about found");
            path += "about.html"
            console.log(path);
            res.statusCode = 200;
            lg.aboutPage(path, res);
            break;
        case '/contact':
            console.log("contact found");
            path += "contact.html";
            console.log(path);
            res.statusCode = 200;
            lg.contactPage(path, res);
            break;
        case '/shop':
            console.log("shop found");
            path += "shop.html";
            console.log(path);
            res.statusCode = 200;
            lg.shopPage(path, res);
            break;
        default: // Can't get 404 page
            console.log("404 found");
            path += "404.html";
            res.statusCode = 404;
            lg.fourOFourPage(path, res);
            break;
    }
});

server.listen(3000, "localhost", () =>{
    console.log('Listening on port 3000');
});