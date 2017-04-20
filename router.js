/**
 * 
 * */
var route = require('koa-route');
var _ = require('lodash');

module.exports = function(app) {

    var router = [
        ['/', './controller/index'],
        ['/index', './controller/index']
    ]


    router.map((item, index) => {
        app.use(route.get(item[0], require(item[1])));
    })

}