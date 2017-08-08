/**
 * Module dependencies.
 */

var log4js = require('log4js');

module.exports = dev;

/**
 * Development logger.
 */
// {  
//     "appenders": [{  
//         "type": "console"  
//     }, {  
//         "type": "dateFile",  
//         "filename": "./log/stats",  
//         "pattern": ".dd.log",  
//         "alwaysIncludePattern": true,  
//         "category": "stats",  
//         "level" : "INFO"  
//     }, {  
//         "type": "file",  
//         "filename": "./log/app.log",  
//         "maxLogSize": 2048000,  
//         "numBackups": 10,  
//         "level" : "DEBUG"  
//     }, {  
//         "type": "logLevelFilter",  
//         "level": "WARN",  
//         "appender": {  
//             "type": "dateFile",  
//             "filename": "./log/errors",  
//             "pattern": ".dd.log",  
//             "alwaysIncludePattern": true  
//         }  
//     }],  
//     "replaceConsole": true  
// }
log4js.configure({
    appenders: [{
        type: 'console' // 控制台输出
    }, {
        type: 'dateFile', // 文件输出
        filename: 'logs/', // 需要手动创建此文件夹
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true,
        maxLogSize: 1024,
        backups: 4, // 日志备份数量，大于该数则自动删除
        // category: 'logInFo' // 记录器名 
    }],
    replaceConsole: true // 替换 console.log
});

levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
};



function dev(opts) {
    return function* logger(next) {
        // request
        var start = new Date;

        try {
            yield next;
        } catch (err) {
            // log uncaught downstream errors
            throw err;
        }

        log4js.connectLogger(log4js.getLogger('logInfo'), {
            level: levels['trace'],
            format: ':method :url :status'
        })
        var logger = log4js.getLogger('logInfo'),
            {request, response} = this,
            {method, url, header} = request,
            ip = request.ip

        console.log('--------------')
        console.log(method, url)
        console.log(ip, header.host)
        console.log(header['user-agent'])

    }
}
