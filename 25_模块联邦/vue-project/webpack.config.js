const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./build"),

    // 当我们项目部署在非根目录时， 可以配置成 / 目录名 /  或者  ./
    // 表示从当前目录加载文件
    // publicPath: '/lfm/'
  },
  mode: "development",

  // 开发服务配置
  devServer: {
    // 热更新
    hot: true,

    hotOnly: true,

    // 关闭控制台冗余的调试信息
    clientLogLevel: 'silent',

    // 该配置使我们的项目可以使用本地ip打开
    useLocalIp: true,

    // 配置路径
    // publicPath: '/lfm/',

    // 启动后默认打开浏览器
    open: true,

    // 默认是 localhost ，配置成 0.0.0.0 可以让外部服务器可以访问
    host: "0.0.0.0",

    // 开发监听端口
    port: 3001,

    // 配置是否打开 gzip 压缩
    compress: true,

    // 文件更改后是否重新加载整个页面
    watchContentBase: true,

    // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    // contentBase: path.resolve(__dirname, 'lfm')

    proxy: {
      "/lfm": {
        target: "http://47.108.151.32:9502",
        pathRewrite: {
          "^/lfm": ""
        },
        secure: false,
        changeOrigin: true
      }
    },
  },

  // 解析
  resolve: {
    // 尝试按照以下文件扩展名来解析文件，导入文件时可以不加文件扩展名
    // 配置后将会覆盖 webpack 默认的配置数组
    // extensions: [".wasm", ".mjs", ".js", ".json", ".vue", ".jsx", ".tsx"],

    // 配置路径别名
    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    // },
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
    // new ModuleFederationPlugin({
    //   name: 'vueapp',
    //   filename:'childrenVueApp.js',
    //   remotes: {
    //     reactProject: 'home@http://172.16.5.8:3002/childrenReactApp.js'
    //   },
    //   exposes: {
    //     './VueApp': './src/main.js'
    //   }
    // })
  ],
};
