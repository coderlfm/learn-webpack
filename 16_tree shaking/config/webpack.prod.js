const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PuregeCss = require("purgecss-webpack-plugin");
const golb = require("glob");
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env) => {
  // console.log('env: ', env);

  return {
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),

      // css tree shaking 通过 golb 来获取 src 目录下的所有 源文件，包括 js 文件
      // standrd 为安全区
      new PuregeCss({
        paths: golb.sync(`${path.resolve("./src")}/**/*`, { nodir: true }),
        safelist: function () {
          return {
            standrd: ["body", "html"],
          };
        },
      }),

      // 配置 gzip 压缩
      new CompressionPlugin({
        test:/(css|.js)$/i,
        threshold: 0,
        minRatio: 0.8,
        algorithm: "gzip",
      }),
      
    ],
    // mode: "production",
  };
};
