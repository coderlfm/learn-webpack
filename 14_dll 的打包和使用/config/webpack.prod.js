const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ProvidePlugin, DllPlugin, DllReferencePlugin } = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

module.exports = (env) => {
  // console.log('env: ', env);

  return {
    plugins: [
      new CleanWebpackPlugin(),
      //TODO: 打包成 dll
      // new DllPlugin({
      //   name: "dll_[name]",
      //   // context:__dirname,
      //   path: path.resolve(__dirname, "../dll/[name].manifest.json"),
      // }),

      // TODO: 打包之后的路径有些问题
      new DllReferencePlugin({
        // tontext 为配置根据 mainfest的上下文提供路径
        context: path.resolve(__dirname, "../"),
        manifest: path.resolve(__dirname, "../dll/react.manifest.json"),
      }),
      new AddAssetHtmlPlugin({
        // 添加静态资源到 html 文件
        filepath: path.resolve(__dirname, "../dll/react.e68e01.bundle.js"),
      }),
    ],

    mode: "production",
  };
};
