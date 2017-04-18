/**
 * 应用入口
 * @author finrila
 */
require('./config/main');

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

//静态文件
var koa = require('koa');
var app = koa();

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
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function*() {
    this.body = 'Hello World';
});


app.use(views(__dirname + '/views', {
    default: 'jade',
    extension: 'jade'
}));

// static file serve
app.use(serve(__dirname + '/public'), { defer: true });

app.listen(3000);
console.log('listening 3000');