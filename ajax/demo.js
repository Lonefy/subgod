module.exports = function*() {

    
     this.body = [1,2,3,4,5];
}

// var aj_data_response = require(basePath + "common/aj_data_response");

// module.exports = function * () {
    
//   var articleListResult = yield aj_data_response.call(this, 'articleList', {
//     uid: this.query.uid,
//     starttime: this.query.starttime,
//     endtime: this.query.endtime
//   });


//   this.body = articleListResult;
// };

// articleListResult part
// /**
//  * 接口数据返回的封装
//  * @param  {string} requestName 接口名称
//  * @param  {object} args        接口请求参数
//  * @param {ctx} 需要this上下文
//  * @return {object}             可以返回给客户端的结果对象
//  * @author finrila
//  */
// var json_result = require('./json_result');
// var common_request = require('./request');
// var common_userInfo = require('./userInfo');
// var get_oauth_token = require('./get_oauth_token');
// // var get_oauth_token_by_uid = require('./get_oauth_token_by_uid');
// var co = require('co');
// var log = Log('aj_data_response');

// module.exports = function (requestName, args) {
//   var _this = this;
//   return co(function* () {
//     return json_result(data, errormsg, errorcode);
//   });

// };