const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appRoot = './app';
const devPath = './dev';

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(appRoot, 'main.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(devPath, ''),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(devPath, ''),
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      // { test: /\.(css)$/, use: ['style-loader', 'css-loader'] ,include: path.resolve(appRoot) }, // style标签
      { test: /\.(css)$/, use: ['style-loader/url', 'file-loader'] ,include: path.resolve(appRoot) }, // link标签
      { test: /\.(js|jsx)$/, use: ['babel-loader'] ,include: path.resolve(appRoot) },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(appRoot, 'index.html')
    })
  ],
};