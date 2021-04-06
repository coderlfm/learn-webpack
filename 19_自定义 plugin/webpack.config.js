const path = require("path");
const UploadFile = require("./plugins/upload-file");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash:6].js",
    path: path.resolve(__dirname, "./build"),
  },
  mode: "development",
  plugins: [new UploadFile()],
};
