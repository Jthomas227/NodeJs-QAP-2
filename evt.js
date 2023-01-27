const fs = require('fs');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('route', (route, level, msg) =>{
    const d = new Date();
    if (level === 'error'){
        console.log(d.localeString() + ' * ' + level.toUpperCase() + ' * ' + 'the ' + route + ' ' + msg);
    } else {
        console.log(d.toLocaleString() + ' * ' + level.toUpperCase() +' * ' + route + '.html ' + msg)
    }
});

function indexPage(path, res) {
    myEmitter.emit('route', 'index', 'info', 'home/root page was visited.');
    displayFile(path, res);
}

function shopPage(path, res) {
    myEmitter.emit('route', 'index', 'info', 'home/root page was visited.');
    displayFile(path, res);
}

function aboutPage(path, res) {
    myEmitter.emit('route', 'index', 'info', 'home/root page was visited.');
    displayFile(path, res);
}

function contactPage(path, res) {
    myEmitter.emit('route', 'index', 'info', 'home/root page was visited.');
    displayFile(path, res);
}

function fourOFourPage(path, res) {
    myEmitter.emit('route', 'index', 'info', 'home/root page was visited.');
    displayFile(path, res);
}
function displayFile(path, res) {
    fs.readFile(path, function(err, data) {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
            res.end(data);
        };   
    });
};

module.exports = {
    indexPage,
    shopPage,
    contactPage,
    aboutPage,
    fourOFourPage,
}