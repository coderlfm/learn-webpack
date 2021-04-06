const path = require("path");

module.exports = (env) => {
    return {
      mode: "development",
    
      // 开发服务配置
      devServer: {
        // 热更新
        hot: true,
    
        hotOnly: true,
    
        // 配置路径
        // publicPath: '/lfm/',
    
        // 启动后默认打开浏览器
        // open: true,
    
        // 默认是 localhost ，配置成 0.0.0.0 可以让外部服务器可以访问
        // host: "0.0.0.0",
    
        // 开发监听端口
        // port: 3000,
    
        // 配置是否打开 gzip 压缩
        compress: true,
    
        watchContentBase: true,
    
        // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
        // contentBase: path.resolve(__dirname, 'lfm')
      },
      plugins: [ ],
  }
}