// require('./config/main');

var path = require('path');
var http = require('http');
var koa = require('koa');
var gzip = require('koa-gzip');
var views = require('koa-views');
var logger = require('koa-logger');
var route = require('koa-route');
var queryString = require('koa-qs');
var json = require('koa-json');
var session = require('koa-session');
var staticCache = require('koa-static-cache');
var koaBody = require('koa-body');
var userAgent = require('koa-useragent');
var serve = require('koa-static');

//静态文件
var koa = require('koa');
var app = new koa();

var router = require('./app/router');

var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);



/////////////////////


// x-response-time
app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log(this.request)
    // console.log('%s %s - %s', this.method, this.url, ms);
});


// response
// app.use(function*() {
//     this.body = 'Hello World';
// });


app.use(views(__dirname + '/app/views', {
    default: 'jade',
    extension: 'jade'
}));

router(app);
app.use(serve(__dirname + '/app/public'), { defer: true });



// static file serve
// app.use(serve(__dirname + '/public'), { defer: true });
io.on('connection', function (socket) {
    console.log('a user connected');
    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
});

server.listen(3000);
console.log('listening 3000');