const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 可以配置打包生成注释
const TerserPlugin = require("terser-webpack-plugin");

const devlopmentConfig = require("./webpack.dev")();
const productmentConfig = require("./webpack.prod")();

// 当配置文件为导出一个函数时，动态传入不同的模式需要在 package.json中 使用 --env 来设置
module.exports = (env) => {
  console.log("env:", env);

  const mode = env.production ? "production" : "devlopment";

  let commonConfig = {
    mode: "development",
    // 该路径是基于 package.json 的路径
    // 配置多入口
    // 方式一：使用 dependOn 来实现共享文件，
    // 方式二：使用 dependOn 来实现共享文件，
    entry: {
      index: "./src/index.js",
    },
    output: {
      // TODO: hash 是项目级别的，当项目中任何一个文件修改后所有文件都会重新生成
      // chunkhash 会根据不同的入口文件，进行文件依赖解析再使用散列算法来生成一个 哈希值
      // contenthash 的粒度是文件级别的，只有修改的文件才会重新生成 哈希值，有利于缓存
      filename: "[name].[contenthash:6].bundle.js",

      path: path.resolve("./build"),

      // 异步打包的文件名
      chunkFilename: "[name].[hash:6].chunk.js",
    },
    devtool: "source-map",
    optimization: {     
      minimize: false,

      // 设置为 ture，会标记所有未使用的导出内容，terser 会将该未使用的进行删除
      usedExports: true,

      // 配置不生成注释
      minimizer: [
        new TerserPlugin({
          extractComments: false,

          /// 主要配置压缩
          terserOptions: {
            compress: {
              side_effects: false,
            },
            toplevel: false,
            // keep_fnames: true,
          },
        }),
      ],

      // 生成的模块id 算法
      // 开发环境默认是 named， 生产环境是 deterministic
      // natural 是 自然数
      // deterministic， 会在编译时生成不变的短数字 id，有利于长期缓存
      chunkIds: "natural",

      // splitChunks: {

      //   // 不管同步异步都单独生成文件
      //   chunks: 'all',

      //   // 生成模块的最小单位，/字节
      //   minSize: 20000,

      //   // 将大于 maxSize 的包，拆分成不小于 minSize 的包
      //   maxSize: 20000,

      //   // 被引用过 1 次的包，将会被单独生成
      //   // minChunks: 2,

      //   cacheGroups: {

      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       filename: '[name].vendor.js',
      //       priority: -10,
      //     },

      //   }

      // }
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
          test: /\.jsx?$/i,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: [
            // TODO: 此处需要根据来使用不同的loader
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
          // 所有的css 都是有副作用的，不需要 tree shaking
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };

  // 根据不同的环境来合并不同的配置
  if (!env.production) {
    finalConfig = merge(commonConfig, devlopmentConfig);
  } else {
    finalConfig = merge(commonConfig, productmentConfig);
  }

  return finalConfig;
};
