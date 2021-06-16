const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build'),
    // publicPath: '/lfm/'
  },
  mode: 'development',
  devServer: {
    hot: true,

    // 关闭冗余的控制台调试信息
    clientLogLevel: 'silent',

    // 配置指定的 host 
    host: '0.0.0.0',

    // 该配置使我们的项目可以使用本地ip打开
    useLocalIp: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      },
      {
        test: /\.jsx?$/i,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    // new ReactRefreshPlugin(),

    // new HtmlWebpackPlugin({
    //     title: 'Vue App',
    //     template: './public/index.html',
    // }),
  ]
}