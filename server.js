const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = "./views/";
    console.log(req.url)
    switch (req.url){
        case '/':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            fetchFile(path);
            break;
        case '/index.html':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            fetchFile(path);
            break;
        case '/home':
            path += "index.html";
            console.log("found index");
            res.statusCode = 200;
            fetchFile(path);
            break;
        case '/about':
            console.log("about found");
            path += "about.html"
            console.log(path);
            res.statusCode = 200;
            fetchFile(path);
            break;
        case '/contact':
            console.log("contact found");
            path += "contact.html";
            console.log(path);
            res.statusCode = 200;
            fetchFile(path);
            break;
        case '/shop':
            console.log("shop found");
            path += "shop.html";
            console.log(path);
            res.statusCode = 200;
            fetchFile(path);
            break;
        default: // Can't get 404 page
            console.log("404 found");
            path += "404.html";
            res.statusCode = 404;
            fetchFile(path);
            break;
    }

    function fetchFile(path) {    
        fs.readFile(path, function(err, data) {
            if(err) {
                console.log(err);
                res.end();
            } else {
                console.log('file was served.')
                res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
                //res.write(data);
                res.end(data);
            }   
        });
    };
});



server.listen(3000, "localhost", () =>{
    console.log('Listening on port 3000');
});