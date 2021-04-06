const { merge } = require('webpack-merge');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const devlopmentConfig = require('./webpack.dev')();
const productmentConfig = require('./webpack.prod')();



// 当配置文件为导出一个函数时，动态传入不同的模式需要在 package.json中 使用 --env 来设置
module.exports = (env) =>{
    
    console.log('env:',env);
    
    const mode = env.production ? 'production' : 'devlopment';
    
    let commonConfig = {
        // 该路径是基于 package.json 的路径
        mode,
        entry: "./src/main.js",
        output: {
          filename: "bundle.js",
          path: path.resolve("./build"),
      
          // 当我们项目部署在非根目录时， 可以配置成 / 目录名 /  或者  ./
          // 表示从当前目录加载文件
          // publicPath: '/lfm/'
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

    if(!env.production){
        finalConfig = merge(commonConfig, devlopmentConfig);
    }else{
        finalConfig = merge(commonConfig, productmentConfig);
    }
    
    return finalConfig
}