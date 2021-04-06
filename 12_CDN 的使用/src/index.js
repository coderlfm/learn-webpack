// import _ from 'lodash';
// import dayjs from 'dayjs';

const button = document.createElement('button');
button.innerText = '加载bar';

button.addEventListener('click',() => {

  /**
   * webpackPrefetch： 会在浏览器有空闲时间的时候先下载
   * webpackPreload： 会随着当前文件的父文件一并加载
   * 
   */
  import(
    /* webpackChunkName: 'bar' */
    /* webpackPrefetch: true */
    "./bar"
  ).then(({sum: sum }) => {
    console.log('webpackPrefetch: ',sum(1,2));
  });
}
)
document.body.appendChild(button);


// // webpackPreload
// import(
//   /* webpackChunkName:'bar' */
//   /* webpackPreload: true */
//   "./bar"
//   ).then(({barsum: sum }) => {
//     console.log('webpackPreload: ',sum(1,2));
//   });

// TODO: 未引入 lodash , 但是我们使用 shimming 做补丁来防止代码能正常运行，但是实际开发中是不推荐使用的
// console.log(_.join(['hello','webpack5','main.js']));

  
// console.log("当前时间：", dayjs().format());


// 两个入口文件使用了同一个库，可以对该库进行分离
// console.log(_.join(["hello", "webpack5", "index.js"]));
