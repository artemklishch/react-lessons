const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: ["babel-loader"]
        },
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      hot: true
    }
};