const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {

    console.log('env: ', env);

    return {
      plugins:[
        new CleanWebpackPlugin(),

      ],
      mode: "production",
  }
}