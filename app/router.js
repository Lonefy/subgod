/**
 * 
 * */
var route = require('koa-route');
var _ = require('lodash');

module.exports = function(app) {

    var router = [
        ['/', './controller/index'],
        ['/index', './controller/index'],
        ['/mgt', './controller/mgt'],

        ['/aj/demo','./ajax/demo']
    ]


    router.map((item, index) => {
        app.use(route.get(item[0], require(item[1])));
    })

}