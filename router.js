/**
 * 
 * */
var route = require('koa-route');

module.exports = function(app) {
    console.log('router')
    app.use(route.get('/index', require('./controller/index')));
}