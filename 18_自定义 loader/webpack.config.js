const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "my-loader",
          options: {
            name: "lfm",
            age: 18,
          },
        },
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./my-loaders"],
  },
  // plugins: [new BundleAnalyzerPlugin()],
};
