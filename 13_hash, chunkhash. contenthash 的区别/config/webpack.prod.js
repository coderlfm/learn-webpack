const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack')

module.exports = (env) => {

    // console.log('env: ', env);

    return {
      plugins: [
        new CleanWebpackPlugin(),

        // 使用 webpack 中的 ProvidePlugin 内置插件来给我们使用的一些第三方插件做一些补丁
        new ProvidePlugin({
          _ : 'lodash',
          dayjs : 'dayjs',
        }),
      ],
      
      mode: "production",
  }
}