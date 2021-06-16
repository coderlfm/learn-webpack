// import Vue from 'vue';
// import VueApp from './vueApp.vue';
// import axios from 'axios'

import React from 'react';
import ReactDom from 'react-dom'
import ReactApp from './reactApp.jsx'
console.log('hello webpack5');

// Vue.prototype.$http = axios;

// /**
//  * vue 模块热替换， vue-loader 已经集成了 模块热替换
//  */
// new Vue({
//     render: h => h(VueApp)
// }).$mount('#app');


/**
 * react 模块热更新需要使用 
 * webpack 插件 @pmmmwh/react-refresh-webpack-plugin
 * babel 插件 react-refresh 
 */
ReactDom.render(<ReactApp />, document.getElementById('root'));
