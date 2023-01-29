const EventEmitter = require('events');
const fs = require('fs');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('route', (route, level, msg) => { 
    const d = new Date();
    if(level === 'error')
        console.log(d.toLocaleString() + ' * ' + level.toUpperCase() + ' * the ' + route + ' ' + msg)
    else
        console.log(d.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + route + '.html, ' + msg)
});

function indexPage(path, res) {
    myEmitter.emit('route', 'index', 'info', 'the home or root page for the site was visited.' )
    displayFile(path, res);
}

function aboutPage(path, res) {
    myEmitter.emit('route', 'about', 'info', 'the about page was visited.' )
    displayFile(path, res);
}

function contactPage(path, res) {
    myEmitter.emit('route', 'contact', 'info', 'the contact page was visited.' )
    displayFile(path, res);
}

function shopPage(path, res) {
    myEmitter.emit('route', 'shop', 'info', 'the shop page was visited.' )
    displayFile(path, res);
}

function fourOfourPage(path, res) {
    myEmitter.emit('route', 'error', 'searched route was not found' )
    displayFile(path, res);
}
function displayFile(path, res) {
    fs.readFile(path, function(err, data) {
        if(err) {
            console.log(err);
            response.end();
        } else {
            res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
            res.end(data);
        };   
    });
};

module.exports = {
    displayFile,
    indexPage,
    aboutPage,
    contactPage,
    shopPage,
    fourOfourPage,
}