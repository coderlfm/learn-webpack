"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _foo = require("./js/foo.js");

var _require = require('./js/bar.js'),
    sayHello = _require.sayHello; // 浏览器是不支持CommonJS 模块化规范的，需要使用webpack 来进行打包


(0, _foo.showName)();
sayHello();
var p1 = new Promise(function (resolve, reject) {}); // const k = async () =>{
//     await p1();
// }

console.log('env：', env);