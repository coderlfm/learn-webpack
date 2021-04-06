const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssminizerPlugin = require('css-minimizer-webpack-plugin')
const { ProvidePlugin, DllPlugin, DllReferencePlugin } = require("webpack");

module.exports = (env) => {
  // console.log('env: ', env);

  return {
    plugins: [
      new CleanWebpackPlugin(),
      // css 单独抽离
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
      // css 压缩，去除空格
      new CssminizerPlugin()
    ],
    mode: "production",
  };
};
