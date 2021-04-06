const { merge } = require('webpack-merge');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 可以配置打包生成注释
const TerserPlugin  = require('terser-webpack-plugin')

const devlopmentConfig = require('./webpack.dev')();
const productmentConfig = require('./webpack.prod')();




// 当配置文件为导出一个函数时，动态传入不同的模式需要在 package.json中 使用 --env 来设置
module.exports = (env) =>{
    
    // console.log('env:',env);
    
    const mode = env.production ? 'production' : 'devlopment';
    
    let commonConfig = {
      mode,
      // 该路径是基于 package.json 的路径
      // 配置多入口
      // 方式一：使用 dependOn 来实现共享文件，
      // 方式二：使用 shared 来实现共享文件，
        entry: {
          index: "./src/index.js",
          mian: './src/main.js',
          // main: { import : "./src/main.js", dependOn: 'shared' },
          // index: { import : "./src/index.js", dependOn: 'shared' },
          // jquery:'jquery',
          // shared: ['jquery','lodash']
          // lodash: ['lodash'],

          // 会将以下两个 包打包在同一个包里面
          // shared: ['lodash', 'dayjs']
        },
        // entry: {
        //   main: { import : "./src/main.js", dependOn: 'lodash' },
        //   index: { import : "./src/main.js", dependOn: 'shared' },
        //   lodash: ['lodash'],

        //   // 会将以下两个 包打包在同一个包里面
        //   shared: ['lodash', 'dayjs']
        // },
        output: {
          filename: "[name].bundle.js",
          path: path.resolve("./build"),
          chunkFilename: '[name].[hash:6].chunk.js'
      
          // 当我们项目部署在非根目录时， 可以配置成 / 目录名 /  或者  ./
          // 表示从当前目录加载文件
          // publicPath: '/lfm/'

        }, 
        optimization: {

          // 配置不生成注释
          minimizer: [ new TerserPlugin({ extractComments: false }) ],
          
          // 生成的模块id 算法
          // 开发环境默认是 named， 生产环境是 deterministic
          // deterministic， 会在编译时生成不变的短数字 id，有利于长期缓存
          chunkIds: 'named',

          // multiple 或者 true 会为每个 入口文件都生成一个 runtime 文件
          // single   会为我们生成一个 runtime 文件
          runtimeChunk: 'single',
          
          splitChunks: {

            // 不管同步异步都单独生成文件
            // chunks: 'all',

            // // 生成模块的最小单位，/字节
            // minSize: 20000,

            // // 将大于 maxSize 的包，拆分成不小于 minSize 的包
            // maxSize: 20000,
            
            // 被引用过 1 次的包，将会被单独生成
            // minChunks: 1,

            // cacheGroups: {
              
            //   vendor: {
            //     test: /[\\/]node_modules[\\/]/,
            //     filename: '[id].vendor.js',
            //     priority: -10,
            //   },
              
            // }
            
          }
          
        },
        // 解析
        resolve: {
          // 尝试按照以下文件扩展名来解析文件，导入文件时可以不加文件扩展名
          // 配置后将会覆盖 webpack 默认的配置数组
          extensions: [".wasm", ".mjs", ".js", ".json", ".vue", ".jsx", ".tsx"],
      
          // 配置路径别名
          alias: {
            "@": path.resolve(__dirname, "src"),
          },
        },
        module: {
          rules: [
            {
              test: /\.vue$/i,
              use: "vue-loader",
            },
            {
              test: /\.jsx?$/i,
              use: "babel-loader",
            },
          ],
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: "./public/index.html",
          }),
          new VueLoaderPlugin(),

        ],
    };

    // 根据不同的环境来合并不同的配置
    if(!env.production){
        finalConfig = merge(commonConfig, devlopmentConfig);
    }else{
        finalConfig = merge(commonConfig, productmentConfig);
    }
    
    return finalConfig
}