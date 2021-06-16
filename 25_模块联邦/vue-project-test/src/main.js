import Vue from 'vue';
import VueApp from './vueApp.vue';


/**
 * vue 模块热替换， vue-loader 已经集成了 模块热替换
 */
new Vue({
    render: h => h(VueApp)
}).$mount('#app');

