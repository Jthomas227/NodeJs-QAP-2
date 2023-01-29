const http = require('http');
const fs = require('fs');
const url = require('url');

const { indexPage, aboutPage, contactPage, shopPage, fourOfourPage } = require('./events');

const server = http.createServer((req, res) => {
    let path = "./views/";
    console.log(req.url)
    switch (req.url){
        case '/':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            indexPage(path, res);
            break;
        case '/index.html':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            indexPage(path, res);
            break;
        case '/home':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            indexPage(path, res);
            break;
        case '/about':
            console.log("about found");
            path += "about.html"
            console.log(path);
            res.statusCode = 200;
            aboutPage(path, res);
            break;
        case '/contact':
            console.log("contact found");
            path += "contact.html";
            console.log(path);
            res.statusCode = 200;
            contactPage(path, res);
            break;
        case '/shop':
            console.log("shop found");
            path += "shop.html";
            console.log(path);
            res.statusCode = 200;
            shopPage(path, res);
            break;
        default: 
            console.log("404 found");
            path += "404.html";
            res.statusCode = 404;
            fourOfourPage(path, res);
            break;
    }
});



server.listen(3000, "localhost", () =>{
    console.log('Listening on port 3000');
});