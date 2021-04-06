// import _ from 'lodash';
// import dayjs from 'dayjs';

// 异步引入文件，webpack 默认会把它打包成一个文件
import('./foo').then(res=>{
    console.log(res);
})

console.log('main时间：',dayjs());

// console.log(_.join(['hello','webpack5','main.js']));
